import { db } from "@/database";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as actions from '@/actions'

export default async function SnippetShowPage(props: any) {
  const params = await props.params;
  const id = parseInt(params.id);
  const snippet = await db.snippet.findUnique({
    where: { id: id }
  });

  if (!snippet) {
    return notFound();
  }
  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div className="mt-6">
      <div className="flex justify-between my-4 items-center">
        <h1 className="font-bold text-3xl">{snippet.title}</h1>
        <div className="flex">
          <Link href={`/snippets/${snippet.id}/edit`} className="border border-gray-400 rounded mr-2 py-2 px-3">Edit</Link>
          <form action={deleteSnippetAction}>
            <button className="border border-gray-400 rounded mr-2 py-2 px-3">Delete</button>
          </form>
        </div>
      </div>
      <pre className="bg-slate-300 rounded p-4 px-8">
        <code>
          {snippet.code}
        </code>
      </pre>
    </div>
  );
}