import mongoose from 'mongoose';
import { Router } from 'express';
import Variable from '../model/variable';
import bodyParser from 'body-parser';

export default({ config, db }) => {
  let api = Router();

  // '/v1/variable' - GET all test accts
  api.get('/', (req, res) => {
    Variable.find({}, (err, variables) => {
      if (err) {
        res.send(err);
      }
      res.json(variables);
    });
  });

  // '/v1/variable/:id' - GET a specific test acct
  api.get('/:id', (req, res) => {
    Variable.findById(req.params.id, (err, variable) => {
      if (err) {
        res.send(err);
      }
      res.json(variable);
    });
  });

  // '/v1/variable/add' - POST - add a test acct
  api.post('/add', (req, res) => {
    let newVariable = new Variable();
    newVariable.name = req.body.name;
    newVariable.content = req.body.content;
    newVariable.contentType = req.body.contentType;
    newVariable.isSecret = req.body.isSecret;

    newVariable.save(function(err) {
      if (err) {
        res.send(err);
      }else{
        res.json({ message: 'Variable saved successfully' });
      }
    });
  });

  // '/v1/variable/:id' - DELETE - remove a test acct
  api.delete('/:id', (req, res) => {
    Variable.remove({
      _id: req.params.id
    }, (err, variable) => {
      if (err) {
        res.send(err);
      }
        res.json({message: "Variable Successfully Removed"});
      });
  });

  // '/v1/variable/:id' - PUT - update an existing record
  api.put('/:id', (req, res) => {
    Variable.findById(req.params.id, (err, variable) => {
      if (err) {
        res.send(err);
      }
      variable.name = req.body.name;
      variable.content = req.body.content;
      variable.contentType = req.body.contentType;
      variable.isSecret = req.body.isSecret;

      variable.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Variable info updated' });
      });
    });
  });

  return api;
}
