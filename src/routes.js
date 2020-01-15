import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.status(200).send({
    title: "Node Store API",
    version: "0.0.1"
  });
});

export default routes;
