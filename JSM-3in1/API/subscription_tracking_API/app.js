import express from 'express'
import { PORT } from './config/env.js';
const app = express();
console.log(PORT);

app.get('/',(req,res)=>{
  res.send("Hi there");
})


app.listen(PORT,()=>{
  console.log(`api is running on http://localhost:${PORT}`);
})

export default app;