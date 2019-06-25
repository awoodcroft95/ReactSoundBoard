import React, { Component } from 'react';
import logo1 from '../media/images/WoW_icon.svg.png';
// import logo2 from '../media/Imperial_Emblem.svg';
// import logo3 from '../media/JediLogo.png';

class Header extends Component {
    
    constructor() {
        super();

        this.state = {
            hasBeenClicked: false,
            logo: logo1,
        };

    }
    render() {
        return (
            <header className="App-header">
                <img src={this.state.logo} className="App-logo" alt="logo" onClick={this.onButtonClick} style={this.state.logoStyle} />
                <h1 className="App-title">World of Warcraft Sound Board</h1>
            </header>
        );
    };
}

export default Header;