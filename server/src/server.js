import express from 'express';

const app = express();
const port = 3000;

app.get('/api/health', (req, res)=>{
    res.json({
        success: true,
        message: "api is working"
    });
});

app.listen(port,()=>{
    console.log(`server running on port: ${port}`);
})