const express = require('express')
const router = express.Router()
const LoginRouter = require('./LoginRoutes')
const MainRouter = require('./MainRoutes')
const PeliculasRouter = require('./PeliculasRoutes')
const PostRouter = require('./PostRoutes')


router.use('/login',LoginRouter)
router.use('/main',MainRouter)
router.use('/pelicula',PeliculasRouter)
router.use('/post',PostRouter)

module.exports = router
