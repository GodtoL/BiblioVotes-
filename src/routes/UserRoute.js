const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController.js');

router.post('/', UserController.insert)

router.route("/:id")
    .get(UserController.getUser)

module.exports = router;