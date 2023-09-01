import { styled } from "styled-components";

export const StyledGameCard = styled.div`
    background-color: gray;
    border-radius: 10px;
    padding: 1rem;
    width: 320px;
    text-align: center;

    .squares-section{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap:1rem;
        width: 100%;
        margin-top: 1rem;
    }
`;

export const StyledColorSquare = styled.span`
    border-radius: 7px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    margin: 2px;

    &:hover{
        margin: 0px;
        border: .1px solid lightgray;
    }
`;