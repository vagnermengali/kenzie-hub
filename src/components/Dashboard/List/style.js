import styled from "styled-components";

export const Main = styled.main`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    flex-direction:column;
    margin-top: 1.2%;

    @media(max-width: 950px) {
        margin-top: 2.2%;
    }
    @media(max-width: 600px) {
        margin-top: 6.2%;
    }
`
export const DivContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width: 55%;
    margin-bottom: 1.2%;

    @media(max-width: 950px) {
        width: 77%;
        margin-bottom: 2.2%;
    }
    @media(max-width: 600px) {
        width: 90%;
        margin-bottom: 6.2%;
    }
`
export const TitleLi = styled.h1`
    font-weight: 600;
    font-size: 1.05vw;
    color: var(--gray-0);

    @media(max-width: 950px) {
        font-size: 2vw;
    }
    @media(max-width: 600px) {
        font-size: 5vw;
    }
`
export const ButtonAdd = styled.button`
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 4%;
        height: 4.3vh;
        background: var(--gray-3);
        border: 0.1vw solid var(--gray-3);
        border-radius: 0.2vw;
        font-size: 0.7vw;
        color: var(--white);

        &:hover {
                background: var(--gray-1);
                border: 0.1vw solid var(--gray-1);  
        }

        @media(max-width: 950px) {
            width: 6%;
            border-radius: 0.5vw;
            font-size: 1.4vw;
        }
        @media(max-width: 600px) {
            width: 12%;
            height: 5vh;
            border-radius: 1vw;
            font-size: 3.7vw;
        }
`
export const DivContentUl = styled.div`
    display:flex;
    flex-direction:column;
    width: 55%;

    @media(max-width: 950px) {
        width: 77%;
    }
    @media(max-width: 600px) {
        width: 90%;
    }
`
export const Ul = styled.ul`
    display:flex;
    justify-content:center;
    flex-wrap: wrap;
    width: 100%;
    max-height: 58vh;
    background: #212529;
    border-radius: 4px;
    padding: 2.5% 2.5% 2.5% 2.5%;
    overflow-y: auto;
    gap: 1.1vh;

    @media(max-width: 950px) {
        max-height: 62vh;
    }
    @media(max-width: 600px) {
        max-height: 61vh;
    }
`