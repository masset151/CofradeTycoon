const {logger} = require('helpers')

const services = require('../utils/token')


function isAuth(req,res,next){
    logger.info("Hola")
    if(!req.headers.authorization){
        return res.status(403).send({message:"No tienes Permisos"});
    }

    const token = req.headers.authorization.split("")[1];

    services.decodeToken(token)
    .then(response => {
        req.user = response;
        next()
    })

    .catch(response =>{
        res.status(response.status)
    })


}

module.exports = {isAuth};