import React,{useEffect,useState} from 'react'
import ReactConfetti from 'react-confetti';


const Confetti = () => {

    let [windowDimension,setWindowDimension]=useState({width:window.innerWidth,height:window.innerHeight})
    let dectectSize=()=>{
        setWindowDimension({width:window.innerWidth,height:window.innerHeight})
    }
    useEffect(()=>{
        window.addEventListener('resize',dectectSize);
        return ()=>{
            window.removeEventListener('resize',dectectSize);
        }
    },[windowDimension])
  return (
    <div>
      <ReactConfetti
      width={windowDimension.width}
      height={windowDimension.height}
      tweenDuration={
        1000
      }
      />
    </div>
  )
}

export default Confetti
