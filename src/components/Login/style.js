import styled from "styled-components";

export const Section = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;

    @media(max-width: 950px) {

    }
    @media(max-width: 600px) {

    }
  `
export const Img = styled.img`
    width: 40%;
`
export const Div = styled.div`
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        width:25%;

        @media(max-width: 950px) {

        }
        @media(max-width: 600px) {
                width:90%;
        }
`
export const Title = styled.h1`
        font-weight: 700;
        font-size: 1.2vw;
        line-height: 2vw;
        color: var(--gray-0);
        text-align:center;
  `
export const Form = styled.form`
        width:100%;
        display: flex;
        flex-direction: column;
        padding: 11% 5.9% 0 5.9%;
        gap: 1.4vw;
        background: var(--gray-3);
        box-shadow: 0px 4px 40px -10px var(--shadow);
        border-radius: 0.3vw 0.3vw 0 0;
        margin-top:10.2%;
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
`
export const Label = styled.label`
        height: 0;
        font-weight: 400;
        font-size: 0.8vw;
        color: var(--gray-0);
`
export const ButtonPink = styled.button`
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 6.6vh;
        background: var(--color-primary);
        border: 0.1vw solid var(--color-primary);
        border-radius: 0.2vw;
        font-weight: 500;
        font-size: 1.05vw;
        color: var(--white);

        &:hover {
                background: var(--color-primary-focus);
                border: 0.1vw solid var(--color-primary-focus);  
        }
`
export const DivRegister = styled.div`
        width:100%;
        display: flex;
        flex-direction: column;
        padding: 6% 5.9% 11% 5.9%;
        gap: 1.4vw;
        background: var(--gray-3);
        box-shadow: 0px 4px 40px -10px var(--shadow);
        border-radius: 0 0 0.3vw 0.3vw; 
  `
export const ParagraphQuestion = styled.p`
        width:100%;
        font-weight: 600;
        font-size: 0.8vw;
        line-height: 1.1vw;
        color: var(--gray-1);
        text-align:center;
`
export const ButtonGrey = styled.button`
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 6.6vh;
        background: var(--gray-1);
        border: 0.1vw solid  var(--gray-1);
        border-radius: 0.2vw;
        font-weight: 500;
        font-size: 1.05vw;
        color: var(--gray-0);

        &:hover {
                background: var(--gray-2);
                border: 0.1vw solid var(--gray-2);  
        }
`