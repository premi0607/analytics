import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Settings from './Settings/Settings';
import Nav from './Nav/Nav';

function App() {
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
