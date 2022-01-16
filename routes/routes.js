const express = require("express");
const fs = require("fs")
const bankRouter = express.Router();
const { 
    getClientByPassportId,
    getAllClients, 
    withdrawal,
    deposit,
    updateCredit, 
    addClient, 
    transfer
} = require('../controllers/controller')


bankRouter.get("/", getAllClients);
bankRouter.get("/users/:id", (req,res) => {
    try {
        res.status(200).send(getClientByPassportId(req, res))
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
});

bankRouter.post("/users/:id", (req,res) => {
    try {
        res.status(200).send(addClient(req, res))
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
})

bankRouter.put("/users/withdrawal/:id", (req,res) => {
    try {
        res.status(200).send(withdrawal(req, res))
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
})
bankRouter.put("/users/deposit/:id", (req,res) => {
    try {
        res.status(200).send(deposit(req, res))
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
})
bankRouter.put("/users/updateCredit/:id", (req,res) => {
    try {
        res.status(200).send(updateCredit(req, res))
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
})

bankRouter.put("/transfer/", (req,res) => {
    try {
        res.status(200).send(transfer(req, res))
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
})

module.exports = bankRouter;

