import { Station } from "../entities/station";
import fastify from "fastify";

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
      reply.status(500).send();
    }
  },
  find: async (request, reply) => {
    try {
      const { name } = request.params;

      const station: Station = await Station.findOne({ name });

      reply.code(200).send(station);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
  add: async (request, reply) => {
    try {
      const station: Station = await Station.save({ ...request.body });

      reply.status(200).send(station);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
  update: async (request, reply) => {
    try {
      const { name, ...station } = request.body;

      const response = await Station.update({ name }, { ...station });

      reply.status(200).send(response);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
  delete: async (request, reply) => {
    try {
      const { name } = request.params;

      const response = await Station.delete({ name });

      reply.status(200).send(response);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
};

export { stationController };
