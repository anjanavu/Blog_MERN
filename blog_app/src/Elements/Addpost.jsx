import { Button, TextField } from '@mui/material'

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import axiosInstance from '../axiosintercepter';

const Addpost = () => {
  const [item,setItem]=useState({
    title:'',
    description:'',
    date_update:Date.now(),
    image:''
  });
  const navigate=useNavigate();
  function submitForm() {
     // Log the item to check its structure
    axiosInstance.post('http://127.0.0.1:3033/blogs/addpost', item)
      .then((res) => {
        alert(res.data);
        navigate('/view');
      })
  }
  
  return (
    <div style={{margin:"6%"}}>
      <TextField variant='outlined' label='post title' onChange={(e)=>{
      setItem({...item,title:e.target.value}) }}></TextField>
      <br /><br />    
      <TextField variant='outlined' label='Type a post' onChange={(e)=>{
      setItem({...item,description:e.target.value}) }} multiline rows={10} fullWidth></TextField>
      <br /><br />
      <TextField fullWidth variant='outlined'  onChange={(e)=>{
      setItem({...item,image:e.target.value}) }}label='Image URL'></TextField>
      <br /><br />
      <Button variant='contained' color='secondary'onClick={submitForm}>Submit</Button>
      </div>
  )
}

export default Addpost
