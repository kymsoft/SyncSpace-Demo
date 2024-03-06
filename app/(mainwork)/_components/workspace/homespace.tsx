
import { db } from "../../../../lib/db";
import HomeCard from "./home-card"

async function getSpace(){
  const response = await db.space.findMany({
    select: {
      name: true,
      description: true,
      tag: true,
    },
    orderBy: {
      createdAt: 'desc',
    }
  });
  return response;
}

export default async function HomeWorkspace(){
  const spaces = await getSpace();

  return (
    <div className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-4 gap-2 p-3">
          { spaces.map(space => (
            <HomeCard key = {space.tag} space={space} />
          ))}
    </div>
    
  )
}
