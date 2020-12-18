import React from 'react'
import './App.css';
import Msg from './Msg/Msg'

class App extends React.Component {

  state = {
    mensagens: [
      { nome: "Diego", mensagem: "bla" },
      { nome: "Douglas", mensagem: "bla1" }
    ],
    valorNome: "",
    valorMensagem: "",
  }

  adicionarMensagem = () => {

    const novaMensagem = {
      nome: this.state.valorNome,
      mensagem: this.state.valorMensagem
    }
    const novoArrayMensagens = [... this.state.mensagens, novaMensagem]
    this.setState({ mensagens: novoArrayMensagens })
    console.log(novoArrayMensagens)
    this.setState({ valorNome: "" })
    this.setState({ valorMensagem: "" })
    
  }

  onChangeInputNome = event => {
    this.setState({ valorNome: event.target.value })
  }
  onChangeInputMensagem = event => {
    this.setState({ valorMensagem: event.target.value })
  }



  render() {
    const listaDeMensagens=this.state.mensagens.map((msg)=>{
      return(
        <Msg nome={msg.nome} mensagem={msg.mensagem}/>
      )
    })
    return (

      <div className="containerGrandao">

        <div className="containerTexto">
        {listaDeMensagens}
        </div>


        <div className="containerInputs">
          <input id="inputEnviar"
            onChange={this.onChangeInputNome}
            value={this.state.valorNome}
          />
          <input id="inputMsg"
            onChange={this.onChangeInputMensagem}
            value={this.state.valorMensagem}
          />
          <button onClick={this.adicionarMensagem}>Adicionar</button>
        </div>
      </div>

    );
  }

}

export default App;
