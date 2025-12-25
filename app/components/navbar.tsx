
import Link from "next/link"

export default function NavBar()  {
return (
<>
<header className="buttom-20 fixed left-0 right-0 top-0  flex justify-between p-7 bg-black text-white">
    <h1 className="font-bold animate-bounce">PRAISE DASHBOARD</h1>
    <nav className="flex gap-7">
        <Link href={'/'} className="hover:-translate-y-0.5 transition-all duration-700 hover:font-bold">Home</Link>
        <Link href={'/profile'} className="hover:-translate-y-0.5 transition-all duration-700 hover:font-bold">Profile</Link>
        <Link href={'/tasks'} className="hover:-translate-y-0.5 transition-all duration-700 hover:font-bold">Tasks</Link>
    </nav>
</header>
</>
)
}