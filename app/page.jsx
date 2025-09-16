import Image from "next/image";

export default function Home() {
  return (
    <div>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    <p className="text-2xl">This is a sample Next.js application.</p>
    <p className="text-lg">It demonstrates the use of Tailwind CSS and the Next.js Image component.</p>
    <p className="text-md">Feel free to explore and modify the code!</p>
    <p className="text-sm">Happy coding!</p>  
    </div>
  )
}
