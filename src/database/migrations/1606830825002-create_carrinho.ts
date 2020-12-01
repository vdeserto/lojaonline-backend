import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCarrinho1606830825002 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'carrinho',
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'product_id',
                    type: 'number'
                },
                {
                    name:'user_cookie',
                    type: 'text'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('carrinho')
    }

}
