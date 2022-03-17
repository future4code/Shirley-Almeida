import React from 'react';
import styled from 'styled-components';
// import styled from 'styled-components';

const CampoMensagem = styled.input 
  `width: 500px;

  `
class CaixaMensagem extends React.Component {
  render()
      {
        return(<div>
            <input placeholder =  'Nome'></input>
            <CampoMensagem placeholder = 'Mensagem'></CampoMensagem>
            <button onClick>Enviar</button>
        </div>)
      }
     
  }
  
  export default CaixaMensagem;