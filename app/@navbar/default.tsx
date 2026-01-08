import Link from "next/link"

export default function Navbar() {
    return <>
      <h1 className="text-white animate-bounce">PRAISE' DASHBOARD</h1>
      <nav className="flex justify-between gap-10">
         <Link className="hover:-translate-y-1 transition-all duration-700" href={'/'}>Home</Link>
         <Link className="hover:-translate-y-1 transition-all duration-700" href={'/profile'}>Profile</Link>
         <Link className="hover:-translate-y-1 transition-all duration-700" href={'/tasks'}>Goal</Link>
      </nav>
    </>
}