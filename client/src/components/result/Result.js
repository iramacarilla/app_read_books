import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Statistics from '../statistic/Statistics';
import EndTrainingModal from '../endTrainingMdl/EndTrainingModal';
import trainingOperation from '../../redux/operations/trainingOperation';
import trainingSelector from '../../redux/selectors/trainingSelector';
import ResultStyled from './ResultStyled';

const Result = () => {
    const dispatch = useDispatch();

    const startDate = useSelector(trainingSelector.getStartDate);

    const validationSchema = yup.object({
        date: yup
            .string()
            .required('Choose a date')
            .test({
                message: 'Date ERROR',
                test: function (value) {
                    const date = moment(value).format('YYYY-MM-DD');
                    return (
                        date >= startDate &&
                        date <= moment(Date.now()).format('YYYY-MM-DD')
                    );
                },
            }),
        pages: yup
            .number()
            .min(1, `Обов'язкове поле(не менше одиниці)`)
            .required(),
    });

    const formik = useFormik({
        initialValues: {
            date: '',
            pages: '',
        },
        validationSchema,
        onSubmit: values => {
            patchTraining(values);
        },
    });

    const handleDateChange = date => {
        formik.setFieldValue('date', date);
    };

    const patchTraining = async values => {
        try {
            dispatch(
                trainingOperation.addReadPagesOperation({
                    date: moment(values.date).format('YYYY-MM-DD'),
                    pages: values.pages,
                }),
            );
        } catch (err) {
            return;
        }
    };

    return (
        <ResultStyled className="resultStyled">
            <p className="resultsTitle">Result</p>
            <form
                className="resultsForm"
                onSubmit={formik.handleSubmit}
                autoComplete="off"
            >
                <div className="formGroup">
                    <div className="inputGroup">
                        <label className="label" htmlFor="date">
                            Date
                        </label>
                        <DatePicker
                            selected={formik.values.date}
                            onChange={handleDateChange}
                            dateFormat="d.MM.yyyy"
                            name="data"
                            placeholderText="д.мм.рррр"
                            className="formInputDate"
                            popperProps={{
                                positionFixed: true,
                            }}
                            id="date"
                        />
                        {formik.touched.date && formik.errors.date ? (
                            <span className="error ">{formik.errors.date}</span>
                        ) : null}
                    </div>
                    <div className="inputGroup">
                        <label className="label" htmlFor="pages">
                            Number of pages
                        </label>
                        <input
                            type="number"
                            name="pages"
                            placeholder="..."
                            id="pages"
                            className="pagesInput"
                            onChange={formik.handleChange}
                            value={formik.values.pages}
                        />
                        {formik.touched.pages && formik.errors.pages ? (
                            <span className="error ">
                                {formik.errors.pages}
                            </span>
                        ) : null}
                    </div>
                </div>
                <button type="submit" className="formButton">
                    Add result
                </button>
            </form>
            <Statistics />
            <EndTrainingModal />
        </ResultStyled>
    );
};
export default Result;
