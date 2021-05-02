import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import { Article } from "../../../../Repositories/ArticleRepository";

export default async (fastify: FastifyInstance): Promise<void> => {
	fastify.get("/", {
		preValidation: [fastify.restrict],
		schema: {
			response: {
				200: {
					type: "object",
					properties: {
						ok: { type: "boolean" },
						article: {
							type: "array",
							properties: {
								id: { type: "number" },
								title: { type: "string" },
								excerpt: { type: "string" },
								body: { type: "string" },
								created: { type: "string" }
							}
						}
					}
				}
			}
		}
	}, async (_: FastifyRequest, res: FastifyReply) => {
		res.statusCode = 200;
		return {
			ok: true,
			article: await Article.GetAll()
		};
	});
};