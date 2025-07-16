import Link from "next/link";

export default function Navfunc(){
 return(
  <nav>
    <ul className="flex justify-center">
      <Link href="/home" className="bg-sky-500/70 px-8 py-4 ">Home</Link>
      <Link href="/about" className="bg-sky-500/70 px-8 py-4">About us</Link>
      <Link href="/project" className="bg-sky-500/70 px-8 py-4">Project</Link>
      <Link href="/contact" className="bg-sky-500/70 px-8 py-4">Contact</Link>
    </ul>
  </nav>
 )
}