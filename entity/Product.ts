import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable} from "typeorm";
import {Brand} from './Brand';
import {Category} from './Category'
import { Order } from "./Order";
import { Basket } from "./Basket";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50
    })
    ref: string;

    @Column({
        length: 100
    })
    name: string;

    @Column("text")
    description: string;

    @Column()
    price: number;

    @Column("date")
    dateinscription: Date;

    @Column()
    isPublished: boolean;

    @ManyToOne(type => Brand, brand => brand.products)
    brands: Brand;

    @ManyToOne(type => Category, category => category.products)
    category: Category;

    @ManyToMany(type => Basket, basket => basket.products)
    @JoinTable()
    baskets: Category;

    @ManyToMany(type => Order, order => order.products)
    @JoinTable()
    orders: Order[];
}