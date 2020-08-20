import { loginController } from "../controllers/login.controller";
import fastify from "fastify";
import { authenticationHook } from "../hooks/authenticate.hook";

type Routes = fastify.RouteOptions[];

const loginRoutes: Routes = [
  {
    method: "POST",
    url: "/login",
    handler: loginController.login
  },
  {
    method: "POST",
    url: "/logout",
    // preValidation: authenticationHook,
    handler: loginController.logout
  }
];

export { loginRoutes };
