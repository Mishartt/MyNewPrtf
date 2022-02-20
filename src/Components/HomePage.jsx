import React from "react";
import MyBtn from "./UI/MyBtn/MyBtn";

const HomePage = ({face}) =>{



    return(
        <div className="home section" id="home">
        <div className="hero-wrapper">
            <div className="inf">
                <p className="Qanim-items">HI THERE &nbsp;  I'M     </p>
                <h1  className="z Qanim-items">Artiushkin Mikhail</h1>
                 {/* <h3 className="Qanim-items">Front-End DEVELOPER</h3> */}
                 <br />
                 <p className="Qanim-items">Junior Front-end developer</p>
    
                 <MyBtn y={0} x={"#Contact"} text='HIRE ME'/>
                 
            </div>
            <div className="pht">
                <img className="im Qanim-items " src={face} alt=""/>
            </div>
        </div>
    </div>
    )
}


export default HomePage