import React from "react";
import MyBtn from "./UI/MyBtn/MyBtn";
import LazyShow from "./LazyShow";
const AboutMe = ({cv}) => {

    const download = () => {
        console.log('x');
    }



    return(
        <div id="About" className="about__me section">
            <LazyShow>
        <div className="title Qanim-items">
            <p>Who I am &nbsp;</p><hr align="right" width="45" size="5" color="#0fb" />
          </div>
            </LazyShow>
          <div className="inform__about__me">
              <LazyShow>
              <h2 className="q Qanim-items">About me</h2>
           </LazyShow>
           <LazyShow>
             
          <p className="q Qanim-items"> 
              I’m a beginner Front-End Developer located in Kyiv.
              </p>
              <p className="q">
              I studied at Ucode IT academy and developed websites with HTML/CSS, JavaScript, React and Redux.
              </p>
              <p className="q">
              I have good skills in using design softwares like Figma
              
        </p>
        </LazyShow>
       <LazyShow>
        {/* <br> */}
        <p className="q">
            Well-organised person.Fan of outdoor activities,coffee and interesting stuff 
        </p>
    </LazyShow>
        <MyBtn onClick={download} x={cv} text="Download CV"/>
      
       

        </div> 
        
    </div>
      
    )
}


export default AboutMe