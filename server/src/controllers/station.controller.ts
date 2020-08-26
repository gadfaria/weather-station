import { Station } from "../entities/station";
import fastify from "fastify";
import ErrorCode from "../util/ErrorCodes";
import { User } from "../entities/user";

interface stationController {
  get: fastify.RequestHandler;
  find: fastify.RequestHandler;
  add: fastify.RequestHandler;
  update: fastify.RequestHandler;
  delete: fastify.RequestHandler;
}

let stationController: stationController = {
  get: async (request, reply) => {
    try {
      const stations: Station[] = await Station.find();

      reply.code(200).send(stations);
    } catch (error) {
      console.log(error);
      reply.status(500).send({ error: ErrorCode.Server.SERVER_ERROR });
    }
  },

  find: async (request, reply) => {
    try {
      const { id } = request.params;

      const station: Station = await Station.findOne({ id });

      if (!station)
        return reply
          .code(400)
          .send({ error: ErrorCode.Station.STATION_NOT_FOUND });

      reply.code(200).send(station);
    } catch (error) {
      console.log(error);
      reply.status(500).send({ error: ErrorCode.Server.SERVER_ERROR });
    }
  },

  add: async (request, reply) => {
    try {
      const { name, userId } = request.body;

      const stationVerify: Station = await Station.findOne({ name });

      if (stationVerify)
        return reply
          .status(400)
          .send({ error: ErrorCode.Station.STATION_ALREADY_SIGNED });

      const user: User = await User.findOne({ id: userId });

      if (!user)
        return reply.status(400).send({ error: ErrorCode.User.USER_NOT_FOUND });

      const station: Station = await Station.save({ ...request.body, ...user });

      reply.status(200).send(station);
    } catch (error) {
      console.log(error);
      reply.status(500).send({ error: ErrorCode.Server.SERVER_ERROR });
    }
  },

  update: async (request, reply) => {
    try {
      const { id, ...station } = request.body;

      const response = await Station.update({ id }, { ...station });

      reply.status(200).send(response);
    } catch (error) {
      console.log(error);
      reply.status(500).send({ error: ErrorCode.Server.SERVER_ERROR });
    }
  },

  delete: async (request, reply) => {
    try {
      const { id } = request.params;

      const response = await Station.delete({ id });

      reply.status(200).send(response);
    } catch (error) {
      console.log(error);
      reply.status(500).send({ error: ErrorCode.Server.SERVER_ERROR });
    }
  },
};

export { stationController };
