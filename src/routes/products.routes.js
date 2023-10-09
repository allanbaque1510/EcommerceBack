import { Router } from "express";
import { getProducts,createProducts } from "../controller/products.controller.js";
const router = Router()
router.get('/products',getProducts)
router.post('/products',createProducts)
router.put('/products',getProducts)
router.delete('/products',getProducts)

export default router