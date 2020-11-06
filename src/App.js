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

  ascFirstNameSort = () => {
    let employees = this.state.employees;

    employees.sort(function(a, b) { return a.firstName.localeCompare(b.firstName)});
    this.setState({ employees: employees });
  };

  descFirstNameSort = () => {
    let employees = this.state.employees;

    employees.sort(function(a, b) { return b.firstName.localeCompare(a.firstName)});
    this.setState({ employees: employees });
  }

  ascLastNameSort = () => {
    let employees = this.state.employees;

    employees.sort(function(a, b) { return a.lastName.localeCompare(b.lastName)});
    this.setState({ employees: employees });
  };

  descLastNameSort = () => {
    let employees = this.state.employees;

    employees.sort(function(a, b) { return b.lastName.localeCompare(a.lastName)});
    this.setState({ employees: employees });
  }
  
  render() {
    return (
      <>
        <Header />
        <Table 
          employees={this.state.employees}
          ascFirstNameSort={this.ascFirstNameSort}
          descFirstNameSort={this.descFirstNameSort}
          ascLastNameSort={this.ascLastNameSort}
          descLastNameSort={this.descLastNameSort}
        />
      </>
    );
  }
}

export default App;
