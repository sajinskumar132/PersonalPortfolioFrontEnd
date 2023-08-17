import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <ToastContainer />
        <NavBar/>
        <Hero/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
