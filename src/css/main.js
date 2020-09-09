import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Tag = styled.header`
    display: flex;
    justify-content: center;
`;
export const Header = styled.header`
    width: 100%;
    text-align: center;
    padding: 30px;
    font-weight: bold;
    font-size: 2rem;
`;

export const Card = styled.div`
    min-width: 20vw;
    height: 70vh;
    form {
        display: Flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 30px;
        font-weight: bold;
        font-size: 2rem;
    }
    input {
        border: none;
        border-bottom: 1px solid black;
        padding: 10px 30px 10px 30px;
    }
    button {
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        padding: 10px 40px 10px 40px;
        background-color: #161b1c;
        color: white;
    }
    input {
        width: 100%;
        height: 3em;
        font-size: 1rem;
    }
`;

export const DeleteContext = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Context = styled.div`
    margin: 10px 0 0 0;
    display: Flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 20em;
    overflow-y: scroll;
    text-align: center;
    font-weight: bold;
    p {
        font-size: 1.3rem;
    }
`;
const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
    body {
    margin: 0;
    min-height: 100vh;
    width: 100vw;
}
`;

export default GlobalStyle;
