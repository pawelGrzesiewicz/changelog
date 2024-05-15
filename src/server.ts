import express from 'express';
import cors from 'cors'

import router from './router'

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/v1', router)


app.get('/', (req, res) => {
    res.json({message: "Hello Express"});
});


export default app;