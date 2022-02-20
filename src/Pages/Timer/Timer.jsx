import react, {useRef, useState } from "react";
import ResTime from "./ResTime";
import cl from './Timer.module.css'


const Timer = () => {

const hr = useRef()
const hrr = useRef()

const [time,setTime] = useState(['00','00','00','00'])
const [mSecc,setMSecc] = useState('00')
const [secc,setSec] = useState('00')
const [minn,setMin] = useState('00')
const [hourr,setHour] = useState('00')




let hour = 0;
let sec = 0;
let min = 0;
let mSec = 0;
const [interval,setIntervall] = useState()

const [res,setRes] = useState([])



const start = (x) =>{
   
   setIntervall(setInterval(startTimer,10))

    console.log(time);
    
}

let t1,t2,t3;
const lap = () => {
    setRes([...res,{hourr,minn,secc,mSecc}])
    // console.log(res[0].hourr);
    
}

const pause = () => {
  setIntervall(clearInterval(interval))
}



const restart = () => {
    setIntervall(clearInterval(interval))
    hour = 0;
    sec = 0;
    min = 0;
    mSec = 0;
    setHour('00')
    setMin('00')
    setSec('00')
    setMSecc('00')
    // hourEl.innerHTML ='00'
    // minEl.innerHTML = '00'
    // secEl.innerHTML = '00'
    // mSecEl.innerHTML = '00'
}


function startTimer(){
    // console.log('start');
    mSec++
    // console.log(mSec);
if(mSec < 9){
    setMSecc( '0' + mSec)
}
if(mSec > 9){
    setMSecc(mSec)
}

if(mSec > 99){
   sec++
//    setTime(time[2] = '0' + sec)
   setSec('0' + sec)
   mSec = 0
   setMSecc( '0' + mSec)}
////
if(sec < 9){
    setSec('0' + sec)}
if(sec > 9){
    setSec(sec)
}
if(sec > 60){
    min++
    setMin( '0' + min)

    sec = 0
    setSec('0' + sec)
}
////
if(min < 9){
    setMin('0' + min)
}

if(min > 9){
    // minEl.innerHTML = min
    setMin(min)
}

if(min > 60){
    hour++
    setHour('0' + hour)
    min = 0
    setMin('0' + min)

}
//
if(hour < 9){
    setHour('0' + hour)

}

if(hour > 9){
    setHour(hour)

}





}

const clear = () => {
    setRes([])
}

const dell = () => {
    if( hr.current.style.display == 'none'){
        hr.current.style.display = 'block'
        hrr.current.style.display = 'block'
        return
    }
    hr.current.style.display = 'none'
    hrr.current.style.display = 'none'

}

    return(
        <div className={cl.container} >

        <div className={cl.timer}>
            <div className={cl.menubar}>
                <h2 onClick={start} id="start">Start</h2>
                <h2 onClick={lap} id="lap">Lap</h2>
                <h2 onClick={pause} id="pause">Stop</h2>
                <h2 onClick={restart} id="stop">Restart</h2>
                <h2 onClick={clear} id="clear">Clear Laps</h2>
                <h2 onClick={dell} className={cl.del}>Hours</h2>
            </div>

            <div className={cl.timer__timer}>

            <div ref={hr} className={cl.timer__block} id="h">
                <div className={cl.h}>{hourr}</div>
                <div className={cl.title}></div>
            </div>
            <div ref={hrr} className={cl.x} id="hh">:</div>

            <div  className={cl.timer__block}>
                <div className={cl.time,cl.min}>{minn}</div>
                <div className={cl.title}></div>
            </div>
            <div className={cl.x}>:</div>

            <div className={cl.timer__block}>
                <div className={cl.time}>{secc}</div>
                <div className={cl.title}></div>
            </div>
            <div className={cl.x}>:</div>

            <div className={cl.timer__block}>
                <div className={cl.time}>{mSecc}</div>
                <div className={cl.title}></div>
            </div>
        </div>

        
        <div className={cl.res__block}>

            <div className={cl.res}>

                {res.map((e,i)=>
                  <div key={i}>
                    {res[i].hourr}:{res[i].minn}:{res[i].secc}:{res[i].mSecc}
                  </div>
                )}
            </div>
        </div>
        
      </div>
      
    </div>
    )
}


export default Timer