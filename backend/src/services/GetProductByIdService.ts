import { getCustomRepository } from "typeorm";
import { Product } from "../entities/Product";
import { ProductsRepository } from "../repositories/ProductsRepositories";


export class GetProudctByIdService {

    async execute(id: string): Promise<Product | undefined> {

        const productsRepositories = getCustomRepository(ProductsRepository);

        const product = await productsRepositories.findOne({ id });

        return product;
    }
}