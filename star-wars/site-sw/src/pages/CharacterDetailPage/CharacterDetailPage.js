import React from "react"

 function CharacterDetailPage(props) {  {
      return (
      <div>
        <h1> CharacterListPage </h1>
        <button onClick={() => props.goToPage()}>Voltar para lista de personagens</button>
      </div>
    );
  
}
 }

 export default CharacterDetailPage
