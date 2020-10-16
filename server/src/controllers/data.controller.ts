import { Data } from "../entities/data";
import fastify from "fastify";
import ErrorCode from "../util/ErrorCodes";
import { User } from "../entities/user";
import { Station } from "../entities/station";

interface dataController {
  get: fastify.RequestHandler;
  getByStation: fastify.RequestHandler;
  add: fastify.RequestHandler;
  update: fastify.RequestHandler;
  delete: fastify.RequestHandler;
  teste: fastify.RequestHandler;
}

let dataController: dataController = {
  get: async (request, reply) => {
    try {
      const data: Data[] = await Data.find();

      reply.code(200).send(data);
    } catch (error) {
      console.log(error);
      reply.status(500).send({ error: ErrorCode.Server.SERVER_ERROR });
    }
  },

  getByStation: async (request, reply) => {
    try {
      const { stationId } = request.params;

      const station: Station = await Station.findOne({ id: stationId });
      if (!station)
        reply.status(400).send({ error: ErrorCode.Station.STATION_NOT_FOUND });

      const data: Data[] = await Data.createQueryBuilder("data")
        .innerJoin("data.station", "station")
        .where("station.id = :stationId", { stationId })
        .orderBy()
        .getMany();

      reply.code(200).send(data);
    } catch (error) {
      console.log(error);
      reply.status(500).send({ error: ErrorCode.Server.SERVER_ERROR });
    }
  },

  add: async (request, reply) => {
    try {
      const { stationId } = request.body;

      const station: Station = await Station.findOne({ id: stationId });

      if (!station)
        return reply
          .status(400)
          .send({ error: ErrorCode.Station.STATION_NOT_FOUND });

      const data: Data = await Data.save({ ...request.body, ...station });

      reply.status(200).send(data);
    } catch (error) {
      console.log(error);
      reply.status(500).send({ error: ErrorCode.Server.SERVER_ERROR });
    }
  },

  update: async (request, reply) => {
    try {
      const { id, data } = request.body;

      const response = await Data.update({ id }, { ...data });

      reply.status(200).send(response);
    } catch (error) {
      console.log(error);
      reply.status(500).send({ error: ErrorCode.Server.SERVER_ERROR });
    }
  },

  delete: async (request, reply) => {
    try {
      const { id } = request.params;

      const response = await Data.delete({ id });

      reply.status(200).send(response);
    } catch (error) {
      console.log(error);
      reply.status(500).send({ error: ErrorCode.Server.SERVER_ERROR });
    }
  },

  teste: async (request, reply) => {
    try {
      let mqtt = require("mqtt");
      let client = mqtt.connect("mqtt:broker.mqttdashboard.com");

      client.on("message", function (topic, message) {
        // message is Buffer
        console.log(message.toString());
        client.end();
      });
      reply.status(200).send("oi");
    } catch (error) {
      console.log(error);
      reply.status(500).send({ error: ErrorCode.Server.SERVER_ERROR });
    }
  },
};

export { dataController };
