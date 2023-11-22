const express = require('express');
const router = express.Router();

const userData=require('../model/data')
const jwt=require('jsonwebtoken')
router.use(express.json());
router.use(express.urlencoded({ extended: true }));



router.get('/view', async (req, res) => {
    try {
      const data = await userData.find();
      console.log(data); 
      res.status(200).json(data);
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
      res.status(404).json(error);
    }
  });
  
  router.post('/add', async (req, res) => {
    try {
        var user=req.body;
       const savedUser = await userData(user).save();
        res.status(201).send('Registered successfully');
      } 
    catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send(error);
      }
  });


  router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;

        const foundUser = await userData.findOne({ email, password });

        if (foundUser) {
          let payload={email:email,password:password}
          let token=jwt.sign(payload,'reactblogapp');
            res.status(200).send({message:'success',token:token});
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send(error);
    }
});

  router.delete('/user/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const deletedData = await userData.findByIdAndDelete(id);
      res.status(200).json('Data deleted successfully');
    } catch (error) {
      res.status(404).json(error);
    }
  });
  router.put('/user/:id', async (req, res) => {
    try {
      const data=req.body;
      const id=req.params.id;
      let item={$set:data}
      const user = await userData.findByIdAndUpdate(id, item);
      res.status(200).json('Data Updated Successfully');
    } catch (error) {
      res.status(404).send(error);
    }
    
  });



  module.exports = router;