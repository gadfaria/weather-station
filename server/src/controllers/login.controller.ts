import { User } from "../entities/user";
import fastify from "fastify";
import { fastifyService } from "../services/fastify.service";

interface loginController {
  login: fastify.RequestHandler;
  logout: fastify.RequestHandler;
}

let loginController: loginController = {
  login: async (request, reply) => {
    try {
      const user: User = await User.findOne({ nickname: request.body.nickname });

      const token = fastifyService.jwtSign(user);

      reply.status(200).send({ ...user, token });
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
  logout: async (request, reply) => {
    try {
      fastifyService.jwtBlacklistToken(fastifyService.jwtGetToken(request));

      reply.code(200).send({ msg: "Ok" });
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  }
};

export { loginController };
