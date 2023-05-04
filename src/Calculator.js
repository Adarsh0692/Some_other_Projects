import React, { useState } from 'react'
import './Calculator.css'


export default function Calculator() {
    const [data, setData] = useState('')
    function clickBtn(e){
        setData(data.concat(e.target.name))

    }
    function clearData(){
            setData('')
    }
    function back(){
        setData(data.slice(0,-1))
    }
    function result(){
        setData(eval(data).toString())
    }
  return (
    <div className='main_Box'>
      <div>
         <input type="text" value={data}/>
      </div>
      <div className='btns'>
         <button onClick={clearData}>AC</button>
         <button onClick={back}>c</button>
         <button>%</button>
         <button name='/' onClick={clickBtn}>&divide;</button>
         <button name='7' onClick={clickBtn}>7</button>
         <button name='8' onClick={clickBtn}>8</button>
         <button name='9' onClick={clickBtn}>9</button>
         <button name='*' onClick={clickBtn}>&times;</button>
         <button name='4' onClick={clickBtn}>4</button>
         <button name='5' onClick={clickBtn}>5</button>
         <button name='6' onClick={clickBtn}>6</button>
         <button name='-' onClick={clickBtn}>&ndash;</button>
         <button name='1' onClick={clickBtn}>1</button>
         <button name='2' onClick={clickBtn}>2</button>
         <button name='3' onClick={clickBtn}>3</button>
         <button name='+' onClick={clickBtn}>+</button>
         <button name='.' onClick={clickBtn}>.</button>
         <button name='0' onClick={clickBtn}>0</button>
         <button onClick={result}>=</button>
      </div>
    </div>
  )
}
