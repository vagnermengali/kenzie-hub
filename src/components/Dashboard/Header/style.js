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
`
export const Img = styled.img`
    width: 15%;
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
        background: var(--gray-1);
        border: 0.5vw solid var(--gray-1);
    }
`
export const Div = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width: 55%;
    height: 15vh;
`
export const TitleName = styled.h1`
    width: 88%;
    font-weight: 700;
    font-size: 1.2vw;
    color: #F8F9FA;
`
export const Paragraph = styled.p`
    width: 35%;
    font-weight: 400;
    font-size: 0.8vw;
    color: #868E96;
`