import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Product} from './Product'

@Entity()
export class Brand {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @OneToMany( type => Product, product => product.brands)
    products: Product[];
}