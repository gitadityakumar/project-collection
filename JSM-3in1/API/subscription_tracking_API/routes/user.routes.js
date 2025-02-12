import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controllers.js";
import  authorize  from "../middlewares/auth.middleware.js";
const userRouter = Router();


userRouter.get('/',getUsers);

userRouter.get('/:id',authorize,getUser);

userRouter.post('/',(req,res)=>{res.send({message:"CREATE new users"})});

userRouter.put('/:id',(req,res)=>{res.send({message:"UPDATE  user details"})});

userRouter.delete('/:id',(req,res)=>{res.send({message:"DELETE all users"})});

export  default userRouter;