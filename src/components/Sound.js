import React, { Component } from 'react';

class Sound extends Component {
    constructor(props) {
        super(props);
        this.handleChange = (valueName) => (event) => this.setState({ [valueName]: event.target.value });

        let sound = this.props.sound;

        this.playSound = () => {
            let x = document.createElement("AUDIO");
            x.src = sound;
            x.volume = 0.2;
            console.debug(x.src.toString());
            if (x.src.toString().includes("leroy")){
                x.volume = 0.05;
            }
            x.play();
        }
    }
    render(){
        return (
            <input type="button" onClick={this.playSound} value={this.props.soundName} id="soundButton" style={this.props.color}></input>
        );
    };
}

export default Sound;