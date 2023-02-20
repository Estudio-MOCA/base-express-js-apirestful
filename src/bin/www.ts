if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "production";
  require("dotenv").config({ path: `.env` });
} else {
  require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
}

import app from "../app";
import http from "http";
import debug from "debug";
import { GlobalHelper } from "../helpers";

const port = GlobalHelper.normalizePort(process.env.PORT || 3000);
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Running on http://localhost:${port}.`);
});

server.on("error", (error: NodeJS.ErrnoException) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = (typeof port === "string") ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

server.on("listening", () => {
  const addr = server.address();
  const bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
});