import mongoose from 
"mongoose";

const connectDB = (url) =>{
    mongoose.set('strictQuery',true); //usefull when working on search functinality

    mongoose.connect(url)
    .then(()=>console.log('MongoDB connnected'))
    .catch((err) => console.log(err))
}

export default connectDB;