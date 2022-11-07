import React from 'react';
import { useSelector } from 'react-redux';
import Responsive from 'react-responsive';
import ReadingBookItem from './ReadingBookItem';
import ReadBookItemMobile from './ReadingBookItemMobile';
import { getNowRead } from '../../../redux/selectors/bookSelector';
import ReadingBooksStyled from './ReadingBooksStyled';

const ReadingBooks = () => {
    const bookNowRead = useSelector(getNowRead);
    const Tablet = props => <Responsive {...props} minWidth={768} />;
    const Mobile = props => <Responsive {...props} maxWidth={767} />;

    return (
        <ReadingBooksStyled className="readingBooksStyled container">
            <Tablet>
                <h2>Reading</h2>
                <div className="table-title">
                    <p>Title</p>
                    <p>Author</p>
                    <p>Year</p>
                    <p>Pages</p>
                </div>
                <ul>
                    {bookNowRead.map(book => (
                        <ReadingBookItem key={book._id} item={book} />
                    ))}
                </ul>
            </Tablet>
            <Mobile>
                <div className="readingNowMobil">
                    <h2>Reading</h2>
                    <ul>
                        {bookNowRead.map((item, idx) => (
                            <ReadBookItemMobile book={item} key={idx} />
                        ))}
                    </ul>
                </div>
            </Mobile>
        </ReadingBooksStyled>
    );
};

export default ReadingBooks;
