import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("User")
export class User extends BaseEntity {

	@PrimaryGeneratedColumn({ type: "int", name: "id" })
	id: number;

	@Column("varchar", { name: "email", nullable: false, unique: true, length: 255 })
	email: string;

	@Column("varchar", { name: "password", nullable: false, length: 255 })
	password: string;

	@Column("datetime", { name: "created", nullable: false, default: () => "GETDATE()" })
	created: Date;

	@Column("int", { name: "tokenVersion", nullable: false, default: 0 })
	tokenVersion: number;

	@Column("bit", { name: "verified", nullable: false, default: 0 })
	verified: boolean;
}