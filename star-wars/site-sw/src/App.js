import React, {useState} from "react";
import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage"

function App() {

  const [currentPage, setCurrentPage] = useState("Lista") // toda mudança de estado ela renderiza a tela 

  const selectPage = () => {
    switch (currentPage) { // Ele está monitorando a currentPage. CurrentPage é o estado. 
      case "Lista": // caso o estado CurrentPage for 'Lista' 
        return <CharacterListPage goToPage={goToDatail}/>; // Ele retorna o componente CharacterListPage (toda a página é um componente)
      case "Detalhe":
        return <CharacterDetailPage goToPage={goToList} />;
      default:
        return <div> Erro! Nada encontrado.</div>
    };
  }
// altera o estado para uma string detalhe 
  const goToDatail = () => { // ela vai alterar o estado currentPage para o valor "Detalhe"
    setCurrentPage('Detalhe');
  }
  
const goToList = () => {  //ela vai alterar o estado currentPage para o valor "Lista"
  setCurrentPage('Lista');
}

  return (
    <div>
      {selectPage()}
    </div>
  )

}

export default App;