const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController.js');

router.post('/', UserController.insert)

// router.route("/:id")
//     .get(topicController.getDetail)
//     .put(topicController.update)
//     .delete(topicController.delete)
//     .patch(topicController.voteCount)

module.exports = router;