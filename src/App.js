import React from 'react';
import logo from './logo.svg';
import './App.css';
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
// for React 16.4.x use: import { ReactTabulator }
import { ReactTabulator } from 'react-tabulator';

const columns = [
  { title: "Name", field: "name", width: 150 },
  { title: "Age", field: "age", align: "left", formatter: "progress" },
  { title: "Favourite Color", field: "col" },
  { title: "Date Of Birth", field: "dob", align: "center" },
  { title: "Rating", field: "rating", align: "center", formatter: "star" },
  { title: "Passed?", field: "passed", align: "center", formatter: "tickCross" }
];


var data = [
  {id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
  {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
  {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
  {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
  {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
  {id:6, name:"Margret Marmajuke2", age:"16", col:"yellow", dob:"31/01/1999"},
  {id:7, name:"Margret Marmajuke3", age:"16", col:"yellow", dob:"31/01/1999"},
  {id:8, name:"Margret Marmajuke4", age:"16", col:"yellow", dob:"31/01/1999"},
  {id:9, name:"Margret Marmajuke5", age:"16", col:"yellow", dob:"31/01/1999"},
  {id:10, name:"Margret Marmajuke6", age:"16", col:"yellow", dob:"31/01/1999"},
  {id:11, name:"Margret Marmajuke7", age:"16", col:"yellow", dob:"31/01/1999"},
  {id:12, name:"Margret Marmajuk8e", age:"16", col:"yellow", dob:"31/01/1999"},
];


function App() {
  return (
    <div className="App">
      <ReactTabulator
 data={data}
 columns={columns}
 tooltips={true}
 layout={"fitData"}
 paginationSize={3}
 />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to rel1oad. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>        
      </header>
    </div>
  );
}

export default App;
