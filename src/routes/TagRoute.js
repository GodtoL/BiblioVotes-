const express = require('express')
const router = express.Router()
const TagController = require('../controllers/TagController.js')

router.post("/", TagController.insertTag)
router.get("/", TagController.getAllTags)

module.exports = router;