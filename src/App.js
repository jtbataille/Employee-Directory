import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import employees from "./employees.json";

class App extends Component {
  state = {
    employees
  };


  
  render() {
    return (
      <>
        <Header />
        <Table 
          employees={this.state.employees}
        />
      </>
    );
  }
}

export default App;
