import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserModel1619983589216 implements MigrationInterface {
    name = 'AddUserModel1619983589216'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "User" ("id" int NOT NULL IDENTITY(1,1), "email" varchar(255) NOT NULL, "password" varchar(255) NOT NULL, "created" datetime NOT NULL CONSTRAINT "DF_f3b12777bcfb2c7bf8be3bb946b" DEFAULT GETDATE(), "tokenVersion" int NOT NULL CONSTRAINT "DF_be250a4dd8530557d5c960d7f2c" DEFAULT 0, "verified" bit NOT NULL CONSTRAINT "DF_fb12b4d6c684593249576ff215a" DEFAULT 0, CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "User"`);
    }

}
