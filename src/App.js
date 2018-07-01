import React, { Component } from 'react';
import ContractInfo from './mainContainer/ContractInfo';
import SideBody from './sideContainer/SideBody';
import HeaderBody from './headerContainer/HeaderBody';
import './App.css';


class App extends Component {

  render() {
    return (
      <div>
        <div className="HeaderArea">
          <HeaderBody/>
        </div>
        <div className="SideArea">
          <SideBody className="Sidecss"/>
        </div>
        <div className="BodyArea">
          <ContractInfo/>
        </div>
      </div>
    );
  }
}

export default App;
