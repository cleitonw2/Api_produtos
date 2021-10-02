import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  @IsNotEmpty()
  name: string;

  @Column("numeric")
  @IsNumber()
  price: number;

  @Column("numeric")
  @IsNumber()
  quantityInStock: number;
}