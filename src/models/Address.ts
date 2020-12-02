import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('address') //TypeORM entende que é para o tabela products
export default class Address {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    cep: string;

    @Column()
    logradouro: string;
    
    @Column()
    bairro: string;
    
    @Column()
    numero: string;

    @Column()
    localidade: string;

    @Column()
    uf: string;

    @Column()
    complemento: string;

    @Column()
    cookie: string;

}