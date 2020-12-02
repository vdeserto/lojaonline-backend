import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUserAddress1606872831948 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'address',
            columns: [
                {
                    name: 'cep',
                    type: 'varchar'
                },
                {
                    name: 'logradouro',
                    type: 'varchar'
                },
                {
                    name: 'complemento',
                    type: 'varchar'
                },
                {
                    name: 'bairro',
                    type: 'varchar'
                },
                {
                    name: 'numero',
                    type: 'varchar'
                },
                {
                    name: 'localidade',
                    type: 'varchar'
                },
                {
                    name: 'uf',
                    type: 'varchar'
                },
                {
                    name: 'cookie',
                    type: 'text'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('address')
    }

}
