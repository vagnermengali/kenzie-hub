import styled from "styled-components";

export const Section = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:min-content;
`
export const Div = styled.div`
        width:100%;
        height:100%;
        display:flex;
        justify-content: space-between;
        margin: 2vh 0
`
export const Img = styled.img`
    width: 40%;
    animation: fadeInLeftBig;
    animation-duration: 1s;
`
export const ButtonBlack = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 5.3vh;
    background: var(--gray-3);
    border-radius: 0.2vw;
    border:none;
    font-weight: 600;
    font-size: 0.8vw;
    text-align: center;
    color: var(--gray-0);
    animation: fadeInLeftBig;
    animation-duration: 1s;

        &:hover {
                background: var(--gray-2);
                border: 0.1vw solid var(--gray-2);  
        }
        @media(max-width: 950px) {
                height: 6vh;
                font-size: 2vw;
                border-radius: 0.5vw;
        }
        @media(max-width: 600px) {
                font-size: 3vw;
                border-radius: 1.2vw;
        }
`
export const DivContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 25%;
    height: 85%;
    margin:3.5vw 0;
    gap: 2vw;
        @media(max-width: 950px) {
                width:60%;
                gap: 10vw;
                margin:10.5vw 0;
        }
        @media(max-width: 600px) {
                width:90%;
                gap: 10vw;
                margin:10.5vw 0;
        }
`
export const Title = styled.h1`
        font-weight: 700;
        font-size: 1.2vw;
        line-height: 2vw;
        color: var(--gray-0);
        text-align:center;
                
        @media(max-width: 950px) {
                font-size: 2.5vw;
                line-height: 3.5vw;
        }
        @media(max-width: 600px) {
                font-size: 5vw;
                line-height: 7vw;
        }
  `
export const Form = styled.form`
        width:100%;
        display: flex;
        flex-direction: column;
        padding: 11% 5.9%;
        gap: 1.8vw;
        background: var(--gray-3);
        box-shadow: 0px 4px 40px -10px var(--shadow);
        border-radius: 0.3vw; 
                
        @media(max-width: 950px) {
                gap: 3vw;
        }
        @media(max-width: 600px) {
                gap: 6.4vw;
        }
  `
export const Input = styled.input`
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 4%;
        width: 100%;
        height: 6.5vh;
        background: var(--gray-2);
        border: none;
        border-radius: 4px;
        font-weight: 400;
        font-size: 1.05vw;
        color: var(--gray-0);

        &::placeholder {
            color: var(--gray-1);
        }
        
        @media(max-width: 950px) {
                border-radius: 0.5vw;
                font-size: 2vw;
                height: 8vh;
        }
        @media(max-width: 600px) {
                border-radius: 1.5vw;
                font-size: 4vw;
                height: 7vh;
        }
`
export const Label = styled.label`
        display:flex;
        flex-direction:column;
        justify-content: space-between;
        height: 0;
        font-weight: 400;
        font-size: 0.8vw;
        color: var(--gray-0);
                
        span{
                font-weight: 400;
                font-size: 0.8vw;
                color: var(--negative);
        }
        @media(max-width: 950px) {
                font-size:1.5vw;
        span{
                font-weight: 400;
                font-size:1.5vw;
                color: var(--negative);
        }
        }
        @media(max-width: 600px) {
                font-size: 3vw;
        span{
                font-weight: 400;
                font-size: 3vw;
                color: var(--negative);
        }
        }
`
export const ParagraphQuestion = styled.p`
        width:100%;
        font-weight: 600;
        font-size: 0.8vw;
        line-height: 1.1vw;
        color: var(--gray-1);
        text-align:center;
        @media(max-width: 950px) {
                font-size: 1.5vw;
                line-height: 2vw;
        }
        @media(max-width: 600px) {
                font-size: 3vw;
                line-height: 4vw;
        }
`
export const Select = styled.select`
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 4%;
        width: 100%;
        height: 6.5vh;
        background: var(--gray-2);
        border: none;
        border-radius: 4px;
        font-weight: 400;
        font-size: 1.05vw;
        color: var(--gray-1);

        &::placeholder {
            color: var(--gray-1);
        }
        @media(max-width: 950px) {
                border-radius: 0.5vw;
                font-size: 2vw;
                height: 8vh;
        }
        @media(max-width: 600px) {
                border-radius: 1.5vw;
                font-size: 4vw;
                height: 7vh;
        }
`
export const ButtonNegative = styled.button`
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 6.6vh;
        background: var(--color-primary-negative);
        border: 0.1vw solid  var(--color-primary-negative);
        border-radius: 0.2vw;
        font-weight: 500;
        font-size: 1.05vw;
        color: var(--white);

        &:hover {
                background: var(--color-primary-focus);
                border: 0.1vw solid var(--color-primary-focus);  
        }
         
        @media(max-width: 950px) {
                height: 8vh;
                font-weight: 600;
                font-size: 2vw;
                border-radius: 0.5vw;
        }
        @media(max-width: 600px) {
                font-weight: 600;
                font-size: 4vw;
                border-radius: 1vw;
        }
`