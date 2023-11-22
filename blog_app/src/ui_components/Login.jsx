import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [user,setUser]=useState();
    const navigate=useNavigate();
    const inputHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    function submitForm() {
      axios.post('http://127.0.0.1:3033/api/', user)
        .then((res) => {
          alert(res.data.message);

          if(res.data.message==='success'){
            sessionStorage.setItem("userToken",res.data.token);
            navigate('/addpost')
          }
          
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
              alert('Invalid credentials. Please try again.');
          } else {
              console.error('Error during login:', error);
              alert('An error occurred. Please try again later.');
          }
      });
    }
  return (
    <div style={{margin:"7% 10% 10%"}}>
      <Typography variant='h3' style={{color:'purple'}}>
        BlogApp Login
      </Typography>
      <br /><br /> <br />   
    <TextField variant='outlined'label="Email" name='email' onChange={inputHandler}>
    </TextField>
    <br /><br /> <br />   
    <TextField variant='outlined'label="Password" name='password' type='password' onChange={inputHandler}>
    </TextField>
    <br /><br /> <br />
    <Button variant='contained' color='secondary' onClick={submitForm}>Login</Button>
    <br /><br /> <br />
    <Typography>
        <Link to={"/signup"}>New User Click Here
        </Link>
    </Typography>
</div>
  )
}

export default Login
