import mongoose from 'mongoose';
import {DB_URI, NODE_ENV} from '../config/env.js';

if(!DB_URI){
  throw new Error("please define the MONGODB_URI variable inside .env.<devlopment/production>.local");

}

const connectTODatabase = async () =>{
  try {
    await mongoose.connect(DB_URI);
    console.log(`connected to db in ${NODE_ENV} mode`);
  } catch (error) {
    console.error("Error connectiong to db : ",error);

    process.exit(1);
    
  }
}

export default connectTODatabase;