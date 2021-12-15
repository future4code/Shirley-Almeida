import React from 'react';
import './App.css';
import axios from 'axios';
import TelaCriarPlaylists from './components/TelaCriarPlaylists';
import TelaListaDePlaylists from './components/TelaListaDePlaylists';
import AdicionaMusica from './components/AdicionaMusica';

class App extends React.Component {
  state  = {
    mostraPlaylists: false
  }

    mudaCondicionalDeLista =  () => {
      this.state.mostraPlaylists ? this.setState({mostraPlaylists: false}) : this.setState({mostraPlaylists: true})
      }
           

  render(){

    let mostraLista = <h1>Página de erro</h1> 
    if(this.state.mostraPlaylists){
      mostraLista = <TelaListaDePlaylists />
    }else{
      mostraLista= ""
    }

    return (
      <div>
        <TelaCriarPlaylists />
        <br/><hr />
        <br/><button onClick={this.mudaCondicionalDeLista}>Mostrar/Esconder Playlists</button>
        {mostraLista}
        <AdicionaMusica/>
      </div>

  );
  }
}

export default App;