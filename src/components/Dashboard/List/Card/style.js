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
`
export const Title = styled.h1`
    font-weight: 700;
    font-size: 1vw;
    color: var(--white);
`
export const DivDetails = styled.div`
    width:20%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const PDetails = styled.p`
    font-weight: 400;
    font-size: 0.8vw;
    line-height: 1.5vw;
    color: var(--gray-1);
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
`