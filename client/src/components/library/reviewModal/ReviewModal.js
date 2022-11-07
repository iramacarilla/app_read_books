import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import StarRatings from 'react-star-ratings';
import { changeBookOperation } from '../../../redux/operations/bookOperation';
import ReviewModalStyled from './ReviewModalStyled';

const ReviewModal = ({ data, closeModal }) => {
    const dispatch = useDispatch();
    const [book, setBook] = useState({ ...data });
    const [rating, setRating] = useState();
    const [showError, setShowError] = useState(false);
    const [change, setChange] = useState(false);

    const onHandleChange = e => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };
    const onHandleSubmit = e => {
        e.preventDefault();
        if (!book.review) {
            return setShowError(true);
        }
        dispatch(
            changeBookOperation(book._id, {
                review: book.review,
                rating: rating,
            }),
        );
        setBook({ ...book });
    };
    const isChange = () => {
        setChange(true);
    };

    const changeRating = newRating => {
        setRating(newRating);
    };

    return (
        <ReviewModalStyled isReview={data.review} onSubmit={onHandleSubmit}>
            {!data.review && (
                <>
                    <p>Choose a book rating</p>
                    <StarRatings
                        rating={rating}
                        starRatedColor="#FF6B08"
                        starEmptyColor="white"
                        starSpacing="1px"
                        changeRating={changeRating}
                        starDimension="17px"
                        numberOfStars={5}
                        name="rating"
                    />
                    <p>Review</p>
                </>
            )}
            {change && (
                <StarRatings
                    rating={rating}
                    starRatedColor="#FF6B08"
                    starEmptyColor="white"
                    starSpacing="1px"
                    changeRating={changeRating}
                    starDimension="17px"
                    numberOfStars={5}
                    name="rating"
                />
            )}
            {!data.review && (
                <textarea
                    className="form-control"
                    rows="5"
                    type="textarea"
                    name="review"
                    value={book.review}
                    onChange={onHandleChange}
                />
            )}
            {change && (
                <textarea
                    className="form-control"
                    rows="5"
                    type="textarea"
                    name="review"
                    value={book.review}
                    onChange={onHandleChange}
                />
            )}
            {showError && <p className="review-error">Can not be empty</p>}
            {data.review && !change && (
                <p className="current-resume">{data.review}</p>
            )}
            <div className="button-group">
                <button
                    type="button"
                    className="secondButton"
                    onClick={closeModal}
                >
                    Back
                </button>

                {data.review && !change && (
                    <button
                        type="submit"
                        onClick={isChange}
                        className="mainButton"
                    >
                        Change
                    </button>
                )}

                {!data.review && (
                    <button type="submit" className="mainButton">
                        Save
                    </button>
                )}
                {change && (
                    <button type="submit" className="mainButton">
                        Save
                    </button>
                )}
            </div>
        </ReviewModalStyled>
    );
};
export default ReviewModal;
