import express from 'express';
import { PORT } from './config/env.js';
const app = express();

app.get('/',(req,res)=>{
  res.send("HI THERE !");
})
app.listen(PORT,()=>{
  console.log(`API is running here http://localhost:${PORT}`);
})

export default app;