import React from 'react';
import { useSelector } from 'react-redux';
import Responsive from 'react-responsive';
import WillReadBookItem from './WillReadBookItem';
import WillReadBookItemMobile from './WillReadBookItemMobile';
import { getWillRead } from '../../../redux/selectors/bookSelector';
import WillReadBooksStyled from './WillReadBooksStyled';

const WillReadBooks = () => {
    const booksWillRead = useSelector(getWillRead);

    const Tablet = props => <Responsive {...props} minWidth={768} />;
    const Mobile = props => <Responsive {...props} maxWidth={767} />;

    return (
        <WillReadBooksStyled className="willReadBooksStyled  container">
            <Tablet>
                <h2>Will read</h2>
                <div className="table-title">
                    <p>Title</p>
                    <p>Author</p>
                    <p>Year</p>
                    <p>Pages</p>
                </div>
                <ul className="willReadBooksItemStyled">
                    {booksWillRead.map(item => (
                        <WillReadBookItem book={item} key={item._id} />
                    ))}
                </ul>
            </Tablet>
            <Mobile>
                <div className="willReadMobil">
                    <h2>Маю намір прочитати</h2>
                    <ul>
                        {booksWillRead.map(item => (
                            <WillReadBookItemMobile
                                book={item}
                                key={item._id}
                            />
                        ))}
                    </ul>
                </div>
            </Mobile>
        </WillReadBooksStyled>
    );
};

export default WillReadBooks;
