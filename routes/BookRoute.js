const express = require('express')
const router = express.Router()
const BookController = require('../controllers/BookController.js')

router.get("/", BookController.getAllBooks)

module.exports = router;