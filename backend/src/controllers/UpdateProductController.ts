import { Request, Response } from "express";
import { UpdateProductService } from "../services/UpdateProductService";


export class UpdateProductController {

    async handle(
        request: Request,
        response: Response
    ): Promise<Response> {

        const { id } = request.params;
        const {name, price, quantityInStock} = request.body;

        const updateProduct = new UpdateProductService();

        await updateProduct.execute({
            id,
            name,
            price: Number(price),
            quantityInStock: Number(quantityInStock)
        });
        
        return response.status(201).json();
    }
}