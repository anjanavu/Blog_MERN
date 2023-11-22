const express = require('express');
const router = express.Router();

const postData=require('../model/post')
router.use(express.json());
const jwt=require('jsonwebtoken')
router.use(express.urlencoded({ extended: true }));

function verifytoken(req,res,next){
  try{
    const token=req.headers.token;
    console.log(token);
    if(!token) throw 'Unauthorized';
    let payload=jwt.verify(token,'reactblogapp');
    if(!payload) throw 'Unauthorized';
    next()
  }
  catch(error){
    //console.log(error);
    res.status(401).send('error');
  }
}

  router.get('/',verifytoken, async (req, res) => {
    try {
      const data = await postData.find();
       res.json(data);
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
      res.status(404).json(error);
    }
  });

  router.post('/addpost',verifytoken, async (req, res) => {
    try {
        var user=req.body;
       const savedUser = await postData(user).save();
        res.status(201).send('Added successfully');
      } 
    catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send(error);
      }
  });
  router.delete('/deletepost/:id',verifytoken, async (req, res) => {
    const id = req.params.id;
    try {
      const deletedData = await postData.findByIdAndDelete(id);
      res.status(200).send('Data deleted successfully');
    } catch (error) {
      res.status(404).json(error);
    }
  });
  router.put('/updatepost/:id',verifytoken, async (req, res) => {
    try {
      const data=req.body;
      const id=req.params.id;
      let item={$set:data}
      const user = await postData.findByIdAndUpdate(id, item);
      res.status(200).json('Data Updated Successfully');
    } catch (error) {
      res.status(404).send(error);
    }
    
  });


  module.exports = router;