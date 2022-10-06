import React, {Component} from 'react';
import './App.css';
import "macro-css";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import GotServices from './components/GotServices/GotServices';
import RandomChar from './components/RandomChar/RandomChar';
import CharacterPage from './components/Pages/CharacterPage/CharacterPage';
import HousesPage from './components/Pages/HousesPage/HousesPage';
import BooksPage from './components/Pages/BooksPage/BooksPage';

export default class App extends Component{

  got = new GotServices();

  constructor(props){
    super(props);

    this.state = {
      showRandomChar: true
    }

    this.toggleRandomChar = this.toggleRandomChar.bind(this);
  }

  toggleRandomChar(){
    this.setState({ showRandomChar : !this.state.showRandomChar});
  }
  
  render(){
    const component = this.state.showRandomChar ? <RandomChar/> : null;
    return (
      <Router>
        <div className="app pl-50 clear">
          <header className='d-flex justify-between '>
            <div>
              <h1 className='d-flex align-center'>
                <Link to="/">
                  Game of Thrones
                </Link>
              </h1>
            </div>
            <ul className='d-flex justify-between align-center'>
              <li className='mr-30' >
                <Link to="/characters">
                  Characters
                </Link>
              </li>
              <li className='mr-30'>
              <Link to="/houses">
                Houses
              </Link>
              </li>
              <li className='mr-30'>
              <Link to="/books">
                Books
              </Link>
              </li>
            </ul>
          </header>
          <h1 className="d-flex justify-center">Random charcater</h1>
          {component}
          <div>
            <button
              className='btn btn-primary'
              onClick={this.toggleRandomChar}>Toggle Random Character</button>
          </div>
          <Routes>
            <Route path='/characters' element={<CharacterPage/>}></Route>
            <Route path='/houses' element={<HousesPage/>}></Route>
            <Route path='/books' element={<BooksPage/>}></Route>
          </Routes> 
        </div>
      </Router>
    )
  }
}


