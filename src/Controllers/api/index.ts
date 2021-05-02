import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export default async (fastify: FastifyInstance): Promise<void> => {
	fastify.get("/", {
		preValidation: [fastify.restrict]
	}, async (_: FastifyRequest, res: FastifyReply) => {
		res.statusCode = 200;
		return {
			ping: "pong"
		};
	});
};