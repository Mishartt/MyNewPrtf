import react from "react";
import LazyShow from "./LazyShow";
const Skills = () => {


    return(
        <div id="skills" className="skills section">
             <LazyShow>
        <div className="title Qanim-items">
           
            <p  className="t">My Skills  &nbsp;</p><hr align="right" width="45" size="5" color="#0fb" margin-left="100px" />
           
          </div>
            </LazyShow>
          <div className="skills__wrapper">
        <LazyShow>
            <div className="skill Qanim-items">
                <p>JavaScript </p>
            </div>
        </LazyShow>
        <LazyShow>
            <div className="skill Qanim-items">
                <p>HTML /CSS</p>
            </div>
        </LazyShow>
        <LazyShow>
            <div className="skill Qanim-items">
                <p>React</p>
            </div>
        </LazyShow>
        <LazyShow>
            <div className="skill Qanim-items">
                <p>SASS/SCSS</p>
            </div>
        </LazyShow>
        <LazyShow>
            <div className="skill Qanim-items">
                <p>GIT</p>
            </div>
        </LazyShow>

        <LazyShow>
            <div className="skill Qanim-items">
                <p>Redux</p>
            </div>
        </LazyShow>

        <LazyShow>
            <div className="skill Qanim-items">
                <p>TypeScript*</p>
            </div>
        </LazyShow>
        

          </div>

        </div>
    )
}

export default Skills