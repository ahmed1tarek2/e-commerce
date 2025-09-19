
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans ">
      home page
      <Link href="/shop" className="border"> Shop </Link>
      <Link href="/blog" className="border"> blog </Link>
    </div>
  );
}
