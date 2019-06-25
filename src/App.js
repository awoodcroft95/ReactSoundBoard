import React, { Component } from 'react';
import Sound from './components/Sound'
//import Sound from 'react-sound';
import leroy from './media/audio/leroy.swf.mp3'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
const fs = require('fs');

const leroyRemote = "https://www.dropbox.com/s/9n85q0swm18n2wl/leroy.swf.mp3"

const items = [];

// fs.readdir("./media/audio/", function (err, files) {
//   if (err) {
//     return console.log('Unable to scan directory: ' + err);
//   }
//   files.forEach(function (file) {
//     // Do whatever you want to do with the file
//     items.push(<Sound sound={file} soundName="1"/>)
// });
// });

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
        {items}
        <Sound sound={leroy} soundName="Leroy Short"></Sound>
        <Footer/>
      </div>
    );
  }
}

export default App;