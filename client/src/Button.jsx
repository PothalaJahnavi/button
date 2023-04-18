import React from 'react'
import { useEffect,useState } from 'react';
import check from './assets/check.gif';
const Button = () => {

    const [value, setValue] = React.useState(0);
    const [loading,setLoading]=useState(false)
    const [done,setDone]=useState(false)

  // useEffect(() => {
  //   setValue(20 * 12);
  // });

    const handleClick=()=>{
          setLoading(true)
          setTimeout(()=>{
            
            setLoading(false)
            setDone(true)
            
          },2000)
           setTimeout(()=>{
            setDone(false)
           },3000)
      }
  return (
    <div className='button' style={{marginTop:"20%"}}>
     <button id="test" className={`${!loading&&!done? "download-container " :""} ${loading?"loading-container":""} ${done?"done-container":""}`}onClick={handleClick}>
              {!loading&&!done&&<span>Download</span>}
              {loading&&<><a className="fa fa-arrow-down fa-1x bounce" href="#"></a>&nbsp;&nbsp;<span >Loading</span>

              <div class="progress">
              <div class="progress-value" style={{marginBottom:"-10px"}}></div>
              </div>

              </>}
              {done&&<>
              <img src={check} alt="" style={{width:"20px",height:"20px",borderRadius:"150px"}}/>&nbsp;&nbsp;
              <span>Done</span></>}
            </button>
    </div>
  )
}

export default Button
