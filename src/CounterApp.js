import React, { useState } from 'react'
import './CounterApp.css'
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

export default function CounterApp() {
    const [count, setCount] = useState(0)

    function handleUp(){
        setCount(count + 1)
    }
    function handleLeft(){
        setCount(count - 10)
    }
    function handleRight(){
        setCount(count + 10)
    }
    function handleDown(){
        setCount(count - 1)
    }

  return (
    <div className='mainDiv'>
     
      <div >
         <ArrowDropUpRoundedIcon onClick={handleUp} sx={{fontSize:'120px', cursor:'pointer'}}/>
         <div className='counter'>
         <span><ArrowLeftRoundedIcon onClick={handleLeft} sx={{fontSize:'120px', cursor:'pointer'}}/></span> 
         <p style={{fontSize:'60px',marginTop:'20px'}}>{count}</p>
         <span><ArrowRightRoundedIcon onClick={handleRight} sx={{fontSize:'120px', cursor:'pointer'}}/></span>

         </div>
         <div>
            <ArrowDropDownRoundedIcon onClick={handleDown} sx={{fontSize:'120px', cursor:'pointer'}}/>
         </div>
      </div>
    </div>
  )
}
