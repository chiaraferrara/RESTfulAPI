var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
router.use(bodyParser.json());


const connection = mysql.createConnection({
    host: "localhost",    
    user: "root",
    password: "",    
    database: "nodedb",
    port:"3306",
});



router.get('/', function(request, response){
    const query = "SELECT * FROM `contatti`";
    connection.query(query, function(err, result){
        if(err){
            console.error('Errore: ', err);
            return;
        }
       response.send(result);
    });
    
})


router.get('/:id', function(request,response){
    const id = request.params.id
    const query = "SELECT * FROM `contatti` WHERE `id` = " + id;
    connection.query(query, [id], function(err, result){
        if(err){
            console.error('Errore: ', err)
            return;
        }
        response.send(result);
    })
})

router.post('/', function(request,response){
    // const id = request.body.id;
    const nome = request.body.nome;
    const telefono = request.body.telefono;
    const email = request.body.email;
    response.send("POST CONTATTI: " + nome + "<br/> " + telefono + "<br/>" + email);
    // response.send("Contatto inserito.")

    const query = "INSERT INTO `contatti`(`nome`, `telefono`, `email`) VALUES (?,?,?)";
            connection.query(query,[nome, telefono, email], function(err, result) {
                if (err) {
                    console.error('Errore: ', err);
                    return;
                }
                console.log("Contatto Inserito" + nome + " " + telefono + " " + email);
                
            });
})

router.put('/:id', function(request,response){
   const id = request.params.id;
   const nome = request.body.nome;
    const telefono = request.body.telefono;
    const email = request.body.email;
   const query = "UPDATE `contatti` SET `nome` = ?, `telefono` = ?, `email` = ? WHERE id = ?" ;
   connection.query(query,[nome, telefono, email, id], function(err,result){
    if(err){
        console.error(err);
        return;
    }
    response.send("Contatto aggiornato con successo: " + nome + "<br/> " + telefono + "<br/>" + email)
   })

})

router.delete('/:id',function(request,response){
    const id= request.params.id;
    const query = "DELETE FROM `contatti` WHERE id=" + id;
    connection.query(query,[id], function(error, results){
        if(error){
            console.error(err);
            return;
        }
        console.log("Contatto eliminato: " + results.affectedRows)
        response.send("Contatto eliminato con successo")
    })
})

router.all('*', (request, response) => {
    response.send('<h1>Pagina non trovata.</h1>')
})
module.exports=router;
