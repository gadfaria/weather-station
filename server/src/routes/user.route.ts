import { userController } from "../controllers/user.controller";
import fastify from "fastify";

type Routes = fastify.RouteOptions[];

const userRoutes: Routes = [
  {
    method: "GET",
    url: "/user",
    handler: userController.get,
  },
  {
    method: "GET",
    url: "/user/:nickname",
    handler: userController.find,
  },
  {
    method: "POST",
    url: "/user",
    handler: userController.add,
  },
  {
    method: "PUT",
    url: "/user",
    handler: userController.update,
  },
  {
    method: "DELETE",
    url: "/user/:nickname",
    handler: userController.delete,
  },
];

export { userRoutes };
