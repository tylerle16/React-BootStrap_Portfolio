import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
// imported react 
// import React from "react"
import Header from './components/Header';
import Particles from 'react-particles-js'
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div>
      <Particles
      className="particles-canvas"
      params={{particles:{number:{value:30,
      density:{
        enable:true,
        value_area:900
      }},
        shape:{
          type: "circle", stroke:{
            width: 6,
            color: "#f33501"
          }
        }}
    
    }}
      />
    <Navbar/>
    <Header/>
    <AboutMe/>
    <Services/>
    <Portfolio/>
   
    </div> );
}

export default App;
