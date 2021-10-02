import { getCustomRepository } from "typeorm";
import { AppError } from "../middlewares/AppError";
import { ProductsRepository } from "../repositories/ProductsRepositories";


interface IRequest {
    id: string;
    name: string;
    price: number;
    quantityInStock: number;
}

export class UpdateProductService {

    async execute(data: IRequest): Promise<void> {

        const { id, name } = data;

        const nameIsEmpty = name.length <= 0;

        if(nameIsEmpty) throw new AppError("Name not be empty!");

        const productsRepository = getCustomRepository(ProductsRepository);

        await productsRepository.update(
            { id },
            data
        );
    }
}