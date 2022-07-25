import { Request, Response } from "express";
import { PrismaPlanetsRepository } from "../repositories/prisma/prisma-planets-repository";

export default {
  async create(request: Request, response: Response) {
    const { name, temperature } = request.body;

    const prismaPlanetsRepository = new PrismaPlanetsRepository();

    await prismaPlanetsRepository.create({
      name,
      temperature
    })

    return response.status(201).json({ name, temperature });
  }
}