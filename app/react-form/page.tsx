"use client";

import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function CreateEngineer() {
    const [name , setName] = useState<string>("");
    const [email , setEmail] = useState<string>("");
    const [engineering , setEngineering] = useState<string>("");
    const [loading , setLoading] = useState<boolean>(false);
  const route = useRouter();

    async function handleSummit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/react-form/api', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, engineering }),
            });
            if (response.ok) {
                route.push('/engineer-db');
            }
        }
        catch (error) {
            console.error("Error", error);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <>
        <form className='bg-black flex flex-col gap-3.5 items-center justify-center self-center text-center h-100' onSubmit={handleSummit}>
            <input className='p-5 bg-white rounded-xl' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name"/>
            <input  className='p-5 bg-white rounded-xl' type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" value={email}/>
            <input  className='p-5 bg-white rounded-xl' type="text" onChange={(e) => setEngineering(e.target.value)} placeholder="Enter your Engineering Field" value={engineering}/>
            <button  className='p-5 bg-blue-700 text-white hover:bg-blue-400 rounded-xl' disabled={loading}>{loading ? "Loading..." : "Submit"}</button>
        </form>
        </>
    )
}