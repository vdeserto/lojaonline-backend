import {Entity, Column, PrimaryGeneratedColumn, Unique} from 'typeorm'
@Unique('UK_user',['name', 'lastName', 'login'])
@Entity('users') //TypeORM entende que é para o tabela products
export default class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    login: string;

    @Column()
    password: string;
}