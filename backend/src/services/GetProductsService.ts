import { getCustomRepository } from "typeorm";
import { Product } from "../entities/Product";
import { ProductsRepository } from "../repositories/ProductsRepositories";


export class GetProductsService {

    async execute(): Promise<Product[]> {

        const productsRepositories = getCustomRepository(ProductsRepository);

        const products = await productsRepositories.find();

        return products;
    }
}