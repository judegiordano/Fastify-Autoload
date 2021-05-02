/* eslint-disable @typescript-eslint/no-unused-vars */
import { FastifyInstance, FastifyRequest } from "fastify";

declare module "fastify" {
	export interface FastifyInstance {
		authenticate(): void;
	}
}
