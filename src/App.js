import React, { Component } from 'react';
import Sound from './components/Sound'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import audioData from './media/audio/audioData.json';

const items = audioData;

class App extends Component {
  constructor() {
    super();

    this.onSuccess = (response) => {
      return response.json();
    };
    this.onError = (error) => {
      console.log(error);
    };

  }

  render() {
    return (
      <div className="App">
        <Header/>
        {items.map(function(item, index){
          let colorStyle = {"background-color": "red"}
          if(index%2 === 0){
            colorStyle={"background-color": "blue"}
          }
          return <Sound sound={item.SoundUrl} soundName={item.SoundName} color={colorStyle}/>
        })}
        <Footer/>
      </div>
    );
  }
}

export default App;