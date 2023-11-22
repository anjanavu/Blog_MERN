const express=require('express')
const mongoose=require('mongoose');
const app=new express();
const cors=require('cors')

app.use(express.json());
app.use(cors());
const userRouter=require('./routes/userRoute');
app.use('/api',userRouter);
const postRouter=require('./routes/postRoute');
app.use('/blogs',postRouter);
mongoose.connect('mongodb+srv://anjanavu2000:anjana2000@cluster0.trc3jzo.mongodb.net/blogDB?retryWrites=true&w=majority')
.then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error);
  });

  


  app.listen(3033,()=>{
    console.log("listening to the port 3033")
})