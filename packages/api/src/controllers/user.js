const services = require('../utils/token');
const { User } = require('models');
const multer = require('multer');
import { Redirect } from 'react-router'




function signUp(req, res) {
    const users = new User({
        userName: req.body.userName,
        realName: req.body.realName,
        email: req.body.email,
        password: req.body.password,
    })



    console.log("dentro de singUP")
    users.save(err => {
        console.log("dentro de Guardar")
        if (err) {
            return res.status(500).send({ message: "Error al Crear el Usuario" });
            console.log("error")
        } else {
            return res.status(201).send({ token: services.createToken(users) });
            console.log("creado")
        }
    })
}


function signIn(req, res) {
    //const {email,password} = req.body
    /*
     console.log("En signIn")
     console.log({email: req.body.email})
     console.log("ahora toca Fin")
     User.find({email: req.body.email}),(err,user) =>{
         console.log("Buscando Usuario")
         if(err){
             console.log(err)
             console.log("Error")
             return res.status(500).send({message: err})
         }else if(!user){
             return res.status(500).send({message: "No existe el usuario"})
             console.log("Usuario Encontrado")
         }else{
             user.isCorrectPassword(password, (err,result) => {
                 if(err){
                     return res.status(500).send({message: "Error en la Auntenticacion"})
                 }else if(result){
                     res.status(200).send('Usuario Aunteticado')
                     console.log("Usuario Encontrado")
                 }
             });
         }
         
     }
     */
    User.findOne({ email: req.body.email, password: req.body.password }, (err, User) => {

        if (err) return res.status(500).send({
            message: err
        })
        if (!User) return res.status(404).send({
            message: "No existe el usuario"
        }

        )

        console.log("En signIn")
        req.user = User


        res.status(200).send({
            message: "Te has logueado correctamente",
            token: services.createToken(User),


        })
       
           

            
        
        console.log(User);

    })


}



module.exports = {
    signIn,
    signUp
}