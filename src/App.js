import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Settings from './Settings/Settings';
import Nav from './Nav/Nav';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
const TRACKING_ID = "UA-282970083-1";
ReactGA.initialize(TRACKING_ID);

function App() {
useEffect(()=>{
  ReactGA.pageview(window.location.pathname + window.location.search);
},[])
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route>
          <Route path='/' element={<Home/>}>Home</Route>
          <Route path='/contact' element={<Contact/>}>Contact</Route>
          <Route path='/setting' element={<Settings/>}>Settings</Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
