import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('products') //TypeORM entende que é para o tabela products
export default class Product {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @Column()
    type: string;

    @Column()
    description: string;

    @Column('decimal', {precision: 2})
    price: number;

    @Column()
    image: string;
}