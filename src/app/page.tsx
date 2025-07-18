import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
      <nav>
    <ul className="flex justify-center mt-2 text-white">
      <Link href="/home" className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 px-3 py-2 mr-4 rounded-full ">Home</Link>
      <Link href="/about" className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 px-3 py-2 mr-4 rounded-full">About us</Link>
      <Link href="/project" className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 px-3 py-2 mr-4 rounded-full">Project</Link>
      <Link href="/contact" className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 px-3 py-2 mr-4 rounded-full">Contact</Link>
    </ul>
  </nav>
  );
} 
