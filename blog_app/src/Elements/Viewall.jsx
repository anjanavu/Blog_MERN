import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosintercepter';
const Viewall = () => {
  const navigate=useNavigate();
    const [cardData,setData]=useState([]);
    useEffect(() => {
      axiosInstance.get('http://127.0.0.1:3033/blogs')
        .then((res) => {
          setData(res.data); 
          console.log(res.data);
        })

    }, []); 

    function removeBlog(id) {
      axiosInstance.delete(`http://127.0.0.1:3033/blogs/deletepost/${id}`)
        .then((res) => {
          alert(res.data);
          navigate('/addpost')
          
        })
    }
    
    
  return (
    <div style={{margin:"7%"}}>
        <Grid container spacing={2}>
            {cardData.map((val,i)=>(
            <Grid item key={i}xs={12} sm={6} md={4}>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image} title={val.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">{val.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" onClick={() => removeBlog(val._id)}>Delete</Button>


        <Button size="small">Update</Button>
      </CardActions>
    </Card>
    </Grid>
    ))}
    </Grid>
    </div>
  );
}

export default Viewall
