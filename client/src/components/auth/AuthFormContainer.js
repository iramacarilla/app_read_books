import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import AuthForm from './AuthForm';
import authOperations from '../../redux/operations/authOperation';
import { getUsersBooksOperetion } from '../../redux/operations/bookOperation';

const AuthFormContainer = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [showNotif, setShowNotif] = useState(false);

    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const errorMessagesSchemaSignUp = Yup.object().shape({
        username: Yup.string()
            .min(2, 'Мінімальна кількість символів 2')
            .max(30, 'Максимальна кількість символів 30')
            .required('Введіть ім`я'),

        email: Yup.string()
            .required('Введіть email')
            .matches(regex, 'Формат email невірний'),

        password: Yup.string()
            .min(6, 'Мінімальна кількість символів 6')
            .max(20, 'Максимальна кількість символів 20')
            .required('Введіть пароль'),

        passwordConfirmation: Yup.string().oneOf(
            [Yup.ref('password')],
            'Паролі повинні співпадати',
        ),
    });
    const errorMessagesSchemaSignIn = Yup.object().shape({
        email: Yup.string()
            .required('Введіть email')
            .matches(regex, 'Формат email невірний'),

        password: Yup.string()
            .min(6, 'Мінімальна кількість символів 6')
            .max(20, 'Максимальна кількість символів 20')
            .required('Введіть пароль'),
    });
    const errorMessagesSchema =
        location.pathname === '/signup'
            ? errorMessagesSchemaSignUp
            : errorMessagesSchemaSignIn;

    const handleSubmit = values => {
        location.pathname === '/signup' ? signUp(values) : signIn(values);
    };

    const signUp = async values => {
        try {
            await dispatch(
                authOperations.regOperation({
                    username: values.username,
                    email: values.email,
                    password: values.password,
                }),
            );
        } catch (err) {
            err.message === 'Email in use' && setShowNotif(true);
        }
    };

    const signIn = async values => {
        try {
            await dispatch(authOperations.logInOperation(values));
            await dispatch(getUsersBooksOperetion());
        } catch (err) {
            err.message === 'Email or password is wrong' && setShowNotif(true);
        }
    };

    return (
        <AuthForm
            handleSubmit={handleSubmit}
            errorMessagesSchema={errorMessagesSchema}
            showNotif={showNotif}
            setShowNotif={setShowNotif}
        />
    );
};

export default AuthFormContainer;
