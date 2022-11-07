import bookOrg from '../../../assets/svg/bookOrg.svg';
import ReadBookItemMobileStyled from './ReadingBookItemMobileStyled';

const ReadBookItemMobile = ({ book }) => {
    return (
        <ReadBookItemMobileStyled>
            <div className="bookName flex">
                <img src={bookOrg} alt="" />
                <p>{book.title}</p>
            </div>
            <div className="author flex">
                <p className="title">Author:</p>
                <p className="text">{book.author}</p>
            </div>
            <div className="publishYear flex">
                <p className="title">Year:</p>
                <p className="text">{book.year}</p>
            </div>
            <div className="pages flex">
                <p className="title">Pages:</p>
                <p className="text">{book.numberOfPages}</p>
            </div>
        </ReadBookItemMobileStyled>
    );
};

export default ReadBookItemMobile;
