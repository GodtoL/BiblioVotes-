const express = require('express')
const router = express.Router()
const TagController = require('../controllers/TagController.js')

router.post("/", TagController.insertTag)

module.exports = router;