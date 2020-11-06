import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import employees from "./employees.json";

class App extends Component {
  state = {
    employees,
    searchedEmployee: [],
    searchTerm: ''
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

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value});
  };

  handleFormSubmit = e => {
    e.preventDefault();

    this.setState({
      searchTerm: ''
    });
  }
  
  render() {
    return (
      <>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <div className="col-sm-3 input-group float-right" style={{marginTop:"10px", marginLeft:"20px", marginBottom:"15px"}}>
            <input type="text" class="form-control" name="searchTerm" placeholder="Employee's Name" value={this.state.searchTerm} onChange={this.handleInputChange} />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit" onClick={this.handleFormSubmit}>Search</button>
            </div>
          </div>
        </form>
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
