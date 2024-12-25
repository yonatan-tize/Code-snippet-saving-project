import { db } from "@/database";
import Link from "next/link";
export default async function Home() {
  const snippets = await db.snippet.findMany();

  const snippetToRender = snippets.map((snippet) => (
    <Link 
      href={`/snippets/${snippet.id}`} 
      className="flex justify-between border border-slate-400 p-3 rounded" 
      key={snippet.id}
    >
      <h2 className="text-xl">{snippet.title}</h2>
      <h2 className="text-xl">View</h2>
    </Link>
  ));
  return (
   <div>
    <div className="flex justify-between m-4">
      <h1 className="font-bold text-3xl">Snippets</h1>
      <Link className="border px-3 py-2 rounded border-slate-500" href='/snippets/new'>New</Link>
    </div>
    <div className="flex flex-col justify-center gap-4 m-4">
      {snippetToRender}
    </div>
   </div>
  );
}
