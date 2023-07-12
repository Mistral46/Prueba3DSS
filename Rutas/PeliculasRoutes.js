const express = require('express')
const router = express.Router()
const pelicula = require('../controllers/PeliculaController')
const persona = require('../controllers/PeliculaController')
const auth = require('../middleware/authMiddleware')

router.get('/addpelicula',pelicula.formulario)
router.post('/agregarPelicula',pelicula.agregarPelicula)
router.post('/allusers', auth.authenticate ,persona.allUsers)
router.post('/adduser', auth.authenticate ,persona.addUser) 
router.post('/deleteuser', auth.authenticate ,persona.deleteUser) 

module.exports = router
