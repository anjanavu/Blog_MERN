import { Button, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
  const [item,setItem]=useState({
    name:'',
    email:'', 
    address:'',  
    phone_number:'',
    password:''
  });
  function submitForm() {
   axios.post('http://localhost:3033/api/add', item)
     .then((res) => {
       alert(res.data);
       navigate('/');
     })
 }
 
  return (
    <div style={{margin:"12%"}}>
      <Grid  container spacing={2}>
        <Grid item xs={12} sx={6} md={6}>
            <TextField variant='outlined' fullWidth label='Name' onChange={(e)=>{
      setItem({...item,name:e.target.value}) }}></TextField>

        </Grid>
        <Grid item xs={12} sx={6} md={6}>
            <TextField variant='outlined' fullWidth label='Email' onChange={(e)=>{
      setItem({...item,email:e.target.value}) }}></TextField>

        </Grid>
        <Grid item xs={12} sx={6} md={12}>
            <TextField variant='outlined' fullWidth label='Address'  onChange={(e)=>{
      setItem({...item,address:e.target.value}) }} multiline rows={3}></TextField>

        </Grid>
        <Grid item xs={12} sx={6} md={6}>
            <TextField variant='outlined' fullWidth label='Phone Number' onChange={(e)=>{
      setItem({...item,phone_number:e.target.value}) }}></TextField>

        </Grid>
        <Grid item xs={12} sx={12} md={12}>
            <TextField variant='outlined' fullWidth label='Password' onChange={(e)=>{
      setItem({...item,password:e.target.value}) }}></TextField>

        </Grid>
        <Grid item xs={12} sx={12} md={12}>
        <Button variant='contained' color='secondary' onClick={submitForm}>Sign Up</Button>

        </Grid>
        <br/><br/><br/>

        <Grid item xs={12} sx={12} md={12}>
    <Typography>
        <Link to={"/"}>Back to Login
        </Link>
    </Typography>
        </Grid>

      </Grid>
    </div>
  )
}

export default Signup
