import React, { useState } from 'react'
import IMAGES from '../Images/Images'
import Confetti from './Confetti'

function Banner() {

 const [isHovering,setIsHovering]=useState(false);

  return (
   <div className='root'>
<div className='content'>
{isHovering?<Confetti/>:null}
    <h1>Happy Birthday</h1>
    <h3>May this new chapter of your life be filled with joy and success. Happy birthday, my amazing friend!</h3>
    <img src={IMAGES.Image4} alt="" />
</div>


  <div className='Banner'>
     {/* To show inner-card */}
    <div className='inner-card'>
      <img src={IMAGES.Image2} alt="" />
    </div>

    {/* To show outer-card */}
    <div className='outer-card'>
      <img src="https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>

    

    {/* //To show card */}
      <div className='Banner-main' onMouseEnter={()=>setIsHovering(true)}
      onMuouseLeave={()=>setIsHovering(false)}>
      <div className="Banner-Container">
      <h2>Happy Birthday <br />  my dearest Anoop</h2>
      <p>
      Wishing you a birthday filled with laughter, happiness, and unforgettable memories.
      <br /> <br />Happy birthday to the one who brings so much brightness into my life.</p>
      </div>
    </div>
  </div>
  </div> 
  )
}

export default Banner;
