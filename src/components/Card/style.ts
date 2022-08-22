import styled from "styled-components";

export const Li = styled.li`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width: 100%;
    height: 15.5%;
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
    justify-content:flex-end;
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
export const DivEmpty = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width: 100%;
    height: 100%;
    padding: 10% 0 0 0;

    h1 { 
        text-align:center;
        font-weight: 600;
        font-size: 1.55vw;
        color: var(--gray-0);
        padding-bottom: 2%;
    }
    p {
        text-align:center;
        font-weight: 600;
        font-size: 1.35vw;
        color: var(--gray-1);
    }
    .img {
        width:25%;
    }

    @media(max-width: 950px) {
        padding: 0;
        h1 {
            font-size: 2.6vw;
        }
        p {
            font-size: 2vw;
        }
        .img {
        width:30%;
        }
    }
    @media(max-width: 600px) {
        padding: 0;
        h1 {
            font-size: 4.5vw;
        }
        p {
            font-size: 3.5vw;
        }
        .img {
        width:50%;
        }
    }
`