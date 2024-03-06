// import { ScrollArea } from "../../../../components/ui/scroll-area";
// import { db } from "../../../../lib/db";
// import HomeCard from "./home-card"
// import SpaceList from "./space-list";

// async function getSpace(){
//   const response = await db.space.findMany({
//     select: {
//       name: true,
//       description: true,
//       tag: true,
//     },
//     orderBy: {
//       createdAt: 'desc',
//     }
//   });
//   return response;
// }

// export default async function Sidespace(){
//   const spaces = await getSpace();

//   return (
//     <ScrollArea className="h-[300px] w-full rounded-md border p-4">
//         <div className="">
//           { spaces.map(space => (
//             <SpaceList key = {space.tag} space={space} />
//           ))}
//     </div>
//     </ScrollArea>
    
    
//   )
// }
