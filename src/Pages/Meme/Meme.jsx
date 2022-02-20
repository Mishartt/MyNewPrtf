import React, { useEffect, useState } from "react";
import axios from 'axios'
import cl from './MemeApp.module.css'

const Meme = (props) => {
    
   
        // console.log(props);
    
    return(
            <div className={cl.mm}>
           <img className={cl.meme} src={props.urls[props.num]} alt="" /> 
           </div>
    )
}

    export default Meme