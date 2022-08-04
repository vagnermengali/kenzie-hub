import styled from "styled-components";

export const Li = styled.li`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width: 100%;
    height: 13.5%;
    background: var(--gray-4);
    border-radius: 0.3vw;
    padding: 2.5%;
    cursor:pointer;

    &:hover {
        background: var(--gray-2);
    }

    @media(max-width: 950px) {
        height: 6.3vw;
        border-radius: 0.5vw;
    }
    @media(max-width: 600px) {
        height: 15.3vw;
        border-radius: 1vw;
    }
`
export const Title = styled.h1`
    font-weight: 700;
    font-size: 1vw;
    color: var(--white);
    
    @media(max-width: 950px) {
        font-size: 1.6vw;
    }
    @media(max-width: 600px) {
        font-size: 4.6vw;
    }
`
export const DivDetails = styled.div`
    width:20%;
    display:flex;
    justify-content:space-between;
    align-items:center;

    @media(max-width: 950px) {
        width:22%;
    }
    @media(max-width: 600px) {
        width:30%;
    }
`
export const PDetails = styled.p`
    font-weight: 400;
    font-size: 0.8vw;
    line-height: 1.5vw;
    color: var(--gray-1);

    @media(max-width: 950px) {
        font-size: 1.2vw;
    }
    @media(max-width: 600px) {
        font-size: 3.8vw;
    }
`
export const ButtonDelete = styled.button`
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 2.3vw;
        background: var(--transparent);
        border: 0.1vw solid var(--transparent);
        border-radius: 0.2vw;
        font-size: 1.7vw;
        color: var(--white);

        &:hover {
                background: var(--gray-1);
                border: 0.1vw solid var(--gray-1);  
        }

        @media(max-width: 950px) {
            width: 3.6vw;
            font-size: 4.7vw;
        }
        @media(max-width: 600px) {
            display:none;
        }
`