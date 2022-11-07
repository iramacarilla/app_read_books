import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

.trainingPageStyled.training,
body {
    background-color: ${props => props.theme.colors.mainBackground};
}
.libraryPageStyled.library {
    background-color: ${props => props.theme.colors.mainBackground};
}
.appBarStyled {
    background-color: ${props => props.theme.colors.secondaryBackground}; 
}
.libraryPageStyled .readBooksStyled {
   background-color: ${props => props.theme.colors.mainBackground}; 
}
.libraryPageStyled .willReadBooksStyled {
   background-color: ${props => props.theme.colors.mainBackground}; 
}
.libraryPageStyled .readingBooksStyled {
   background-color: ${props => props.theme.colors.mainBackground}; 
}
.auth-container .div-for-fl.container
{
   background-color: ${props => props.theme.colors.mainBackground}; 
}
.logo__descr,

.link-btn .exit,
.statisticList .statisticItem span {
   color: ${props => props.theme.colors.mainText}; 
}
h2,
.timer-title {
    color: ${props => props.theme.colors.mainText}; 
}
.bookForm .bookFormBtn {
    background-color: ${props => props.theme.colors.formButton};  
} 
.books-library__item
 {
    color: ${props => props.theme.colors.mainText}; 
}
.titleNameWrap .titleNameWrap__name
 {
    color: ${props => props.theme.colors.mainText}; 
}
.trainingPageStyled .myGoalStyled 
{
    background-color: ${props => props.theme.colors.boxColor};
}
.trainingPageStyled .chartWrapper
{
    background-color: ${props => props.theme.colors.boxColor};
}
.trainingPageStyled .resultStyled {
    background-color: ${props => props.theme.colors.boxColor};
}
.readBooksStyled .readBookItemStyled {
    background-color: ${props => props.theme.colors.boxColor};
    color: ${props => props.theme.colors.mainText}; 
}
.readingBooksStyled .readingBookItemStyled {
    background-color: ${props => props.theme.colors.boxColor};
    color: ${props => props.theme.colors.mainText}; 
}
.willReadBooksStyled .willReadBooksItemStyled .listItem
 {
    background-color: ${props => props.theme.colors.boxColor};
    color: ${props => props.theme.colors.mainText}; 
}
.training .baner {
    background-color: ${props => props.theme.colors.title};  
}
.myGoalStyled .statistic-title {
    background-color: ${props => props.theme.colors.title}; 
}
.books-titles .books-titles__list {
     color: ${props => props.theme.colors.secondaryText}; 
}
.title-wrap .title {
    color: ${props => props.theme.colors.mainText}; 
}
.chart-box .text-x-line {
    color: ${props => props.theme.colors.mainText};
}

`;

export default GlobalStyle;
/*/*.timerToDayStyled .timer {
    background-color: ${props => props.theme.colors.formButton};  
}*/
