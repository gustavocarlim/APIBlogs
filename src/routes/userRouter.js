const router = require('express').Router();
const { userController } = require('../controllers');
const { verifyToken } = require('../middlewares/tokenAuth');
const { userValidateDisplayAndEmail, 
  userValidatePswdAndExists } = require('../middlewares/validateUser');

router.post('/', userValidateDisplayAndEmail, userValidatePswdAndExists, userController.postUser);
router.get('/', verifyToken, userController.getAllUsers);
module.exports = router;