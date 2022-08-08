import styled from "styled-components";

export const HeaderContainer = styled.header`
    display:flex;
    align-items:center;
    flex-direction:column;
    width:100%;
    border-bottom:0.15vw solid var(--gray-3);
`
export const Nav = styled.nav`
    display:flex;
    width: 100%;
    height: 10vh;
    align-items:center;
    padding: 0 22.7%;
    justify-content:space-between;
    border-bottom:0.15vw solid var(--gray-3);

    @media(max-width: 950px) {
        padding: 0 11.7%; 
    }
    @media(max-width: 600px) {
        padding: 0 5.7%;
    }
`
export const Img = styled.img`
    width: 15%;

    @media(max-width: 950px) {
        width:20%;
    }
    @media(max-width: 600px) {
        width:45%;
    }
`
export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 6.5%;
    background: var(--gray-3);
    border: 0.5vw solid var(--gray-3);
    border-radius: 0.2vw;
    font-weight: 600;
    font-size: 0.8vw;
    text-align: center;
    color: var(--gray-0);

    &:hover {
        background: var(--gray-2); 
        border: 0.5vw solid var(--gray-2); 
    }

    @media(max-width: 950px) {
        border-radius: 0.5vw;
        font-size: 12px;
        width: 10%;
        height: 4.5vh;
    }
    @media(max-width: 600px) {
        border-radius: 1vw;
        font-size: 3.7vw;
        width: 20%;
        height: 4.5vh;
    }
`
export const Div = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width: 55%;
    height: 15vh;

    @media(max-width: 950px) {
        width: 77%;
        }
    @media(max-width: 600px) {
        justify-content:space-around;
        flex-direction:column;
        width: 90%;
    }
`
export const TitleName = styled.h1`
    width: 100%;
    font-weight: 700;
    font-size: 1.2vw;
    color: var(--gray-0);

    @media(max-width: 950px) {
        font-size: 2.7vw;
        width: 54%;
    }
    @media(max-width: 600px) {
        width: 100%;
        font-size: 5.7vw;
    }
`
export const Paragraph = styled.p`
    width: 100%;
    font-weight: 400;
    font-size: 0.8vw;
    color: var(--gray-1);
    text-align:end;

    @media(max-width: 950px) {
        width: 46%;
        font-size: 1.8vw;
    }
    @media(max-width: 600px) {
        width: 100%;
        font-size: 3.8vw;
    }
`