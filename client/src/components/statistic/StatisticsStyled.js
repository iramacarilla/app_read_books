import styled from 'styled-components';

const StatisticsStyled = styled.div`
    .statisticTitle {
        margin-bottom: 5px;
        font-weight: 700;
        font-size: 12px;
        line-height: 2.17;
        text-transform: uppercase;
        color: #242a37;
        @media (max-width: 767px) {
            text-align: center;
            &::before,
            &::after {
                content: '';
                display: inline-block;
                vertical-align: middle;
                width: 33%;
                height: 1px;
                background: #e0e5eb;
                border: solid #e0e5eb;
                border-width: 0 10px;
                margin: 0 5px;
            }
            &:before {
                margin-left: -100%;
            }
            &:after {
                margin-right: -100%;
            }
        }
        @media (min-width: 768px) and (max-width: 1279px) {
            &::after {
                content: '';
                display: inline-block;
                vertical-align: middle;
                width: 31%;
                height: 1px;
                background: #e0e5eb;
                border: solid #e0e5eb;
                border-width: 0 8px;
                margin-left: 10px;
            }
            &:after {
                margin-right: -100%;
            }
        }
        @media (min-width: 1280px) {
            text-align: center;
            &::before,
            &::after {
                content: '';
                display: inline-block;
                vertical-align: middle;
                width: 33%;
                height: 1px;
                background: #e0e5eb;
                border: solid #e0e5eb;
                border-width: 0 10px;
                margin: 0 5px;
            }

            &:before {
                margin-left: -100%;
            }
            &:after {
                margin-right: -100%;
            }
        }
    }

    .statisticList {
        overflow-y: auto;
        display: flex;
        flex-direction: column-reverse;

        @media (min-width: 768px) and (max-width: 1279px) {
            width: 250px;
        }
    }
    .statisticItem {
        list-style: none;
        display: flex;
        justify-content: space-between;
        @media (min-width: 768px) {
            margin-right: 8px;
        }
    }
    .date,
    .pagesCount,
    .pagesText {
        font-size: 14px;
        line-height: 1.71;
        text-align: right;
        color: #242a37;
    }
    .pagesText {
        color: #898f9f;
        margin-left: 5px;
    }

    .scrollbar {
        overflow-y: auto;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    .scrollbar::-webkit-scrollbar {
        visibility: visible;
        width: 5px;
        margin-left: 0;
        background-color: #f5f5f5;
    }
    .scrollbar::-webkit-scrollbar-track {
        visibility: visible;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #f5f5f5;
        border-radius: 10px;
    }
    .scrollbar::-webkit-scrollbar-thumb {
        visibility: visible;
        height: 10px;
        width: 5px;
        background-color: var(--secondary-text);
    }
    .scrollbarText {
        max-height: 88px;
        position: relative;
        overscroll-behavior: contain;
        overflow-y: auto;
        overflow-x: hidden;
        padding-right: 2px;
    }
`;
export default StatisticsStyled;
