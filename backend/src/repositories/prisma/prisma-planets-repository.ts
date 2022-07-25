import { prisma } from '../../prisma';

interface PlanetCreateData {
  name: string;
  temperature: number;
}

export interface PlanetCreate {
  create: (data: PlanetCreateData) => Promise<void>;
}

export class PrismaPlanetsRepository implements PlanetCreate {
  async create({ name, temperature }: PlanetCreateData) {
    await prisma.planet.create({
      data: {
        name,
        temperature
      }
    })
  }
}