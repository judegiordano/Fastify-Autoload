import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface IArticle {
	title: string,
	excerpt: string,
	body: string,
}

@Entity("Article")
export class Article extends BaseEntity {

	@PrimaryGeneratedColumn({ type: "int", name: "id" })
	id: number;

	@Column("varchar", { name: "title", nullable: false, length: 255, unique: true })
	title: string;

	@Column("varchar", { name: "excerpt", nullable: false, length: 255 })
	excerpt: string;

	@Column("varchar", { name: "body", nullable: false, length: 255 })
	body: string;

	@Column("datetime", { name: "created", nullable: false, default: () => "GETDATE()" })
	created: Date;
}