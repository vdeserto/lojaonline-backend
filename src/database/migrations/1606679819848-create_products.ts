import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProducts1606679819848 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table(
            {
                name: 'products',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        unsigned: true,
                        isPrimary: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'brand',
                        type: 'varchar',
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                    },    
                    {
                        name: 'description',
                        type: 'text',
                    },
    
                    {
                        name: 'price',
                        type: 'decimal',
                        precision: 2,
                    },
    
                    {
                        name: 'image',
                        type: 'text'
                    }
    
                ],
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products')
    }

}
