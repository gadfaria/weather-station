import fastify from "fastify";
import { userRoutes } from "./user.route";
import { loginRoutes } from "./login.route";
import { stationRoutes } from "./station.route";
import { dataRoutes } from "./data.route";

type Routes = fastify.RouteOptions[];

const routes: Routes = [
  ...loginRoutes,
  ...userRoutes,
  ...stationRoutes,
  ...dataRoutes,
];

export default routes;
