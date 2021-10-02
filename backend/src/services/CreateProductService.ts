import { validate } from "class-validator";
import { getCustomRepository } from "typeorm";
import { Product } from "../entities/Product";
import { AppError } from "../middlewares/AppError";
import { ProductsRepository } from "../repositories/ProductsRepositories";

interface IRequest {
    name: string;
    price: number;
    quantityInStock: number;
}

export class CreateProductService {

    async execute(data: IRequest): Promise<Product> {

        const productsRepository = getCustomRepository(ProductsRepository);

        const product = productsRepository.create({
            ...data
        });

        const errors = await validate(product);

        const existsErrors = errors.length > 0;

        if (existsErrors) throw new AppError(errors);

        await productsRepository.save(product);

        return product;
    }
}