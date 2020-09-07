import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;
export const BorderView = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
export const Header = styled.div`
    color: #161b1c;
    font-weight: bold;
    font-size: 40px;
    width: 100%;
    text-align: center;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin: 0 0 20px 0;
    padding: 20px 020px 0;
`;
export const Card = styled.div`
    input {
        border: none;
        padding: 5px 20px 5px 20px;
    }
    background-color: #f5f6fa;
    color: #161b1c;
    margin: 20px;
    width: 20em;
    height: 30em;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        cursor: pointer;
        background-color: #161b1c;
        color: white;
        border-radius: 5px;
        margin: 0 20px 0 20px;
        border: none;
        padding: 12px 50px 12px 50px;
    }
`;
export const Context = styled.div`
    width: 100%;
    height: 13em;
    overflow-y: scroll;
`;
