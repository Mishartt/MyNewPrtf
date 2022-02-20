import React from "react";
import cl from './MyBtn.module.css'
const MyBtn = ({text,x,y}) => {



    return(
      <div className={cl.MyBtn}>
        {y == 0 ?
        <a href={x} > <p>{text}</p></a>
          :
         <a href={x} download> <p>{text}</p></a>
        }

       
        {/* <a href="./assets/meme.png" download>x</a> */}
     </div>
    )
}


export default MyBtn