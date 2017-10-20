import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany} from "typeorm";
import {Category} from './Category'
import { User } from "./User";
import { Product } from "./Product";

@Entity()
export class Order {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
        length: 50
    })
    ref: string;

    @Column("date")
    dateorder: Date;
    

    @ManyToOne(type => User, user => user.orders)
    user: User;

    @ManyToOne(type => Category, category => category.products)
    category: Category;

    @ManyToMany(type => Product, product => product.orders)
    products: Product[];
}
