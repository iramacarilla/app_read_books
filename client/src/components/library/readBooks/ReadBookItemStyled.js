import styled from 'styled-components';

const ReadBookItemStyled = styled.li`
    display: flex;
    align-items: center;
    font-family: 'Montserrat-Medium';
    font-size: 14px;
    background-color: #ffffff;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
    margin-bottom: 10px;
    @media screen and (min-width: 768px) {
        padding: 11px 20px;
    }
    @media screen and (min-width: 1280px) {
        padding: 11px 0;
        padding-left: 20px;
    }
    .bookName {
        display: flex;
        align-items: center;
        flex: 2 1 0%;
    }
    .star-ratings {
        margin-right: 18px;
    }
    .star-container svg {
        stroke: #ff6b08;
    }
    .bookName img {
        margin-right: 18px;
    }
    p {
        @media screen and (min-width: 768px) {
            flex: 1 1 0%;
        }
        @media (min-width: 768px) and (max-width: 1279px) {
            max-width: 160px;
        }
    }
    .pages {
        @media screen and (min-width: 768px) {
            flex: 0.6 1 0%;
        }
        @media screen and (min-width: 1280px) {
            flex: 1 1 0%;
        }
    }
    .publishYear {
        @media screen and (min-width: 768px) {
            flex: 0.6 1 0%;
        }
        @media screen and (min-width: 1280px) {
            flex: 1 1 0%;
        }
    }
    .review {
        display: flex;
        flex: 2 1 0%;
        align-items: center;
    }

    .review-button {
        background-color: ${props =>
            props.isReview ? 'var(--secondary-text)' : 'var(--accent-color)'};
        font-family: 'Montserrat-Medium';
        color: #ffffff;
        font-size: 14px;
        border: none;

        @media screen and (min-width: 768px) {
            padding: 11px 11px;
        }
        @media screen and (min-width: 1280px) {
            padding: 11px 36px;
            margin-left: 20px;
        }
    }
    .review-button:hover {
        outline: none;
    }
    .star {
        display: flex;
        align-items: center;
    }
`;

export default ReadBookItemStyled;
