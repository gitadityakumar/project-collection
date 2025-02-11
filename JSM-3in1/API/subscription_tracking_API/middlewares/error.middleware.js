const errorMiddleware = (err,req,res,next) => {
  try {
    let error = { ...err};
    error.message = err.message;
    console.error(err);

    // Mongoose bad ObjectID 
    if (err.name === 'CastError'){
      const message = 'Resource not found';
      error = new Error(message);
      error.stausCode = 404;
    }
    //Mongoose dublicate Key 
    if (err.coode === 11000){
      const message = 'Duplicate field value entered';
      error = new Error(message);
      error.stausCode = 400;
    }
    //Mongoose validation error
    if (err.name === 'ValidationError'){
      const message = Object.values(err.errors).map(val => val.message);
      error = new Error(message.join(', '));
      error.stausCode = 400;
    }
    res.staus(error.stausCode || 500).json({success:false, error:error.message || 'Server Error'});
  } catch (error) {
    next(error);
    
  }
}

export default errorMiddleware;