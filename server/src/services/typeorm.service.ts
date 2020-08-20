import { createConnection, DatabaseType, ConnectionOptions } from "typeorm";
import path from "path";
import { Service } from "./index.service";
import fs from "fs";

const typeormService: Service = {
  init: async () => {
    try {
      let connectionOptions: ConnectionOptions = {
        type: process.env.DB_TYPE as DatabaseType,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [
          path.resolve(__dirname, "../entities/*.js"),
          path.resolve(__dirname, "../entities/*.js.map"),
          path.resolve(__dirname, "../entities/*.ts")
        ],
        synchronize: false
      } as ConnectionOptions;

      if (process.env.DB_SSL == "true")
        connectionOptions["ssl"] = {
          key: fs.readFileSync(process.env.DB_SSL_CLIENT_KEY_PATH),
          cert: fs.readFileSync(process.env.DB_SSL_CLIENT_CERT_PATH),
          ca: fs.readFileSync(process.env.DB_SSL_CLIENT_CA_PATH)
        };

      await createConnection(connectionOptions);

      console.log("[TYPEORM] Database service initialized.");
    } catch (error) {
      console.log("[TYPEORM] Error during database service initialization");
      throw error;
    }
  }
};

export { typeormService };
