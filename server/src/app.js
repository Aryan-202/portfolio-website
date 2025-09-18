import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());












app.get('/api/health',(req, res)=>{
    res.status(200).json({
        success: true,
        message: 'this is health check'
    });
});

export default app;