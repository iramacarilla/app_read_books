import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import GoogleAuthBtn from './GoogleAuthBtn';
import AuthModal from './AuthModal';
import { InvalidNotif, UseNotif } from './Notificitaions';
import pointer from './icons/pointer.png';
import Two from './icons/two';
import AuthFormStyled from './AuthFormStyled';

const AuthForm = ({
    handleSubmit,
    errorMessagesSchema,
    showNotif,
    setShowNotif,
}) => {
    const location = useLocation();
    const [isOpenModal, setOpenModal] = useState(false);

    const onModal = () => {
        setOpenModal(true);
    };

    const initialState =
        location.pathname === '/signup'
            ? {
                  username: '',
                  email: '',
                  password: '',
                  passwordConfirmation: '',
              }
            : { email: '', password: '' };

    return (
        <AuthFormStyled path={location.pathname === '/signup'}>
            <div className="auth-container">
                <div className="container bg-ph">
                    <Formik
                        initialValues={{ ...initialState }}
                        validationSchema={errorMessagesSchema}
                        onSubmit={values => {
                            handleSubmit(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className="authForm">
                                <GoogleAuthBtn />

                                {location.pathname === '/signup' && (
                                    <label className="authFormFild">
                                        <span className="authFormText">
                                            Name{' '}
                                            <sup className="authFormStar">
                                                {' '}
                                                *
                                            </sup>
                                        </span>
                                        <div className="wrapper">
                                            <Field
                                                className={`authFormInput ${
                                                    touched.username &&
                                                    errors.username &&
                                                    'authInputError'
                                                }`}
                                                type="text"
                                                name="username"
                                                placeholder=" "
                                            />

                                            <span className="authError">
                                                <ErrorMessage name="username" />
                                            </span>
                                        </div>
                                    </label>
                                )}
                                <label className="authFormFild">
                                    <span className="authFormText">
                                        Email{' '}
                                        <sup className="authFormStar">*</sup>
                                    </span>
                                    <div className="wrapper">
                                        <Field
                                            className={`authFormInput ${
                                                touched.email &&
                                                errors.email &&
                                                'authInputError'
                                            }`}
                                            type="text"
                                            name="email"
                                            placeholder="your@email.com"
                                        />
                                        {location.pathname === '/signup' ? (
                                            <CSSTransition
                                                in={showNotif}
                                                onEntered={() =>
                                                    setShowNotif(false)
                                                }
                                                timeout={2000}
                                                classNames="ntf"
                                                unmountOnExit
                                            >
                                                <UseNotif />
                                            </CSSTransition>
                                        ) : (
                                            <CSSTransition
                                                in={showNotif}
                                                onEntered={() =>
                                                    setShowNotif(false)
                                                }
                                                timeout={2000}
                                                classNames="ntf"
                                                unmountOnExit
                                            >
                                                <InvalidNotif />
                                            </CSSTransition>
                                        )}
                                        <span className="authError">
                                            <ErrorMessage name="email" />
                                        </span>
                                    </div>
                                </label>
                                <label className="authFormFild">
                                    <span className="authFormText">
                                        Password{' '}
                                        <sup className="authFormStar">*</sup>
                                    </span>
                                    <div className="wrapper">
                                        <Field
                                            className={`authFormInput ${
                                                touched.password &&
                                                errors.password &&
                                                'authInputError'
                                            }`}
                                            type="password"
                                            name="password"
                                            placeholder="Пароль"
                                        />
                                        <span className="authError">
                                            <ErrorMessage name="password" />
                                        </span>
                                    </div>
                                </label>
                                {location.pathname === '/signup' && (
                                    <label className="authFormFild">
                                        <span className="authFormText">
                                            Confirm the password{' '}
                                            <sup className="authFormStar">
                                                *
                                            </sup>
                                        </span>
                                        <div className="wrapper">
                                            <Field
                                                className={`authFormInput ${
                                                    touched.password &&
                                                    errors.password &&
                                                    'authInputError'
                                                }`}
                                                type="password"
                                                name="passwordConfirmation"
                                                placeholder="Password"
                                            />
                                            <span className="authError">
                                                <ErrorMessage name="passwordConfirmation" />
                                            </span>
                                        </div>
                                    </label>
                                )}
                                <button
                                    className="mainButton authFormBtn"
                                    type="submit"
                                >
                                    {location.pathname === '/signup'
                                        ? 'Sign Up'
                                        : 'Sign In'}
                                </button>
                                {location.pathname === '/signup' ? (
                                    <button
                                        className="mainButton authFormBtnSec"
                                        type="button"
                                    >
                                        <Link
                                            to="/"
                                            className="buttonSignUpMain"
                                        >
                                            <p className="buttonSignUpMain__text">
                                                Already has account?{' '}
                                                <span className="buttonSignUpMain__link">
                                                    {' '}
                                                    Sign In{' '}
                                                </span>{' '}
                                            </p>
                                        </Link>
                                    </button>
                                ) : window.innerWidth < 768 ? (
                                    <button
                                        type="button"
                                        onClick={onModal}
                                        className="mainButton authFormBtnSec buttonSignUpMain"
                                    >
                                        <span className="buttonSignUpMain__link">
                                            Sign Up
                                        </span>
                                    </button>
                                ) : (
                                    <Link
                                        to="/signup"
                                        className="mainButton authFormBtnSec buttonSignUpMain"
                                    >
                                        <span className="buttonSignUpMain__link">
                                            Sign Up
                                        </span>
                                    </Link>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="div-for-fl container">
                    {location.pathname === '/' && (
                        <div className="div-cont">
                            <Two />
                            <p className="teza">
                                Books are ships of thought roaming the waves of
                                time and carefully carrying their precious cargo
                                from generation to generation.
                            </p>
                            <p className="becon line">Bekon F.</p>
                        </div>
                    )}
                    {isOpenModal && window.innerWidth < 767 && (
                        <AuthModal setOpenModal={setOpenModal} />
                    )}
                    {window.innerWidth > 767 &&
                        location.pathname === '/signup' && (
                            <div className="signupDiv">
                                <h1 className="mainTitleSignUp">
                                    Books Reading
                                </h1>
                                <h2 className="titleSignUp">Help you</h2>
                                <ul className="authFormList">
                                    <li className="authFormText">
                                        <img
                                            className="pointer"
                                            src={pointer}
                                            alt=""
                                        />
                                        <p className="instraction">
                                            Formulate your goal faster and start
                                            reading
                                        </p>
                                    </li>
                                    <li className="authFormText">
                                        <img
                                            className="pointer"
                                            src={pointer}
                                            alt=""
                                        />
                                        <p className="instraction">
                                            Proportionately distribute the load
                                            for each day
                                        </p>
                                    </li>
                                    <li className="authFormText">
                                        <img
                                            className="pointer"
                                            src={pointer}
                                            alt=""
                                        />
                                        <p className="instraction">
                                            Track personal success
                                        </p>
                                    </li>
                                </ul>
                                <h2 className="titleSignUp">You can also</h2>
                                <ul className="authFormList">
                                    <li className="authFormText ">
                                        <img
                                            className="pointer"
                                            src={pointer}
                                            alt=""
                                        />
                                        <p className="instraction">
                                            Form a personal opinion
                                            independently of others
                                        </p>
                                    </li>
                                    <li className="authFormText">
                                        <img
                                            className="pointer"
                                            src={pointer}
                                            alt=""
                                        />
                                        <p className="instraction">
                                            Improve your professional qualities
                                            based on new knowledge
                                        </p>
                                    </li>
                                    <li className="authFormText last">
                                        <img
                                            className="pointer"
                                            src={pointer}
                                            alt=""
                                        />
                                        <p className="instraction">
                                            Become an interesting interlocutor
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        )}
                </div>
            </div>
        </AuthFormStyled>
    );
};

export default AuthForm;
