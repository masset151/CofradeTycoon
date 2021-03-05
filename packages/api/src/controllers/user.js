const services = require('../utils/token');
const { User } = require('models');
const multer = require('multer');




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
    User.find({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).send({
            message: err
        })
        if (!User) return res.status(404).send({
            message: "No existe el usuario"
        })

        console.log("En signIn")
        req.user = user
        res.status(200).send({
            message: "Te has logueado correctamente",
            token: services.createToken(user)



        })


    })
}



module.exports = {
    signIn,
    signUp
}