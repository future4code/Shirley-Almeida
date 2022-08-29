import styled from "styled-components";

export const Container = styled.main`


padding-top: 100px;
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center;


> button {
    padding: 20px; 
    border-radius: 10px;
    background-color: #63D1F4;
    color: #fff;
    border: 1px solid; 
    cursor: pointer;
    transition: .5s;
    
   
    &:hover { 
        background-color: #0EBFE9;
           }
}
`

export const UlContainer = styled.ul`

border: 2px solid;
width: 80%;
list-style: none;
display: flex; 
flex-wrap: wrap;
padding-top: 30px; 

> li {
    cursor: pointer;
    
}

`