"use server"

import { db } from "../lib/db";

export async function getPost(){
    const response = await db.space.findMany({
      select: {
        name: true,
        tag: true,
        description: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    return response;
  }