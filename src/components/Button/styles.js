import { styled } from "styled-components";

export const ButtonContainer = styled.button`
margin:2px;
border: 8px solid #CDCDCD;
height:74px;
width: 74px;
border-radius: 40px;
cursor: pointer;
font-size: 24px;
font-weight: 700;
transition-duration: .25s;
&:hover{
    background-color: #8B70FF;
    color: white;
    border: 14px solid orange;
}
`
