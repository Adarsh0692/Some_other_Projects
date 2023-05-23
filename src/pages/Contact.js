import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function Contact() {
    const [fName, setFname] = useState('')
    const [lName, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState(false)
    const [FN, setFN] = useState('')
    const [LN, setLN] = useState('')
    const [EM, setEM] = useState('')
    const [PH, setPH] = useState('')

    function validFname(fName){
        const Regex = /^[A-Za-z]{3,10}$/;
        if(Regex.test(fName)){
           return ''
        }else{
            return 'First name must contain only alphabets and at-least 3 alphabets are required.'
        }
    }
    function handleFname(e){
       setFname(e.target.value)
       setError(false)
       setFN(() => validFname(e.target.value))
    }

    function validLname(lName){
        const Regex = /^[A-Za-z]{2,10}$/;
        if(Regex.test(lName)){
           return ''
        }else{
            return ('Last name must contain only alphabets and at-least 2 alphabets are required.')
        }
    }
    
    function handleLname(e){
       setLname(e.target.value)
       setError(false)
       setLN(() => validLname(e.target.value))
    }
    function validEmail(email){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if(!regex.test(email)){
          return "Invalid email"
        }
        return "";
     }
    function handleEmail(e){
       setEmail(e.target.value)
       setError(false)
       setEM(() =>validEmail(e.target.value) )
    }
    function validPhone(phone) {
        const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (regex.test(phone)) {
          return ""
        }
        return "Invalid phone number";
      } 
    function handlePhone(e){
       setPhone(e.target.value)
       setError(false)
       setPH(() => validPhone(e.target.value))
    }

function handleSubmit(e){
    e.preventDefault()
    const userDetails = JSON.parse(localStorage.getItem('contactDetails')) || []
    const existUser = userDetails.find((user) => user.email === email || user.phone === phone )
    const details = {
        fName,lName,email,phone
       }
       const updatedDetails = [...userDetails, details]
   if(existUser){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'User email or phone is already exist!',
      })
   }else

  
  
    if(FN || LN || PH || EM){
        
        Swal.fire({
            icon: 'error',
            title: 'Sorry...',
            text: 'You have entered wrong details'
        })
       }else {
        Swal.fire({
            title: 'Do you want to save this details?',
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
              localStorage.setItem('contactDetails', JSON.stringify(updatedDetails))
              setFname('')
              setLname('')
              setEmail('')
              setPhone('')

            } else if (result.isDenied) {
              Swal.fire('Details are not saved', '', 'info')
            }
          })
       }
   
   
}
  return (
    <>
    <div>
       
       <Link to='/' className='my-10 text-2xl'>Go to home page</Link>
            
       </div>
    <div className='flex justify-center my-10 '>
        
        <ToastContainer position='top-center' autoClose='2000'/>
      
       <div className='border-4 mx-4 my-3 w-6/12 p-4 h-auto flex-col justify-center items-center text-center gap-5 box-border'>
       <h1>Fill your contact details</h1>
        <form onSubmit={handleSubmit}>
       <TextField value={fName} onChange={handleFname} sx={{width:"100%",m:'20px 0'}} label="First name" variant="outlined" required={true} error={error || FN} helperText={FN && <p className='text-red-600'>{FN}</p> }/>
       <TextField value={lName} onChange={handleLname} sx={{width:"100%" ,m:'20px 0'}} label="Last name" variant="outlined" required error={error} helperText={LN && <p className='text-red-600'>{LN}</p> }/>
       <TextField value={email} onChange={handleEmail} sx={{width:"100%" ,m:'20px 0'}} label="Email Id" variant="outlined" required error={error} helperText={EM && <p className='text-red-600'>{EM}</p> }/>
       <TextField type='number' value={phone} onChange={handlePhone} sx={{width:"100%",m:'20px 0'}} label="Phone no" variant="outlined" required error={error} helperText={PH && <p className='text-red-600'>{PH}</p> }/>
        <div>
        <Button sx={{width:'15rem'}} type='submit' variant="contained">Submit</Button>
        </div>
        </form>
       </div>
    </div>
    </>
  )
}
