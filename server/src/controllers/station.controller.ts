import { Station } from "../entities/station";
import fastify from "fastify";
import ErrorCode from "../util/ErrorCodes";
import { User } from "../entities/user";
import fetch from "node-fetch";

interface stationController {
  get: fastify.RequestHandler;
  getByUser: fastify.RequestHandler;
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

  getByUser: async (request, reply) => {
    try {
      const { userId } = request.params;

      const user: User = await User.findOne({ id: userId });
      if (!user)
        reply.status(400).send({ error: ErrorCode.User.USER_NOT_FOUND });

      const stations: Station[] = await Station.createQueryBuilder("station")
        .innerJoin("station.user", "user")
        .where("user.id = :userId", { userId })
        .getMany();

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
      const { name, userId, lat, lon } = request.body;

      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${process.env.API_KEY_OC}`
      );

      const responseObject = await response.json();

      const {
        country,
        state,
        town: city,
        suburb: neighborhood,
      } = responseObject.results[0].components;

      const stationVerify: Station = await Station.findOne({ name });

      if (stationVerify)
        return reply
          .status(400)
          .send({ error: ErrorCode.Station.STATION_ALREADY_SIGNED });

      const user: User = await User.findOne({ id: userId });

      if (!user)
        return reply.status(400).send({ error: ErrorCode.User.USER_NOT_FOUND });

      const station: Station = await Station.save({
        ...request.body,
        userId,
        country,
        state,
        city,
        neighborhood,
      });

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
