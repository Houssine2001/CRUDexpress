var express = require('express');
const pays = require('../model/pays');

//implimenter de fonction 2 get all pays
async function getAll(req, res) {
  try {
    const data = await pays.find(); //await pour attendre la reponse de la base de donnees
    res.send(data);
  } catch (error) {
    res.send('error');
  }
};
//674ec7d9a8ce03693c0d8190
//implimenter de fonction 2 getbyid pays
async function getById(req, res) {
    try {
      const data = await pays.findById(req.params.id);
      res.send(data);
    } catch (error) {
      res.send('error');
    }
  };
  


//implimenter de fonction 3 add pays
async function addPays(req, res) {
  try {
    const data = new pays(req.body);
    await data.save();
    res.status(200).send('data inserted');
  } catch (error) {
    res.status(400).send('error');
  }
}



module.exports = { getAll , getById , addPays }; //exporter la fonction getAll