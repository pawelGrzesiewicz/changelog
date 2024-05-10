const express =require('express');
const path = require('path')

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    // res.json({message: "Hello Express"});
    res.sendFile(path.resolve('pages/index.html'))
})


app.listen(3002, () => {
    console.log('Server started on port 3002')
})