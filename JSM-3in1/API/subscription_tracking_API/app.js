import express from 'express';
import { PORT } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectTODatabase from './database/mongodb.js';

const app = express();
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions',subscriptionRouter);

app.get('/',(req,res)=>{
  res.send("HI THERE !");
})


app.listen(PORT,async()=>{
  console.log(`API is running here http://localhost:${PORT}`);
  await connectTODatabase();
})

export default app;