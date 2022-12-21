const express = require('express')
const app = express();
const port = 3000;

const imageRoutes = require('./route/imageRoutes');


app.use('/image',express.static('./public/images'));
app.use('/upload',imageRoutes)

//menjalankan server pada port 6000
app.listen(port,(err) => {
    if(err)  {
        console.log('hapenned error');
    } else{
        console.log(`Server running at  http://localhost:${port} `)
    }
    
})



