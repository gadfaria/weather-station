import { stationController } from "../controllers/station.controller";
import fastify from "fastify";

type Routes = fastify.RouteOptions[];

const stationRoutes: Routes = [
  {
    method: "GET",
    url: "/station",
    handler: stationController.get
  },
  {
    method: "GET",
    url: "/station/:name",
    handler: stationController.find
  },
  {
    method: "POST",
    url: "/station",
    handler: stationController.add
  },
  {
    method: "PUT",
    url: "/station",
    handler: stationController.update
  },
  {
    method: "DELETE",
    url: "/station/:name",
    handler: stationController.delete
  }
];

export { stationRoutes };
