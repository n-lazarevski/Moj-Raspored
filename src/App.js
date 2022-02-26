import React, {Component} from 'react';
import './App.css';
import Calendar from "./calendar/Calendar";
import Navbar from "./Navbar/Navbar";

class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <Calendar/>
        </div>
    );
  }
}

export default App;