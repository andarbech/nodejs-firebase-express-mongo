const express = require("express");

const { notFound } = require("../middlewares");
const { UserController } = require('../controllers');
const authMiddleware=require('../middlewares/auth')

const UserRouter = express.Router();
UserRouter.use(authMiddleware)

UserRouter.get("/", UserController.getUsers,authMiddleware);
UserRouter.get("/:idUser", UserController.getUser, notFound);
UserRouter.post("/", UserController.createUser);
UserRouter.put("/:idUser", UserController.updateUser, notFound);
UserRouter.delete("/:idUser", UserController.deleteUser, notFound);
UserRouter.delete("/", UserController.deleteUsers);

UserRouter.get("/:idUser/addresses", UserController.getUserAddresses);
UserRouter.get("/:idUser/addresses/:idAddress", UserController.getUserAddress);
UserRouter.post("/:idUser/addresses/", UserController.addUserAddress);
UserRouter.put(
  "/:idUser/addresses/:idAddress",
  UserController.updateUserAddress,
);
UserRouter.delete(
  "/:idUser/addresses/:idAddress",
  UserController.deleteUserAddress,
);
UserRouter.delete("/:id/addresses/", UserController.deleteUserAddresses);

UserRouter.use("/:id/addresses", notFound);
UserRouter.use("/", notFound);

module.exports = UserRouter;
