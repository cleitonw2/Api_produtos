import { Request, Response } from "express";
import { Product } from "../entities/Product";
import { GetProudctByIdService } from "../services/GetProductByIdService";


export class GetProductByIdController {

    async handle(
        request: Request,
        response: Response
    ): Promise<Response<Product>> {

        const { id } = request.params;

        const getProductById = new GetProudctByIdService();

        const product = await getProductById.execute(id);

        return response.json(product);
    }
}