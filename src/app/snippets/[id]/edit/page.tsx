import { db } from "@/database";
import SnippetEditForm from "@/components/snippet-edit-form";
import { notFound } from "next/navigation";

export default async function EditSnippet(props:any){
  const params = await props.params;
  const id = parseInt(params.id);
  const snippet = await db.snippet.findFirst({
    where: {id}
  });

  if (!snippet) return notFound();
  return (
    <div>
      <SnippetEditForm snippet={snippet}/>
    </div>
  );

};