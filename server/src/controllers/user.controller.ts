import { User } from "../entities/user";
import fastify from "fastify";

interface userController {
  get: fastify.RequestHandler;
  find: fastify.RequestHandler;
  add: fastify.RequestHandler;
  update: fastify.RequestHandler;
  delete: fastify.RequestHandler;
}

let userController: userController = {
  get: async (request, reply) => {
    try {
      // const users: User[] = await User.find();

      const users: User[] = await User.createQueryBuilder("user")
        .innerJoinAndSelect("user.address", "address")
        .getMany();

      reply.code(200).send(users);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
  find: async (request, reply) => {
    try {
      const user: User = await User.findOne({ nickname: request.params.nickname });

      reply.code(200).send(user);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
  add: async (request, reply) => {
    try {
      const user: User = await User.save({ ...request.body });

      reply.status(200).send(user);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
  update: async (request, reply) => {
    try {
      const { nickname } = request.body;

      const { addressId, ...user } = request.body;

      const response = await User.update({ nickname }, { ...user });

      reply.status(200).send(response);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
  delete: async (request, reply) => {
    try {
      const { nickname } = request.params;

      const response = await User.delete({ nickname });

      reply.status(200).send(response);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
};

export { userController };
