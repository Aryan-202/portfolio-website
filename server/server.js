import express from 'express';
import appconfig from './dotenv.js';

const app = express();
const PORT = appconfig.PORT;

app.get('/',(req,res)=>{
    res.status(200).json({
        success: true,
        message: 'server is running'
    });
});

app.listen(PORT, ()=>{
    console.log(`Server is running at port: ${PORT}`);
})