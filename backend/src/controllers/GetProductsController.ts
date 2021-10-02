import { Request, Response } from "express";
import { Product } from "../entities/Product";
import { GetProductsService } from "../services/GetProductsService";


export class GetProductsController {

    async handle(
        request: Request,
        response: Response
    ): Promise<Response<Product[]>> {

        const getPoruducts = new GetProductsService();

        const products = await getPoruducts.execute();

        return response.json(products);
    }
}