import { Router } from 'express';

import PlanetController from './controllers/PlanetController';

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(401).send({ msg: "Hello World!" })
})

routes.post("/planet", PlanetController.create);

export { routes };