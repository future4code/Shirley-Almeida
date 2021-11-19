import React from 'react';
import styled from 'styled-components';
import CaixaMensagem from './Components/CaixaMensagem/CaixaMensagem';

const DivPrincipal = styled.div 
`
margin: auto;
height: 600px; 
display: flex;
flex-direction: colunm;
align-items: flex-end;
width: 50%;
border: solid;
`

function App() {

  return (
  <DivPrincipal>
    
  <CaixaMensagem/> 
  
  </DivPrincipal>
   
  );
}

export default App;
