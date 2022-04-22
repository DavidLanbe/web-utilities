const express = require('express');

require('dotenv').config()

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json())

app.get('/api/youtube', (_, res) => 
{
    res.send(
        {
            msg: 'Hello Tazdingo !'
        }
    )
})

app.listen(PORT, ()=> 
{
    console.log('listening on port :' ,{PORT});
});