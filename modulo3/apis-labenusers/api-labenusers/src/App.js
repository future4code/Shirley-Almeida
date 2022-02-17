import './App.css';
import axios from 'axios';
import React from 'react';

export default class App extends React.Component {
  state = {
    labenusers: [],
    inputNome:'',
    inputEmail: ''
  }
  componentDidMount() {
  this.pegaUsuario ()
      }

pegaUsuario = () => {
  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
  { 
    headers:{
      Authorization: "shirley-almeida-joy"
    }

  })
  .then((res) => {
    this.setState({ labenusers: res.data })
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err.response.data)
  })
}

mudaNome = (e) => {
  this.setState({inputNome: e.target.value });
};

mudaEmail = (e) => {
  this.setState({inputEmail: e.target.value });
};

criarUsuario = () => {
  const URL =
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

  const body = {
    
      name: this.state.inputNome,
      email: this.state.inputEmail  
  };
  const headers = {
    headers: {Authorization: "shirley-almeida-joy"}
  }

  axios
  .post(URL, body, headers)
  .then((res) => {
    console.log('')
    this.pegaUsuario();
  })
  .catch((err) => {
    console.log(err.response.data);
  });

}

  render () {

    const lista = this.state.labenusers.map((user) =>{
      return<p key = {user.id}>{user.name}</p>
      
    })

    return (
      <div>
        <button>Trocar de Tela</button>
      <div>
        <input 
        placeholder={'Digite o nome do usuário'}
        type = 'Text'
        size = '25'
        value = {this.state.inputNome}
        onChange = {this.mudaNome}
        />
      </div>

        <div>
        <input
        placeholder = {'Digite o seu e-mail'}
        type = 'email'
        size = '25'
        value = {this.state.inputEmail}
        onChange = {this.mudaEmail}
        />
        </div>
       <button onClick={this.criarUsuario}>Enviar</button>
      
      {lista}
      </div>
    );
  }
  
}


