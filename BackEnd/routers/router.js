var express= require("express");
var router = express.Router();
const cors = require('cors');

const userController = require('../controllers/users.controllers'); // adjust the path as necessary

// Routes
router.use(cors());

router.post("/user/create", userController.createUser);
router.post("/user/authenticate", cors(), userController.authenticateUser);
router.put('/user/edit/:email', cors(), userController.editUser);
router.delete('/user/delete/:email', userController.deleteUser);
router.get('/user/getAll', userController.getAllUsers);
router.get('/user/get/:email', userController.getUserByEmail);

router.options('/user/edit/:email', cors());

module.exports = router;
