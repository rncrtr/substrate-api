import mongoose from 'mongoose';
import { Router } from 'express';
import Alloy from '../model/alloy';
import bodyParser from 'body-parser';

export default({ config, db }) => {
  let api = Router();

  // '/v1/alloy' - GET all test accts
  api.get('/', (req, res) => {
    Alloy.find({}, (err, alloys) => {
      if (err) {
        res.send(err);
      }
      res.json(alloys);
    });
  });

  // '/v1/alloy/:id' - GET a specific test acct
  api.get('/:id', (req, res) => {
    Alloy.findById(req.params.id, (err, alloy) => {
      if (err) {
        res.send(err);
      }
      res.json(alloy);
    });
  });

  // '/v1/alloy/add' - POST - add a test acct
  api.post('/add', (req, res) => {
    let newAlloy = new Alloy();
    newAlloy.name = req.body.name;
    newAlloy.ratio = req.body.ratio;

    newAlloy.save(function(err) {
      if (err) {
        res.send(err);
      }else{
        res.json({ message: 'Alloy saved successfully' });
      }
    });
  });

  // '/v1/alloy/:id' - DELETE - remove a test acct
  api.delete('/:id', (req, res) => {
    Alloy.remove({
      _id: req.params.id
    }, (err, alloy) => {
      if (err) {
        res.send(err);
      }
        res.json({message: "Alloy Successfully Removed"});
      });
  });

  // '/v1/alloy/:id' - PUT - update an existing record
  api.put('/:id', (req, res) => {
    Alloy.findById(req.params.id, (err, alloy) => {
      if (err) {
        res.send(err);
      }
      newAlloy.name = req.body.name;
      newAlloy.ratio = req.body.ratio;
      
      alloy.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Alloy info updated' });
      });
    });
  });

  return api;
}
