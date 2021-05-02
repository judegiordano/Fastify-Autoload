import { MigrationInterface, QueryRunner } from "typeorm";

export class Sync1619932413204 implements MigrationInterface {
	name = "Sync1619932413204"

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query("CREATE TABLE \"Article\" (\"id\" int NOT NULL IDENTITY(1,1), \"title\" varchar(255) NOT NULL, \"excerpt\" varchar(255) NOT NULL, \"body\" varchar(255) NOT NULL, \"created\" datetime NOT NULL CONSTRAINT \"DF_1ed7f07e1c34469629371cb1647\" DEFAULT GETDATE(), CONSTRAINT \"UQ_27dd5d41c68159bb8a314d19bb3\" UNIQUE (\"title\"), CONSTRAINT \"PK_88f529840cddf90d750f91dee86\" PRIMARY KEY (\"id\"))");
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query("DROP TABLE \"Article\"");
	}

}
