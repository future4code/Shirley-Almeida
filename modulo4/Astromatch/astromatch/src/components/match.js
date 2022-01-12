import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Cabeca from "./cabeca";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 420px;
  height: 80vh;
  border: 1px solid black;
  border-radius: 5px;
`;

function Match(props) {
  const [fotos, setFotos] = useState({});

  useEffect(() => {
    pegaFotos();
  }, [fotos]);
  const pegaFotos = () => {
    axios.get(
      `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/almeida/person`
    ).then((response) => {
        setFotos(response.data.profile)
        
    })
    .catch((error) => {
        console.log(error)
    })
  };

    // const fotoAlet = "https://picsum.photos/200/300"

   const novasFotos = (new) => {
       const news = fotos.map((new) => {
        return console.log(new)
          
       })
   }

  return (

    <Box>
          <Cabeca/>
         
      {/* <img src= {fotoAlet} /> */}
    </Box>
  );
}

export default Match;
