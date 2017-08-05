const express = require('express');
const app = express();

app.route('/').get(function(request, response){
    response.send('Hello World');
})

app.listen(3000, function(){
    console.log('Servidor rodando em 3000');
})
