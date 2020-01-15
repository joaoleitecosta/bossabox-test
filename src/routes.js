import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../openapi.json";

const routes = new Router();
routes.use("/api-docs", swaggerUi.serve);

routes.get("/", (req, res) => {
  return res.status(200).send({
    title: "Node Store API",
    version: "0.0.1"
  });
});

routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

export default routes;
