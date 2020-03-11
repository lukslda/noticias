import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticas';
import Formulario from './components/Formulario';



class App extends Component {
  state = { 
    noticias : []
   }
  
  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=a4d4e90373da48baba1d38bc31f4d543`
  
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias : noticias.articles
    })
  }

  render() { 
    return ( 
      <Fragment>

        <Header 
          titulo = 'Noticias API'
        />

        <div className="container white contenedor-noticias ">

          <Formulario 
            consultarNoticias={this.consultarNoticias}
          />

          <ListaNoticias 
            noticias = {this.state.noticias}
          />
        </div>  

      </Fragment>
     );
  }
}
 
export default App;