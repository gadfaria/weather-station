import fastify from "fastify";
import { userRoutes } from "./user.route";
import { loginRoutes } from "./login.route";

type Routes = fastify.RouteOptions[];

const routes: Routes = [...loginRoutes, ...userRoutes];

export default routes;
