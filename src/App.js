import React, {Component} from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

const md5 = require('md5');

const publicKey = '5a5f5b7db707736e39d4b469a5fbcf40';
const privateKey = '1f2e0884fbfc28b0f1eff037d4879d860e055635';
const timeStamp = Date.now().toString();

const hash = md5(timeStamp + privateKey + publicKey);

class App extends Component{

  state = {
    heroes: [],  
  }

  async componentDidMount(){
    const res = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
    .then((res)=>{
      return res.data;
    })
    .catch((error) =>
      console.log(error)
    );
    const heroes = res.data.results;
    this.setState({heroes});
  }

  render() {
    return (
    <div className="App">
      <header className="card-header"><h1>MARVEL CARDS</h1></header>
        {
        this.state.heroes.map((hero) => (
            <Card hero={hero} key={hero.id}/>
        ))
        }
        </div>
      
      
    );
  }
}

export default App;