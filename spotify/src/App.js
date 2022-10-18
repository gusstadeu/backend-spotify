// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import $ from 'jquery'
import Message from '../src/component/Message'


class App extends React.Component{

  constructor(props) {
    super(props)
    const parametros = this.getHashParams()
    const token = parametros.access_token;
    // const [name, setName] = useState('Hello')
    // console.log(token)
    // const token2 = parametros.refresh_token;
    // return token
    this.state = {
      teste: "Testando",
      list: [1, 2, 3]
    }

  }
    getHashParams() {
      var hashParams = {};
      var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
      e = r.exec(q)
      while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
      }
      // console.log(`o token é ${this.token}`)
      return hashParams;
    }

    // ---------------------------
  
    topTracksLorde = () => {


      const parametros = this.getHashParams()
      const token = parametros.access_token;
      $.ajax({
        method: "GET",
        dataType: "Json",
        url:"https://api.spotify.com/v1/artists/163tK9Wjr9P9DmM0AVK7lm/top-tracks?country=BR",
        headers: {
          Authorization: `Bearer ${token}`
        }
        
      })
      .then(dados => {
        // console.log(dados.tracks[0].name)
        // console.log(this.topTracksLorde)
        const result = dados.tracks[0].name
        let buscando = dados.tracks

        buscando.map((music) => {
          res.innerHTML = music
          
          document.getElementById("res").innerHTML = music.name;
          // console.log(music)
        })

        
      })
      
    }
    
    render() {
      return (
        <div className="App">
          <a href="http://localhost:8888">Testando Botao</a>
          <button onClick={this.topTracksLorde}>Buscar top tracks da Lorde</button>
          <Message buscando={this.busacando}/>
          <h1 id="res"></h1>

        </div>
      );
    }

}

export default App;
