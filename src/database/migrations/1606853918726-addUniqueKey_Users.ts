import {MigrationInterface, QueryRunner} from "typeorm";

export class addUniqueKeyUsers1606853918726 implements MigrationInterface {
    name = 'addUniqueKeyUsers1606853918726'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_carrinho" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "product_id" integer NOT NULL, "user_cookie" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_carrinho"("id", "product_id", "user_cookie") SELECT "id", "product_id", "user_cookie" FROM "carrinho"`);
        await queryRunner.query(`DROP TABLE "carrinho"`);
        await queryRunner.query(`ALTER TABLE "temporary_carrinho" RENAME TO "carrinho"`);
        await queryRunner.query(`CREATE TABLE "temporary_products" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "brand" varchar NOT NULL, "type" varchar NOT NULL, "description" varchar NOT NULL, "price" decimal(2) NOT NULL, "image" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_products"("id", "name", "brand", "type", "description", "price", "image") SELECT "id", "name", "brand", "type", "description", "price", "image" FROM "products"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`ALTER TABLE "temporary_products" RENAME TO "products"`);
        await queryRunner.query(`CREATE TABLE "temporary_users" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "lastName" varchar NOT NULL, "login" varchar NOT NULL, "password" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_users"("id", "name", "lastName", "login", "password") SELECT "id", "name", "lastName", "login", "password" FROM "users"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`ALTER TABLE "temporary_users" RENAME TO "users"`);
        await queryRunner.query(`CREATE TABLE "temporary_carrinho" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "product_id" integer NOT NULL, "user_cookie" varchar NOT NULL, CONSTRAINT "UK_session" UNIQUE ("product_id", "user_cookie"))`);
        await queryRunner.query(`INSERT INTO "temporary_carrinho"("id", "product_id", "user_cookie") SELECT "id", "product_id", "user_cookie" FROM "carrinho"`);
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
        await queryRunner.query(`CREATE TABLE "carrinho" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "product_id" integer NOT NULL, "user_cookie" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "carrinho"("id", "product_id", "user_cookie") SELECT "id", "product_id", "user_cookie" FROM "temporary_carrinho"`);
        await queryRunner.query(`DROP TABLE "temporary_carrinho"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME TO "temporary_users"`);
        await queryRunner.query(`CREATE TABLE "users" ("id" integer PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "lastName" varchar NOT NULL, "login" varchar NOT NULL, "password" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "users"("id", "name", "lastName", "login", "password") SELECT "id", "name", "lastName", "login", "password" FROM "temporary_users"`);
        await queryRunner.query(`DROP TABLE "temporary_users"`);
        await queryRunner.query(`ALTER TABLE "products" RENAME TO "temporary_products"`);
        await queryRunner.query(`CREATE TABLE "products" ("id" integer PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "brand" varchar NOT NULL, "type" varchar NOT NULL, "description" text NOT NULL, "price" decimal(2) NOT NULL, "image" text NOT NULL)`);
        await queryRunner.query(`INSERT INTO "products"("id", "name", "brand", "type", "description", "price", "image") SELECT "id", "name", "brand", "type", "description", "price", "image" FROM "temporary_products"`);
        await queryRunner.query(`DROP TABLE "temporary_products"`);
        await queryRunner.query(`ALTER TABLE "carrinho" RENAME TO "temporary_carrinho"`);
        await queryRunner.query(`CREATE TABLE "carrinho" ("id" integer PRIMARY KEY NOT NULL, "product_id" number NOT NULL, "user_cookie" text NOT NULL)`);
        await queryRunner.query(`INSERT INTO "carrinho"("id", "product_id", "user_cookie") SELECT "id", "product_id", "user_cookie" FROM "temporary_carrinho"`);
        await queryRunner.query(`DROP TABLE "temporary_carrinho"`);
    }

}
