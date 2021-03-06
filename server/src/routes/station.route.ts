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
    url: "/station/user/:userId",
    handler: stationController.getByUser
  },
  {
    method: "GET",
    url: "/station/:id",
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
    url: "/station/:id",
    handler: stationController.delete
  }
];

export { stationRoutes };
