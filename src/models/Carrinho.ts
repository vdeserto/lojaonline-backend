import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
@Unique('UK_session',['product_id', 'user_cookie'])
@Entity('carrinho') //TypeORM entende que é para o tabela products
export default class carrinho {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    product_id: number;

    @Column()
    user_cookie: string;
}