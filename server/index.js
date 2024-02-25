import express from 'express'
import * as dotenv from 'dotenv';
import cors from 'cors'
import connectDB from './db/connect.js';
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'
import router from './routes/postRoutes.js';

dotenv.config();

const app = express();
const port = 8000;
app.use(cors());
app.use(express.json({limit:'50mb'}));
app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes)

app.get('/',(req,res) =>{
    res.send('Hello from Open Ai')
})


app.listen(port,()=>{
    try {
        connectDB(process.env.MONGODB_URL)
        console.log(`Server is running on port ${port}`)
    } catch (error) {
        console.log(error)
    }
   
})