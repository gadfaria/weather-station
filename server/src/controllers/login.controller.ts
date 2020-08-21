import { User } from "../entities/user";
import fastify from "fastify";
import { fastifyService } from "../services/fastify.service";
import ErrorCode from "../util/ErrorCodes";

interface loginController {
  login: fastify.RequestHandler;
  logout: fastify.RequestHandler;
}

let loginController: loginController = {
  login: async (request, reply) => {
    try {
      const { nickname } = request.body;

      const user: User = await User.findOne({
        nickname,
      });

      if (!user) {
        return reply
          .status(400)
          .send({ error: ErrorCode.User.NICKNAME_NOT_FOUND });
      }

      const token = fastifyService.jwtSign(user);

      reply.status(200).send({ ...user, token });
    } catch (error) {
      console.log(error);
      reply.status(500).send({ error: ErrorCode.Server.SERVER_ERROR });
    }
  },

  logout: async (request, reply) => {
    try {
      fastifyService.jwtBlacklistToken(fastifyService.jwtGetToken(request));

      reply.code(200).send({ msg: "Ok" });
    } catch (error) {
      console.log(error);
      reply.status(500).send({ error: ErrorCode.Server.SERVER_ERROR });
    }
  },
};

export { loginController };
