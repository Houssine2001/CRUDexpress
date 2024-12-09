var express = require('express');
var router = express.Router();
// importer de model pays pour utiliser les fonctions 4 et 5
const pays = require('../model/pays');
const paysController = require('../controller/paysController');
const validate = require('../middelware/validate');
//fonction 1 get all pays : on va traiter dans le paysController du dossier controllers
router.get('/getAll', paysController.getAll);


//fonction 2 getByid  : on va traiter dans le paysController du dossier controllers
router.get('/getById/:id', paysController.getById);


//fonction 3 addPays  : on va traiter dans le paysController du dossier controllers
router.post('/addPays', validate,paysController.addPays);


//fonction 4 delete on va traiter ici 
router.delete('/delete/:id', async function (req, res) {
  try {
   await pays.findByIdAndDelete(req.params.id);
  } catch (error) {
    res.send('error');
  } 
});

//fonction 5 update on va traiter ici 
router.put('/update/:id', async function (req, res) {
  try {
    const data = await pays.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.send(data);
    } catch (error) {
    res.send('error');
    }
});




module.exports = router;