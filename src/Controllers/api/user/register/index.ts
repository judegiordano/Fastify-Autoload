import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import { Jwt } from "../../../../Helpers/Jwt";
import { ILogin, User } from "../../../../Repositories/UserRepository";

export default async (fastify: FastifyInstance): Promise<void> => {
	fastify.post("/", {
		preValidation: [fastify.restrict],
		schema: {
			body: {
				type: "object",
				properties: {
					email: { type: "string" },
					password: { type: "string" }
				}
			},
			response: {
				201: {
					type: "object",
					properties: {
						ok: { type: "boolean" },
						token: { type: "string" }
					}
				}
			}
		}
	}, async (request: FastifyRequest, response: FastifyReply) => {
		const user = await User.Register(request.body as ILogin);

		response.statusCode = 201;
		return {
			ok: true,
			token: Jwt.Sign(user)
		};
	});
};