import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DataInsert from './components/DataInsert'
import Contact from './components/Contact'
import Help from './components/Help'
import View from './components/View'
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return(
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/Home' element={<Home></Home>}>Home</Route>
      <Route path='/View' element={<View></View>}>View</Route>
      <Route path='/Contact' element={<Contact></Contact>}>Contact</Route>
      <Route path='/DataInsert' element={<DataInsert></DataInsert>}>Datainsert</Route>
      <Route path='/Help' element={<Help></Help>}>Help</Route>
    </Routes>
   </>
  )  
  
}

export default App




/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
*/