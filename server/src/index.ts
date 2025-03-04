import express from 'express';
const mainRouter = require('./routes/authRoutes');
const app = express();
const cors = require('cors');
const port = 8000;
import cookieParser from 'cookie-parser';



app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:3000','https://authentication-system-gamma.vercel.app'],
    credentials: true
})); 
app.use(express.json());
app.use('/api/v1',mainRouter);



app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})