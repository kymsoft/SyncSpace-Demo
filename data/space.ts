import { db } from "../lib/db";

export const getSpaceById = async (id: string) => {
  try {
    const space = await db.space.findUnique({ where: { id } });

    return space;
  } catch {
    return null;
  }
};

export const getSpaceByTag = async (tag: string) => {
  try {
    const space = await db.space.findUnique({ where: { tag } });

    return space;
  } catch {
    return null;
  }
};