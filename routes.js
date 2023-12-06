var express = require('express');
var router = express.Router();


router.get('/', function(request, response){
    response.send("GET CONTATTI")
})


router.get('/:id', function(request,response){
    response.send("L'id del contatto è: "  +   request.params.id );
})

router.post('/', function(request,response){
    response.send("POST CONTATTI");
})

router.put('/:id', function(request,response){
    response.send("PUT CONTATTI: " + request.params.id);
})

router.delete('/:id',function(request,response){
    response.send("DELETE CONTATTI: " + request.params.id);
})

router.all('*', (request, response) => {
    response.send('<h1>Pagina non trovata.</h1>')
})
module.exports=router;
