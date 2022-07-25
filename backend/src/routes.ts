import { Router } from 'express';

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(401).send({ msg: "Hello World!" })
})

export { routes };