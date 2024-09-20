const express = require('express');
const app = express() ;
app.listen(3030);

app.get('/',(req,res) =>{
   // res.write('Jai Mata Di');
   // res.end();

   res.send('<h1>Jai Mata Di</h1>')
})