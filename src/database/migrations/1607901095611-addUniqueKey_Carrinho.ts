import {MigrationInterface, QueryRunner} from "typeorm";

export class addUniqueKeyCarrinho1607901095611 implements MigrationInterface {
    name = 'addUniqueKeyCarrinho1607901095611'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_carrinho" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "product_id" integer NOT NULL, "user_cookie" varchar NOT NULL, "quantidade" integer NOT NULL DEFAULT (1))`);
        await queryRunner.query(`INSERT INTO "temporary_carrinho"("id", "product_id", "user_cookie", "quantidade") SELECT "id", "product_id", "user_cookie", "quantidade" FROM "carrinho"`);
        await queryRunner.query(`DROP TABLE "carrinho"`);
        await queryRunner.query(`ALTER TABLE "temporary_carrinho" RENAME TO "carrinho"`);
        await queryRunner.query(`CREATE TABLE "temporary_users" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "lastName" varchar NOT NULL, "login" varchar NOT NULL, "password" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_users"("id", "name", "lastName", "login", "password") SELECT "id", "name", "lastName", "login", "password" FROM "users"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`ALTER TABLE "temporary_users" RENAME TO "users"`);
        await queryRunner.query(`CREATE TABLE "temporary_address" ("cep" varchar NOT NULL, "logradouro" varchar NOT NULL, "complemento" varchar NOT NULL, "bairro" varchar NOT NULL, "numero" varchar NOT NULL, "localidade" varchar NOT NULL, "uf" varchar NOT NULL, "cookie" text NOT NULL, "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_address"("cep", "logradouro", "complemento", "bairro", "numero", "localidade", "uf", "cookie") SELECT "cep", "logradouro", "complemento", "bairro", "numero", "localidade", "uf", "cookie" FROM "address"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`ALTER TABLE "temporary_address" RENAME TO "address"`);
        await queryRunner.query(`CREATE TABLE "temporary_address" ("cep" varchar NOT NULL, "logradouro" varchar NOT NULL, "complemento" varchar NOT NULL, "bairro" varchar NOT NULL, "numero" varchar NOT NULL, "localidade" varchar NOT NULL, "uf" varchar NOT NULL, "cookie" varchar NOT NULL, "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_address"("cep", "logradouro", "complemento", "bairro", "numero", "localidade", "uf", "cookie", "id") SELECT "cep", "logradouro", "complemento", "bairro", "numero", "localidade", "uf", "cookie", "id" FROM "address"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`ALTER TABLE "temporary_address" RENAME TO "address"`);
        await queryRunner.query(`CREATE TABLE "temporary_carrinho" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "product_id" integer NOT NULL, "user_cookie" varchar NOT NULL, "quantidade" integer NOT NULL DEFAULT (1), CONSTRAINT "UK_cookie" UNIQUE ("product_id", "user_cookie"))`);
        await queryRunner.query(`INSERT INTO "temporary_carrinho"("id", "product_id", "user_cookie", "quantidade") SELECT "id", "product_id", "user_cookie", "quantidade" FROM "carrinho"`);
        await queryRunner.query(`DROP TABLE "carrinho"`);
        await queryRunner.query(`ALTER TABLE "temporary_carrinho" RENAME TO "carrinho"`);
        await queryRunner.query(`CREATE TABLE "temporary_users" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "lastName" varchar NOT NULL, "login" varchar NOT NULL, "password" varchar NOT NULL, CONSTRAINT "UK_user" UNIQUE ("name", "lastName", "login"))`);
        await queryRunner.query(`INSERT INTO "temporary_users"("id", "name", "lastName", "login", "password") SELECT "id", "name", "lastName", "login", "password" FROM "users"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`ALTER TABLE "temporary_users" RENAME TO "users"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME TO "temporary_users"`);
        await queryRunner.query(`CREATE TABLE "users" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "lastName" varchar NOT NULL, "login" varchar NOT NULL, "password" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "users"("id", "name", "lastName", "login", "password") SELECT "id", "name", "lastName", "login", "password" FROM "temporary_users"`);
        await queryRunner.query(`DROP TABLE "temporary_users"`);
        await queryRunner.query(`ALTER TABLE "carrinho" RENAME TO "temporary_carrinho"`);
        await queryRunner.query(`CREATE TABLE "carrinho" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "product_id" integer NOT NULL, "user_cookie" varchar NOT NULL, "quantidade" integer NOT NULL DEFAULT (1))`);
        await queryRunner.query(`INSERT INTO "carrinho"("id", "product_id", "user_cookie", "quantidade") SELECT "id", "product_id", "user_cookie", "quantidade" FROM "temporary_carrinho"`);
        await queryRunner.query(`DROP TABLE "temporary_carrinho"`);
        await queryRunner.query(`ALTER TABLE "address" RENAME TO "temporary_address"`);
        await queryRunner.query(`CREATE TABLE "address" ("cep" varchar NOT NULL, "logradouro" varchar NOT NULL, "complemento" varchar NOT NULL, "bairro" varchar NOT NULL, "numero" varchar NOT NULL, "localidade" varchar NOT NULL, "uf" varchar NOT NULL, "cookie" text NOT NULL, "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`);
        await queryRunner.query(`INSERT INTO "address"("cep", "logradouro", "complemento", "bairro", "numero", "localidade", "uf", "cookie", "id") SELECT "cep", "logradouro", "complemento", "bairro", "numero", "localidade", "uf", "cookie", "id" FROM "temporary_address"`);
        await queryRunner.query(`DROP TABLE "temporary_address"`);
        await queryRunner.query(`ALTER TABLE "address" RENAME TO "temporary_address"`);
        await queryRunner.query(`CREATE TABLE "address" ("cep" varchar NOT NULL, "logradouro" varchar NOT NULL, "complemento" varchar NOT NULL, "bairro" varchar NOT NULL, "numero" varchar NOT NULL, "localidade" varchar NOT NULL, "uf" varchar NOT NULL, "cookie" text NOT NULL)`);
        await queryRunner.query(`INSERT INTO "address"("cep", "logradouro", "complemento", "bairro", "numero", "localidade", "uf", "cookie") SELECT "cep", "logradouro", "complemento", "bairro", "numero", "localidade", "uf", "cookie" FROM "temporary_address"`);
        await queryRunner.query(`DROP TABLE "temporary_address"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME TO "temporary_users"`);
        await queryRunner.query(`CREATE TABLE "users" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "lastName" varchar NOT NULL, "login" varchar NOT NULL, "password" varchar NOT NULL, CONSTRAINT "UQ_b79c64164706ac953b128fa05d7" UNIQUE ("name", "lastName", "login"))`);
        await queryRunner.query(`INSERT INTO "users"("id", "name", "lastName", "login", "password") SELECT "id", "name", "lastName", "login", "password" FROM "temporary_users"`);
        await queryRunner.query(`DROP TABLE "temporary_users"`);
        await queryRunner.query(`ALTER TABLE "carrinho" RENAME TO "temporary_carrinho"`);
        await queryRunner.query(`CREATE TABLE "carrinho" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "product_id" integer NOT NULL, "user_cookie" varchar NOT NULL, "quantidade" integer NOT NULL DEFAULT (1), CONSTRAINT "UQ_0110a8e4c283d20bff721e6e5c3" UNIQUE ("product_id", "user_cookie"))`);
        await queryRunner.query(`INSERT INTO "carrinho"("id", "product_id", "user_cookie", "quantidade") SELECT "id", "product_id", "user_cookie", "quantidade" FROM "temporary_carrinho"`);
        await queryRunner.query(`DROP TABLE "temporary_carrinho"`);
    }

}
