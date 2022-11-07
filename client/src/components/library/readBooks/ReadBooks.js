import React from 'react';
import { useSelector } from 'react-redux';
import Responsive from 'react-responsive';
import ReadBookItem from './ReadBookItem';
import ReadBookItemMobile from './ReadBookItemMobile';
import { getFinishRead } from '../../../redux/selectors/bookSelector';
import ReadBooksStyled from './ReadBooksStyled';

const ReadBooks = () => {
    const Tablet = props => <Responsive {...props} minWidth={768} />;
    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    const bookFinished = useSelector(getFinishRead);

    return (
        <ReadBooksStyled className="readBooksStyled container">
            <Tablet>
                <h2>Has read</h2>
                <div className="table-title">
                    <p>Title</p>
                    <p>Author</p>
                    <p>Year</p>
                    <p>Pages</p>
                    <p>Rate</p>
                </div>
                <ul>
                    {bookFinished.map(book => (
                        <ReadBookItem key={book._id} item={book} />
                    ))}
                </ul>
            </Tablet>
            <Mobile>
                <div className="readMobil">
                    <h2>Has read</h2>
                    <ul>
                        {bookFinished.map(book => (
                            <ReadBookItemMobile key={book._id} item={book} />
                        ))}
                    </ul>
                </div>
            </Mobile>
        </ReadBooksStyled>
    );
};

export default ReadBooks;
