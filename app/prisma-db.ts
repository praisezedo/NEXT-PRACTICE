
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const technologyBuilders = async () => {
const count = await prisma.user.count();
    if (count === 0) {
       await prisma.user.createMany({
            data: [
             {name: 'Praise' , email: 'praise@gmail.com', engineering: 'software engineering'},
             {name: 'emmaneul' , email: 'emmaneul@gmail.com', engineering: 'mechatronics engineering'},
             {name: 'justice' , email: 'justice@gmail.com', engineering: 'aeronautic engineering'},
             {name: 'joshua' , email: 'joshua@gmail.com', engineering: 'mechanical engineering'}
            ]
        })
    }
}

technologyBuilders();


export async function getEngineers() {
    await new Promise((resolve) => setTimeout(resolve  ,1500))
    const result =  prisma.user.findMany();
    return result; 
}
export async function getEngineer(id : number) {
await new Promise((resolve) => setTimeout(resolve , 1500))
    return prisma.user.findUnique({where: {id}})
}
export async function addEngineers(name: string , email: string , engineering: string) {
    await new Promise((resolve) => setTimeout(resolve , 1500))
   return prisma.user.create({ data: { name  , email , engineering}})
}

export async function updateEngineer(id: number , name: string , email: string , engineering: string) {
await new Promise((resolve) => setTimeout(resolve , 1500))
  return  prisma.user.update({
        where: {id} ,
        data: [{name , email , engineering}]
    })

}

export async function deleteEngineer(id: number) {
await new Promise((resolve) => setTimeout(resolve , 1500))
   return prisma.user.delete({where: {id}})
}



