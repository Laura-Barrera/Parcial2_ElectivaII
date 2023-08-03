const express = require('express')

const router = express.Router()

const path = require('path')

router.get('/', (req,res) => res.sendFile(path.join(__dirname,'../views/index.html')))

router.get('/add', (req,res) => res.sendFile(path.join(__dirname,'../views/add.html')))
router.get('/view', (req,res) => res.sendFile(path.join(__dirname,'../views/view.html')))

module.exports = router