import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import List from './pages/List';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Routes>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
        </Routes>
      </div>
    )
    return (
      <Routes>
        <App/>
      </Routes>
    );
  }
}

export default App;
