import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import { Article } from "../../../../Repositories/ArticleRepository";

interface IRequest {
	title: string,
	excerpt: string,
	body: string
}

export default async (fastify: FastifyInstance): Promise<void> => {
	fastify.post("/", {
		preValidation: [fastify.restrict],
		schema: {
			body: {
				type: "object",
				required: ["title", "excerpt", "body"],
				properties: {
					title: { type: "string" },
					excerpt: { type: "string" },
					body: { type: "string" },
				}
			},
			response: {
				201: {
					type: "object",
					properties: {
						ok: { type: "boolean" },
						article: {
							type: "object",
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
	}, async (request: FastifyRequest, response: FastifyReply) => {
		response.statusCode = 201;
		return {
			ok: true,
			article: await Article.Insert(request.body as IRequest)
		};
	});
};