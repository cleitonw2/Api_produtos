import { Request, Response } from "express";
import { DeleteProductService } from "../services/DeleteProductService";


export class DeleteProductController {

    async handle(
        request: Request,
        response: Response
    ): Promise<Response>  {

        const { id } = request.params;

        const deleteProduct = new DeleteProductService();

        await deleteProduct.execute(id);

        return response.json();
    }
}