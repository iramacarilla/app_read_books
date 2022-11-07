import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { useFormik } from 'formik';
import moment from 'moment';
import InputDatePicker from '../dataPicker/PickerData';
import ButtonAdd from '../../buttonAdd/ButtonAdd';
import Modal from '../../modal/Modal';
import MobBookList from '../booksLists/mob/MobBookList';
import { Notif } from '../traningForm/Notification';
import { validationSchema } from '../ValidationTrainingForm';
import Selector from '../traningForm/selectBooks/Selector';
import trainingOperation from '../../../redux/operations/trainingOperation';
import back from '../../../assets/svg/back.svg';
import TraningMadalStyled from './TraningModalStyled';

const TrainingModal = () => {
    const dispatch = useDispatch();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [booksArr, setBooks] = useState([]);
    const [showNotif, setShowNotif] = useState(false);

    const formik = useFormik({
        initialValues: {
            start: '',
            end: '',
            book: '',
        },
        validationSchema,
        onSubmit: values => {
            if (booksArr.some(item => item._id === values.book._id)) {
                setShowNotif(true);

                return;
            } else {
                setBooks(prev => [...prev, values.book]);
                setIsOpenModal(false);
            }
        },
    });
    const onHandleDeleteBook = e => {
        const { id } = e.currentTarget.dataset;
        setBooks(prev => prev.filter(book => book._id !== id));
    };

    const handleStartDate = date => {
        const start = moment(date).format('YYYY-MM-DD');
        formik.setFieldValue('start', start);
        setStart(start);
    };
    const handleEndDate = date => {
        const end = moment(date).format('YYYY-MM-DD');
        formik.setFieldValue('end', end);
        setEnd(end);
    };

    const handleBook = value => {
        formik.setFieldValue('book', value);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

    const openModal = () => {
        setIsOpenModal(true);
    };

    const books = booksArr.map(book => book._id);

    const onHandleAddTraining = () => {
        dispatch(
            trainingOperation.operationAddNewTraining({
                start,
                end,
                books,
            }),
        );
    };

    return (
        <TraningMadalStyled>
            <MobBookList
                onHandleDeleteBook={onHandleDeleteBook}
                books={booksArr}
            />
            {booksArr.length > 0 && (
                <div>
                    <button onClick={onHandleAddTraining} className="formBtn">
                        Start a training
                    </button>
                </div>
            )}
            <ButtonAdd onHandleClick={openModal} />
            {isOpenModal && (
                <Modal closeModal={closeModal}>
                    <div className="trainingModal">
                        <button
                            className="bookFormBtnBack"
                            onClick={closeModal}
                        >
                            <img
                                src={back}
                                alt=""
                                width="24px"
                                height="11.62px"
                            />
                        </button>
                        <div className="training">
                            <div className="baner">
                                <p className="baner__title">My training</p>
                            </div>
                            <form className="training-form">
                                <div className="training-form__wrap">
                                    <div className="training-form__pickers">
                                        <InputDatePicker
                                            value={formik.values.start}
                                            placeholderText="Start"
                                            onChange={handleStartDate}
                                            pickedDate={
                                                start ? new Date(start) : ''
                                            }
                                        />
                                        {formik.touched.start &&
                                        formik.errors.start ? (
                                            <p className="error start">
                                                {formik.errors.start}
                                            </p>
                                        ) : null}

                                        <InputDatePicker
                                            value={formik.values.end}
                                            placeholderText="End"
                                            onChange={handleEndDate}
                                            pickedDate={
                                                end ? new Date(end) : ''
                                            }
                                        />
                                        {formik.touched.end &&
                                        formik.errors.end ? (
                                            <p className="error end">
                                                {formik.errors.end}
                                            </p>
                                        ) : null}
                                    </div>
                                </div>
                            </form>

                            <form
                                onSubmit={formik.handleSubmit}
                                className="training-form"
                            >
                                <div className="training-form__wrap">
                                    <Selector
                                        value={formik.values.book}
                                        onChange={handleBook}
                                    />

                                    {formik.touched.book &&
                                    formik.errors.book ? (
                                        <p className="error book">
                                            {formik.errors.book}
                                        </p>
                                    ) : null}

                                    <button
                                        type="submit"
                                        className="bookFormBtn"
                                    >
                                        Add
                                    </button>
                                </div>
                            </form>
                            <CSSTransition
                                in={showNotif}
                                onEntered={() => setShowNotif(false)}
                                timeout={2000}
                                classNames="ntf"
                                unmountOnExit
                            >
                                <Notif />
                            </CSSTransition>
                        </div>
                    </div>
                </Modal>
            )}
        </TraningMadalStyled>
    );
};

export default TrainingModal;
