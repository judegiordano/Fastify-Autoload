import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import { Article } from "../../../Repositories/ArticleRepository";

interface IRequest {
	id: number
}

export default async (fastify: FastifyInstance): Promise<void> => {
	fastify.get("/:id", {
		preValidation: [fastify.restrict],
		schema: {
			params: {
				type: "object",
				required: ["id"],
				properties: {
					id: { type: "number" }
				}
			},
			response: {
				200: {
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
		const { id } = request.params as IRequest;
		response.statusCode = 200;
		return {
			ok: true,
			article: await Article.GetById(id)
		};
	});

	fastify.delete("/:id", {
		preValidation: [fastify.restrict],
		schema: {
			params: {
				type: "object",
				required: ["id"],
				properties: {
					id: { type: "number" }
				}
			},
			response: {
				200: {
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
		const { id } = request.params as IRequest;
		response.statusCode = 200;
		return {
			ok: true,
			article: await Article.DeleteById(id)
		};
	});
};