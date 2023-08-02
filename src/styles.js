import { styled } from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   background-color: #FAFAFA;
   display: flex;
   align-items: center;
   justify-content: center;   
   `

export const Content = styled.div`
background-color: #27251F;
max-width: 80%;
border-radius: 10px;
border:solid 7px lightgray;
padding: 2px;
padding-top:24px;
   `

export const Row = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`
export const Column = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
`