import { getCustomRepository } from "typeorm";
import { ProductsRepository } from "../repositories/ProductsRepositories";


export class DeleteProductService {

    async execute(id: string): Promise<void> {

        const productsRepositories = getCustomRepository(ProductsRepository);

        await productsRepositories.delete({ id });
    }
}