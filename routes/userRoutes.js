const UserController = require('../controllers/userController');
const router = require('express').Router();
const jwtfile = require('../middleware/jwt');


router.post('/new',UserController.createUser);

router.get('/get',jwtfile.jwtVerify,UserController.getUsers);
router.patch('/update/:uid',jwtfile.jwtVerify,UserController.updateUser);
router.delete('/delete/:uid',jwtfile.jwtVerify,UserController.deleteUser);


module.exports= router;