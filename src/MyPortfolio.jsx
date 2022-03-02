import './App.css';
import Header from './Components/Header';
import logo from './assets/img/logo.png'
import face from './assets/img/me.png'
import HomePage from './Components/HomePage';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
// import WeatherApp from './Pages/Weather/WeatherApp';
import Footer from './Components/Footer';
import locationImg from './assets/img/location.svg';
import mailImg from './assets/img/mail.svg';
import phoneImg from './assets/img/phone.svg'
import cv from './assets/ArtiushkinMikhailJuniorFrontEnd.pdf'

import LazyShow from './Components/LazyShow';





// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   Outlet
// } from "react-router-dom";
import ContactMe from './Components/ContactMe';

function MyPortfolio() {






  
  return (
    
    <div className="App">
          
          <Header logo={logo}/>
          <LazyShow>
         <HomePage face={face}/>
          </LazyShow>
         
          <main>
          <AboutMe cv={cv}/> 
          <Skills/>
          <LazyShow>
          <Portfolio/>
          </LazyShow>
          <ContactMe mailImg={mailImg} locationImg={locationImg} phoneImg={phoneImg}/>
          </main>
          <Footer/>
          
    </div>  
  );
}

export default MyPortfolio;
