import { styled } from "styled-components";

export const InputContainer = styled.div`
width: 100%;
height: 75px;

display: flex;
align-items: center;
justify-content: flex-end;

font-size: 24px;
font-family: 'Roboto';

input{
    width: 100%;
    height: 50px;
    background-color: #8B70FF;
    border: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin-bottom:24px;
    font-size: 24px;
    font-family: 'Roboto';
    color: #FFFFFF;
    outline:none;
    border-radius:2px;
}
`