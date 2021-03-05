const { Router } = require('express');
const User = require('../../../models/src/user')

const users = require('./users');
const UsersCTRO = require('../controllers/user')
const router = Router();
const auth = require('../middlewares/auth');
const { json } = require('body-parser');


router.use('/users', users);

//router.post('/registro', UsersCTRO.signUp)
//api.post('/login',UsersCTRO.signIn)

router.get('/private', auth.isAuth, function (req, res) {
    res.status(200).send({ message: 'acceso autorizado' })
})

/*router.post('/registro', function (req, res) {
    UsersCTRO.signUp()
});*/

/*router.get('/usuarios',  async (req, res) => {
    const usuarios = await User.find({})
    console.log(usuarios)
   res.render('index',{
       usuarios
   })
})

*/

router.post('/registro', UsersCTRO.signUp)
router.post('/login', UsersCTRO.signIn)



module.exports = router;
