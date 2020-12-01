import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1606680945973 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table(
            {
                name: 'users',
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
                        name: 'lastName',
                        type: 'varchar'
                    },
                    {
                        name: 'login',
                        type: 'varchar'
                    },
                    {
                        name: 'password',
                        type: 'varchar'
                    }

                ]
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
