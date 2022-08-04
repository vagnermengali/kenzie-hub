import styled from "styled-components";

export const Section = styled.section`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: var(--shadow);
    inset: 0;
    z-index: 1;
  `
export const Div = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    width:25%;

    @media(max-width: 950px) {
        width:35%;
    }
    @media(max-width: 600px) {
        width:90%;
    }
  `
export const DivTop = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    background-color:var(--gray-2);
    border-radius: 0.3vw 0.3vw 0 0; 
    padding: 3.5% 5.9%;
`
export const Title = styled.h1`
    width: 100%;
    font-weight: 700;
    font-size: 0.92vw;
    color: var(--gray-0);

    @media(max-width: 950px) {
        font-size: 1.8vw;
    }
    @media(max-width: 600px) {
        font-size: 3.5vw;
    }
  `
export const ButtonExit = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 2vw;
    height: 3vh;

    color:var(--gray-1);
    background-color:var(--transparent);
    border:none;

    &:hover {
        color:var(--negative); 
    }

    @media(max-width: 950px) {
        width: 3vw;
    }
    @media(max-width: 600px) {
        width: 7vw;
     
    }
`
export const Form = styled.form`
    width:100%;
    display: flex;
    flex-direction: column;
    padding: 5% 5.9% 9% 5.9%;
    gap: 1.4vw;
    background: var(--gray-3);
    box-shadow: 0px 4px 40px -10px var(--shadow);
    border-radius: 0 0 0.3vw 0.3vw; 

    @media(max-width: 950px) {
        gap: 2.5vw;
    }
    @media(max-width: 600px) {
        gap: 5vw;
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

    @media(max-width: 950px) {
        font-size: 2vw;
    }
    @media(max-width: 600px) {
        height: 6vh;
        font-size: 4.5vw;
    }
`
export const Label = styled.label`
    height: 0;
    font-weight: 400;
    font-size: 0.8vw;
    color: var(--gray-0);

    @media(max-width: 950px) {
        font-size: 1.6vw;
    }
    @media(max-width: 600px) {
        font-size: 3vw;
    }
`
export const DivButton = styled.div`
    display:flex;
    width:100%;
    gap:6%;
`
export const ButtonPink = styled.button`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 6.6vh;
    background: var(--color-primary-negative);
    border: 0.1vw solid var(--color-primary-negative);
    border-radius: 0.2vw;
    font-weight: 500;
    font-size: 1.05vw;
    color: var(--white);

    &:hover {
            background: var(--color-primary);
            border: 0.1vw solid var(--color-primary);  
    }

    @media(max-width: 950px) {
        font-weight: 600;
        font-size: 2vw;
        border-radius: 0.3vw;
    }
    @media(max-width: 600px) {
        font-weight: 600;
        font-size: 4vw;
        border-radius: 1vw;
    }
`
export const ButtonGrey = styled.button`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 6.6vh;
    background: var( --gray-1);
    border: 0.1vw solid var( --gray-1);
    border-radius: 0.2vw;
    font-weight: 500;
    font-size: 1.05vw;
    color: var(--white);

    &:hover {
            background: var(--gray-2);
            border: 0.1vw solid var(--gray-2);  
    }

    @media(max-width: 950px) {
        font-weight: 600;
        font-size: 2vw;
        border-radius: 0.3vw;
    }
    @media(max-width: 600px) {
        font-weight: 600;
        font-size: 4vw;
        border-radius: 1vw;
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
            font-size: 2vw;
        }
        @media(max-width: 600px) {
            height: 6vh;
            font-size: 4.5vw;
        }
`
