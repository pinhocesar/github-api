import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 16px;
    font-size: 14px;

    input {
        border: 1px solid #c8c8c8;
        border-radius: 4px;
        height: 32px;
        padding: 8px;

        &:focus {
            outline: none;
        }
    }

    button {
        border: 1px solid #c8c8c8;
        border-radius: 4px;
        height: 32px;
        background-color: #c8c8c8;
        padding: 8px;
        margin-left: 4px;

        &:hover {
            background-color: #8c8c8c;
            border: 1px solid #8c8c8c;
        }

        &:active {
            color: #fff;
        }
    }
`