import express, { Response, Request } from "express";
const router = express.Router();
import controllers from "../controllers";

const userController = controllers.UserController;

router.get("/users/", userController.list);
router.get("/users/:id", userController.get);
router.post("/users/", userController.create);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.delete);

export default router;


// AL COMENZAR LA URL SE DEBE DE AGREGAR EL "/" AL COMIENZO
// EJEMPLO:

// CORRECTO 
// router.get("/resources", resourceController.list);

// INCORRECTO 
// router.get("resources", resourceController.list);