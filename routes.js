var express = require("express");
var router = express.Router();
const client = require('./connection');
const ObjectId = require('mongodb').ObjectId;


router.get("/", async function (_, response) {
  try{
    const db = await client.db('NodeDB');
    const data = await db.collection('contatti').find().toArray();
    response.json({
      status: "Successo",
      message: "Tutti i contatti",
      data: data
    })
  }catch(error){
    response.json({
      status : 'error',
      message: 'impossibile connettersi al DB.'
    })
  }
});

router.get("/:id", async function (request, response) {
  const id = new ObjectId(request.params.id)
  try{
    const db = await client.db('NodeDB');
    const data = await db.collection('contatti').findOne({
      _id:id
    });
    response.json({
      status: 'successo',
      message: 'singolo contatto',
      data:data,
    })
  }catch(error){
    console.log(error);
    response.json({
      status: 'error',
      message: 'connessione con il database fallita.'
    })

  }
});

router.post("/", async function (request, response) {
  // const id = request.body.id;
  const {nome, telefono, email} = request.body;
try{
  const db = client.db('NodeDB');
  const result = await db.collection('contatti').insertOne({
    nome: nome,
    telefono: telefono,
    email: email
  })
  if (result.acknowledged){
    response.json({
      status: 'Successo',
      message: 'Aggiunto con successo'
    })
  } else {
    response.json({
      status: 'Errore',
      message: 'Non aggiunto!'
    })
  } 
}catch (error){
    response.json({
      status: 'Errore!',
      message: 'Connessione fallita.'
    })
  }
 
});

router.put("/:id", async function (request, response) {
  const id = new ObjectId(request.params.id)
  const { nome, telefono, email} = request.body;
  
  try{
    const db = client.db('NodeDB');
    const result = await db.collection('contatti').updateOne({
      _id:id,
    }, {
        $set:{
          nome : nome,
          telefono : telefono,
          email: email
        }
      
    });
    if(result.acknowledged){
      response.json({
        status: 'successo',
        message: 'Contatto aggiornato con successo'
      })
    }else{
      response.json({
        status: 'Errore!',
        message: 'Aggiornamento fallito.'
      })
    }
  }catch (error){
    response.json({
      status: 'Errore!',
      message: 'Connessione fallita.'
    })

  }
})

router.delete("/:id", async function (request, response) {
  const id = new ObjectId(request.params.id)
 
  try {
    const db = client.db('NodeDB');
    const result = await db.collection('contatti').deleteOne({
        _id:id
    });

    if (result.acknowledged) {
        response.json({
            status: 'successo',
            message: 'Eliminazione avvenuta con sucesso.',
        });
    } else {
        response.json({
            status: 'Errore',
            message: 'Eliminazione fallita.',
        });
    }
} catch (error) {
    response.json({
        status: 'error',
        message: 'Connessione con il database fallita.',
    });
}
});

router.all("*", (request, response) => {
  response.send("<h1>Pagina non trovata.</h1>");
});
module.exports = router;


