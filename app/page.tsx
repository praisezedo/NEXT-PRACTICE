import Link from "next/link";
import Nextlogo from "@/app/logo/next.svg"
export default function Home() {
  return (
     <>
<main className="justify-center items-center fixed text-center flex flex-col top-70 left-0 right-100">
  <div className="justify-center items-center  text-center flex flex-col">
    <h1 className="font-bold text-5xl mask-radial-from-neutral-800 mb-10">Welcome to Praise Dasboard</h1>
    <p className="font-bold mask-radial-from-neutral-800">Built with NEXT.JS</p>
  </div>
  <div className="mt-10 flex gap-30">
 <Link className="animate-bounce hover:opacity-50 transition-all duration-700  bg-black text-white p-3 rounded-2xl" href={'/profile'}>Profile</Link>
  <Link className="animate-bounce hover:opacity-50 border-2 border-black  p-3 rounded-2xl transition-all duration-700 " href={'/tasks'}>Tasks</Link>
  </div>
</main>
     </>
  );
}
