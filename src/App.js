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

  ascNameSort = () => {
    let employees = this.state.employees;

    employees.sort();
    this.setState({ employees: employees });
  };

  descNameSort = () => {
    let employees = this.state.employees;

    employees.reverse();
    this.setState({ employees: employees });
  }
  
  render() {
    return (
      <>
        <Header />
        <Table 
          employees={this.state.employees}
          ascNameSort={this.ascNameSort}
          descNameSort={this.descNameSort}
        />
      </>
    );
  }
}

export default App;
