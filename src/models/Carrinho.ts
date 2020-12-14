import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
@Unique('UK_cookie',['product_id', 'user_cookie'])
@Entity('carrinho') //TypeORM entende que é para o tabela products
export default class Carrinho {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    product_id: number;

    @Column({default: 1})
    quantidade: number;

    @Column()
    user_cookie: string;
}