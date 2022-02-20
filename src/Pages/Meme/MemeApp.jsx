import react, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import cl from './MemeApp.module.css'
import MemeList from './MemeList';


const MemeApp = () => {

    const [memeUrls,setMemeUrl] = useState([
        // 'https://i.redd.it/5p8cxppd09a81.jpg','https://i.redd.it/7mx48epopoa81.jpg','https://i.redd.it/0roivh6ikga81.gif','lshttps://i.redd.it/7uw3domz1ma81.jpg'
      ])
      const [url,setUrl] = useState()
    
      const srvn = () => {
        // console.log('------------');
        // console.log(memeUrls[memeUrls.length-1])
        // console.log(url);
        if(memeUrls[memeUrls.length-1] == url){
    
          console.log('same');
          return
        }
          setMemeUrl([...memeUrls,url])
      }
    
      const getMeme = () => {
        axios.get(' https://meme-api.herokuapp.com/gimme').then(res => setUrl(res.data.url))
        srvn()
      }
    
      
      
      
      const [height,setHeigh] = useState(100)
     
    
    
      useEffect(()=>{
        
        setHeigh(memeBlock.current.clientHeight - window.innerHeight-1500)
    
        
    
      
        
      },[memeUrls])
    
      
      const newMeme = () => {
        getMeme()
        srvn()
       
        // console.log('OFFSET ' + window.pageYOffset +  window.innerHeight);
        // console.log('>Block ' + height);
        // console.log('DisplayHeight' + window.innerHeight);
        
    
      }
    
      function scroll(){
    
      
        // console.log('scrl');
        //100 => 700
        if(window.pageYOffset +700 > height ){
    
        // z =  memeBlock.current.clientHeight-300
       
          // console.log('OFFSET ' + window.pageYOffset);
          // console.log('>Block ' + height);
          
        //   console.log('add');
          getMeme()
          srvn()
        } 
      }
      
      
      
    
    
      
    
      const memeBlock = useRef()
    
      // if(window.pageYOffset > height){
    
      //   // z =  memeBlock.current.clientHeight-300
      //   console.log('x');
       
      // }
      
      const log = () => {
        console.log('OFFSET ' + window.pageYOffset);
        console.log('>Block ' + height);
       
        console.log(memeUrls);
      }
    
      const move = () =>{
         scroll()
         
      }
    



    return(
        <div className={cl.MemeApp} onClick={log} onWheel={scroll}  onTouchMove={move} >
      <div className={cl.header}>

      </div>
      <div className={cl.memeBox} ref={memeBlock} onClick={newMeme} >
        <div className={cl.home}>
          <h1>scroll down</h1>
        </div>
        <MemeList memeUrls={memeUrls}/>
      </div>
        <div className={cl.footer}>
          <p>{memeUrls.length} Memes</p>
        </div>
        </div>
    )
}


export default MemeApp