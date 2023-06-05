import React, { useState } from 'react'

export default function StudentForm() {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    
   
    const getDetails = JSON.parse(localStorage.getItem('details')) || []

    function handleDetails(e){
        e.preventDefault()
       
       const existeData = getDetails.find((data) => data.id === id)
       const data = {
        name , id, phone, email
       }
       const updatedData = [...getDetails, data]
       if(existeData){
        alert("Student is already exist")
       }else{
        localStorage.setItem('details', JSON.stringify(updatedData))
        setName('')
        setId('')
        setEmail('')
        setPhone('')
       }
    }
  return (
    <div>
      <h1>Fill Student's Details</h1>
      <div className='inputs'>
        <form onSubmit={handleDetails}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter  Name " required /> <br /> 
        <input type="text" value={id} onChange={(e)=>setId(e.target.value)} placeholder="Enter Id" required/> <br />
        <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Marks" required/> <br />
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' required/> <br />
        <button type='submit'>Submit</button>
        </form>
      </div>
     { getDetails.length >0 && <div className='details'>
         <table >
            <thead>
                <tr>
                    <th>S No.</th>
                    <th>Student's Name</th>
                    <th>Student's Id</th>
                    <th>Student's Email</th>
                    <th>Student's Total marks</th>
                </tr>
                
            </thead>
            <tbody>
               
                    {
                        getDetails.map((data,index) => (
                            <tr key={index}>
                              <td>{index +1}</td>
                              <td>{data.name}</td>
                              <td>{data.id}</td>
                              <td>{data.email}</td>
                              <td>{data.phone}</td>
                            </tr>
                        ))
                    }
                    
                
            </tbody>
         </table>
      </div>}
    </div>
  )
}
