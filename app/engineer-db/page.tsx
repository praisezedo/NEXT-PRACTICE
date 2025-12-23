import 'server-only'
import { getEngineers } from "../prisma-db";
 type Engineer = {
    id: number;
    name: string;
    email: string;
    engineering: string;
 }

export default async function enginneeringDbDisplay () {
const engineers: Engineer[] = await getEngineers();
return (
<>
<ul className="bg-black items-center justify-center grid grid-cols-2 gap-3.5 text-center">
    {
        engineers.map(eng => (
            <li key={eng.id} className='bg-white  rounded-3xl max-w-75 mx-auto p-10'>
                <h2 className='text-black font-bold text-3xl'>{eng.name}</h2>
                <p className='text-black '>{eng.email}</p>
                <p className='text-black '>{eng.engineering}</p>
            </li>
        ))
    }
</ul>
</>
)
}