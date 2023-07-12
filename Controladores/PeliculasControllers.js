const myConnection = require('../database/config')
const pool = require('../database/configpg')

const agregarPelicula =  (request,response) =>{
      myConnection.query(
        `insert into persona(title,genre,year,director,country,format) 
        values (?,?,?,?,?,?) `,
        [
            request.body.title,
            request.body.genre,
            request.body.year,
            request.body.director,
            request.body.country,
            request.body.format
        ],
        function(err, results) {
           if(err){
            response.render('pelicula/error',{locals:err})
           }else{
            data = {
                title:request.body.title,
                genre:request.body.genre,
                year:request.body.year,
                director:request.body.director,
                country:request.body.country,
                format:request.body.format

            }
            response.render('pelicula/recibeDatos',{locals:data})
           } 
        }
      );

}

const formulario = (request,response) =>{
    response.render('pelicula/addpeliculas')
}
const allUsers = async (request,response) =>{
    console.log(request.body)
    myConnection.query(
        `select id, username from users `,
        function(err, results) {
           if(err){
            response.render('persona/error',{locals:err})
           }else{
            data = {
                message:"Consulta exitosa",
                users : results
            }
            console.log(data)
            response.render('app/users',{locals:data})
           } 
        }
      );

}
const addUser =  (request,response) =>{
    myConnection.query(
        `insert into users(username,password) 
        values (?,?) `,
        [
            request.body._username,
            request.body._password,
        ],
        function(err, results) {
           if(err){
            response.render('persona/error',{locals:err})
           }else{
            respuesta = {
                message:"Usuario agregado"
            }
            response.json(respuesta)
           } 
        }
      );

}
const deleteUser =  (request,response) =>{
     myConnection.query(
        `delete from users where id = ? `,
        [
            request.body._id,
        ],
        function(err, results) {
           if(err){
            response.render('persona/error',{locals:err})
           }else{
            respuesta = {
                message:"Usuario eliminado"
            }
            response.json(respuesta)
           } 
        }
      );

}

module.exports = {
    agregarPelicula,
    formulario,
    allUsers,
    addUser,
    deleteUser
}
