import dotenv from "dotenv";
import { Service } from "./services/index.service";
import { typeormService } from "./services/typeorm.service";
import { fastifyService } from "./services/fastify.service";

dotenv.config({ path: "../.env" });

const services: Service[] = [typeormService, fastifyService];

(async () => {
  try {
    for (const service of services) {
      await service.init();
    }
    console.log("Server initialized.");
    //PUT ADITIONAL CODE HERE.
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
