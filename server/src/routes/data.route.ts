import { dataController } from "../controllers/data.controller";
import fastify from "fastify";

type Routes = fastify.RouteOptions[];

const dataRoutes: Routes = [
  {
    method: "GET",
    url: "/data",
    handler: dataController.get
  },
  {
    method: "GET",
    url: "/data/:stationId",
    handler: dataController.findByStation
  },
  {
    method: "POST",
    url: "/data",
    handler: dataController.add
  },
  {
    method: "PUT",
    url: "/data",
    handler: dataController.update
  },
  {
    method: "DELETE",
    url: "/data/:id",
    handler: dataController.delete
  }
];

export { dataRoutes };
