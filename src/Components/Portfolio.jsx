import react from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import AboutMe from "./AboutMe";
// import WeatherApp from "../Pages/Weather/WeatherApp";
import LazyShow from "./LazyShow";

const Portfolio = () => {


    return(
        <div id="Potfolio" className="portfolio section" >
          {/* <LazyShow> */}
        <div className="title">
          <p className="t">My Projects &nbsp;</p><hr align="right" width="45" size="5" color="#0fb" />
        </div>
        {/* </LazyShow> */}
        {/* <LazyShow> */}
        
        <div className="works__wrapper">
            <div  id="i1" className="item1 Qanim-items">
             <a href="http://mishart.site/smth/">
                <div className="description">
                     <h1>CryptoApp</h1>
                </div>
              </a>
            </div>
       
           
            <div id="i2" className="item1 Qanim-items">
              <a href="http://mishart.site/game">
               <div className="description">
                  
                    <h1>Game</h1>
               </div></a>
           </div>
          

           <div id="i3" className="item1 Qanim-items">
             <Link to={"/Todo"}>
               <div className="description">
                   
                    <h1>Todo</h1>
               </div>
             </Link>
           </div>

          <div id="i4" className="item1 Qanim-items">
          <Link to={'/Meme'}>
               <div className="description">
                  
                    <h1>Random meme generator</h1>
               </div>
            </Link>
          </div>
          


        
         

        </div>
        {/* </LazyShow> */}
    </div>
    )
}

export default Portfolio