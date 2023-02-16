import express from "express";
const router = express.Router();
import controllers from "../controllers/";

const userController = controllers.UserController;

router.get("users/", userController.list);
router.get("users/:id", userController.get);
router.post("users/", userController.create);
router.put("users/:id", userController.update);
router.delete("users/:id", userController.delete);

export default router;