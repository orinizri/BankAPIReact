const express = require('express');
const app = express();
const axios = require("axios");
const fs = require("fs")
const path = require("path")


const loadData = () => {
    let reqPath = path.join(__dirname, '../' + 'bankData.json');
    const rawData = fs.readFileSync(reqPath)
    try {
        const dataBuffer = rawData.toString()
        const dataJSON = JSON.stringify(dataBuffer)
        return JSON.parse(dataJSON)
    } catch {
        return []
    }
}

const saveData = (data) => {
    let reqPath = path.join(__dirname, '../' + 'bankData.json');
    const dataJSON = JSON.stringify(data)
    fs.writeFileSync(reqPath, dataJSON)
}

const getAllClients = (req, res) => {
    const data = loadData()
    res.send(data)
}
const getClientByPassportId = (req, res) => {
    const { id } = req.params;
    const parsedData = JSON.parse(loadData())
    const client = parsedData.find(client => client.passport_id === id)
    if (client) {
        return res.send(JSON.stringify(client))
    } else {
        throw Error("Client does not exist")
    }
}

const addClient = (req, res) => {
    const { id } = req.params;
    const {credit, deposits} = req.query;
    const parsedData = JSON.parse(loadData())
    const client = parsedData.find(client => client.passport_id === id)
    if (!client) {
        parsedData.push({
            passport_id: id,
            credit: credit? +credit : 0,
            deposits: deposits? +deposits : 0,
        })
        saveData(parsedData)
        return res.send(JSON.stringify(parsedData))
    } else {
        throw Error("Client already exists")
    }
}

const withdrawal = (req, res) => {
    const { id } = req.params;
    const { amount } = req.query;
    const parsedData = JSON.parse(loadData())
    const client = parsedData.find(client => client.passport_id === id);
    clientIndex = parsedData.findIndex(client => client.passport_id = id);
    if (client) {
        if (+client.deposits - (+amount) >= 0) {
            const dataCopy = [...parsedData];
            client.deposits = +client.deposits - (+amount);
            dataCopy[clientIndex] = client;
            saveData(dataCopy);
            return res.send(JSON.stringify(client))
        } else {
            throw Error(`Not enought deposits (${client.deposits}) for the withdrawal (${amount})`)
        }
    } else {
        throw Error(`client's passpost_id (${id}) does not exist`)
    }
}

const deposit = (req, res) => {
    const { id } = req.params;
    const { amount } = req.query;
    const parsedData = JSON.parse(loadData())
    const client = parsedData.find(client => client.passport_id === id);
    clientIndex = parsedData.findIndex(client => client.passport_id = id);
    if (client) {
        if (amount <= 0) {
            throw Error(`amount (${amount}) must be positive`)
        }
        const dataCopy = [...parsedData];
        client.deposits = +client.deposits + (+amount);
        dataCopy[clientIndex] = client;
        saveData(dataCopy);
        return res.send(JSON.stringify(client))
    } else {
        throw Error (`client's passpost_id (${id}) does not exist`)
    }
}
const updateCredit = (req, res) => {
    const { id } = req.params;
    const { amount } = req.query;
    const parsedData = JSON.parse(loadData())
    const client = parsedData.find(client => client.passport_id === id)
    clientIndex = parsedData.findIndex(client => client.passport_id = id)
    if (client) {
        if (amount === client.credit) {
            throw Error(`Client's financial state is up to date (id: ${id}, credit: ${client.credit})`)
        } else if (amount > 0) {
            const dataCopy = [...parsedData];
            client.credit = amount;
            dataCopy[clientIndex] = client;
            saveData(dataCopy);
            return res.send(JSON.stringify(client))
        } else {
            throw Error(`Amount (${amount}) must be positive`)
        }
    } else {
        throw Error(`Client's passpost_id (${id}) does not exist`)
    }
}

const transfer = (req, res) => {
    const parsedData = JSON.parse(loadData())
    const { sender, receiver, amount } = req.query;

    const senderClient = parsedData.find(client => client.passport_id === sender)
    const receiverClient = parsedData.find(client => client.passport_id === receiver)

    if (!senderClient || !receiverClient) {
        throw Error (`One of client's passpost_id (sender: ${sender}, receiver: ${receiver}) does not exist`)
    } else {
        if ((+senderClient.deposits) - (+amount) >= 0) {
            const dataCopy = [...parsedData];
            senderIndex = parsedData.findIndex(client => client.passport_id = sender)
            receiverIndex = parsedData.findIndex(client => client.passport_id = receiver)
            receiverClient.deposits = +receiverClient.deposits + (+amount)
            senderClient.deposits = +senderClient.deposits - (+amount)
            dataCopy[senderIndex] = senderClient;
            dataCopy[receiverIndex] = receiverClient;
            saveData(dataCopy);
            return res.send([senderClient, receiverClient])
        } else {
            throw Error (`Sender's amount (${amount}) is higher than their deposits (${senderClient.deposits})`)
        }
    }
}

module.exports = {
    getAllClients,
    getClientByPassportId,
    addClient,
    transfer,
    withdrawal,
    deposit,
    updateCredit
}