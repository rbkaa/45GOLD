const express = require ('express')
const routes = express.Router()
const UserController = require ("../controllers/userController")


routes.get("/", UserController.getAllUser)

routes.post("/login", UserController.postLogin )

routes.post("/register", UserController.registerUser)

routes.put("/users/:id", UserController.putUpdateUser)

routes.delete("/deleteuser/:id", UserController.deleteUser)

module.exports = routes