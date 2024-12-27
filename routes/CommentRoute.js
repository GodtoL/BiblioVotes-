const express = require('express')
const router = express.Router()
const CommentController = require('../controllers/CommentController.js')

router.post("/", CommentController.insertComment)

module.exports = router;