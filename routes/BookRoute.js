const express = require('express')
const router = express.Router()
const BookController = require('../controllers/BookController.js')

router.get("/", BookController.getAllBooks)
router.post("/", BookController.insertBook)
router.route("/:id")
    .delete(BookController.deleteBook)

module.exports = router;