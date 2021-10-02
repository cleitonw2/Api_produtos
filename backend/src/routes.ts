import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { DeleteProductController } from "./controllers/DeleteProductController";
import { GetProductByIdController } from "./controllers/GetProductByIdController";
import { GetProductsController } from "./controllers/GetProductsController";
import { UpdateProductController } from "./controllers/UpdateProductController";

const router = Router();

const createProduct = new CreateProductController();
const updateProduct = new UpdateProductController();
const getProducts = new GetProductsController();
const getProductById = new GetProductByIdController();
const deleteProduct = new DeleteProductController();

router.get("/api/v1/products", getProducts.handle);

router.get("/api/v1/products/:id", getProductById.handle);

router.post("/api/v1/products", createProduct.handle);

router.put("/api/v1/products/:id", updateProduct.handle);

router.delete("/api/v1/products/:id", deleteProduct.handle);

export { router };