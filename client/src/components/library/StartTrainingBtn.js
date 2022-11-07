import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StartTrainingBtnStyled = styled.div`
    @media screen and (min-width: 768px) {
        padding-top: 40px;
    }

    .formBtn {
        @media screen and (min-width: 768px) {
            display: flex;
            justify-content: center;
            font-family: 'Montserrat-Medium';
            font-size: 14px;
            line-height: 2.71;
            padding: 0px 28px;
            margin: 0 auto;
            color: #f6f7fb;
            background-color: #ff6b08;
            border: none;
            outline: none;
            height: 42px;
        }

        &:hover,
        &:focus {
            border: 1px solid #ff6b08;
            background-color: #f6f7fb;
            color: #ff6b08;
            outline: none;
        }
    }
`;
const StartTrainingBtn = () => {
    const history = useHistory();

    const onHandleClick = () => {
        history.push('/training');
    };

    return (
        <StartTrainingBtnStyled>
            <button className="formBtn" onClick={onHandleClick}>
                Start training
            </button>
        </StartTrainingBtnStyled>
    );
};

export default StartTrainingBtn;
