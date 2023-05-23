import { Button, TextField } from '@mui/material'
import { nanoid } from 'nanoid'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Task() {
  const [task, setTask] = useState('')
  const [list, setList] = useState([])
  const [editing, setEditing] = useState()
  // const taskRef = useRef(null)

  function handleTask(e){
    setTask(e.target.value)
  }

  function handleAdd(e){
    e.preventDefault()
    const newList = [...list,  task]
    setList(newList)
    setTask('')
  }

  function handleEditing(index,updatedList){
  setList([...list.slice(0,index), updatedList, ...list.slice(index + 1)]);
  setEditing(index)
  
  }
  function handleDelete(item){
    const deleted = list.filter((ele) => ele != item)
    setList(deleted) 
    toast.success('Deleted successfully ')   
  }
  function handleSave(){
    setEditing()
    toast.success('Changes are saved. ')
  }
  return (
    <div>
      <ToastContainer position='top-center'  autoClose={3000}/>
      <Link to='/' className='m-5'>Go to Home page</Link>
      <h1 className='text-3xl m-5'>todo task</h1>
      <div className='w-5/12 m-5 flex justify-center'> 
      <form onSubmit={handleAdd}>
      <TextField onChange={handleTask} label="Enter todo title" variant="standard" value={task} />
      <Button sx={{m:'10px'}} type='submit' variant='contained'>Add</Button>
      </form>
      </div>
      <ul>
        {
          list.map((item, index)=>(
            <li key={index}>
               {editing === index ? (
                <div className='flex gap-5 mx-5 m-5'>
                  <input type="text" defaultValue={item}
                  autoFocus
                  onChange={(e) =>handleEditing(index, e.target.value)}
                  />
                  <Button onClick={handleSave} variant='contained'>Save</Button>
                </div>
               ) : (
                <div className='flex gap-5 mx-5 m-5'>
                  <spna className='mx-8 w-20'>{item}</spna>
                  <Button variant='contained' onClick={()=>setEditing(index)}>Edit</Button>
                  <Button onClick={()=>handleDelete(item)} variant='contained'>Delete</Button>
                </div>
               ) }
            </li>
          ))
        }
      </ul>
    
    </div>
  )
}
