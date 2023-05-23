import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


export default function Home() {
  const details = JSON.parse(localStorage.getItem('contactDetails'))
  const [clear, setClear] = useState(details)
  const navigate = useNavigate()
  function handleClear(){
   
    Swal.fire({
      title: 'Are you sure you want to clear all details?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Clear',
      denyButtonText: `Don't clear`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Cleared!', '', 'success')
        const cleared = localStorage.clear()
        setClear(cleared)

      } else if (result.isDenied) {
        Swal.fire('Details are not cleared', '', 'info')
      }
    })
  }

  function handleAdd(){
    navigate('/contact')
  }
  return (
    <div>
      <h1 className='text-3xl m-5'>Wellcome to home page</h1>
      <div className='flex m-5 gap-10 my-10'>
    {details &&  <div>
        <Button variant='contained' onClick={handleClear}>Clear</Button>
      </div>}
      <div>
        <Button variant='contained' onClick={handleAdd}>Add details</Button>
      </div>
      <div>
        <Link to='/task'>Go to task page</Link>
      </div>
      </div>
      <div>
      { details && <table className='border-2 m-4 w-6/12'>
          <tr className='border'>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        
           {
               details.map((user,index) =>(
                <tr>
                  
                  <td>{user.fName}</td>
                  <td>{user.lName}</td>
               
                </tr>
               ))
           }
        
            
        </table>}
      </div>
    </div>
  )
}
