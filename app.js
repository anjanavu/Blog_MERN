const express=require('express')
const mongoose=require('mongoose');
const app=new express();
const path = require('path'); 
const cors=require('cors')
   app.use(express.static(path.join(__dirname,"blog_app","build")))
app.use(express.json());
app.use(cors());
const userRouter=require('./routes/userRoute');
app.use('/api',userRouter);
const postRouter=require('./routes/postRoute');
app.use('/blogs',postRouter);

MONGODB_URL = 'mongodb+srv://anjanavu2000:anjana2000@cluster0.trc3jzo.mongodb.net/blogDB?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error);
  });

  
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"blog_app","build","index.html"))
})

  app.listen(3033,()=>{
    console.log("listening to the port 3033")
})