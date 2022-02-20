import React from "react";
import Meme from "./Meme";
const MemeList = ({memeUrls}) => {

    // console.log(memeUrls.length);
    
    
    return(
      <div>
        {memeUrls.map((e,i) =>
            <Meme urls={memeUrls} key={i} num={i}/>
            )}
      </div>
    )
}



export default MemeList