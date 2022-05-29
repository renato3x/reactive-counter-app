const { Router } = require('express')
const IndexController = require('../controllers/IndexController')

const router = Router()

router.get('/', IndexController.index)

module.exports = router