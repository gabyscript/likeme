
const postController = require('../controllers/postController');


const express = require('express');
const router = express.Router();

router.get('/', postController.show)

router.post('/', postController.create)


module.exports = router;