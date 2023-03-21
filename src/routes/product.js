import express from "express";
import { create, getAll, remove, update, get } from "../controller/product";

const router = express.Router();
router.get("/products", getAll);
router.get("/products/:id", get);
router.create("/products", create);
router.update("/products/:id", update);
router.delete("/products/:id", remove);
export default router;
