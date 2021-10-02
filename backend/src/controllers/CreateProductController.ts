import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";


export class CreateProductController {

    async handle(
        request: Request,
        response: Response,
    ): Promise<Response> {

        const { name, price, quantityInStock } = request.body;

        const createProduct = new CreateProductService();

        await createProduct.execute({
            name,
            price: Number(price),
            quantityInStock: Number(quantityInStock)
        });

        return response.status(201).json();
    }
}