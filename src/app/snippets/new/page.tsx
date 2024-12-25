import { db } from "@/database";
import { redirect } from "next/navigation";
export default function SnippetCreatePage(){

  async function createSnippet(formData: FormData){
    'use server';

    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    //save code to database
    const snippet = await db.snippet.create({
      data: {
        title,
        code
      }
    });

    console.log(snippet);
    //redirect the use to home page
    redirect('/');
  }

  return(
    <div>
      <form action={createSnippet} className="flex flex-col mt-6">
        <h3 className="font-bold my-3 text-4xl">Create a Snippet</h3>
        <div className=" flex gap-4 mb-3">
          <label className="w-12" htmlFor="title">Title</label>
          <input 
            type="text" 
            name="title"
            id="text"
            className="border-gray-200 bg-slate-100 p-3 px-6 w-full"
            />
        </div>
          <div className="flex gap-4">
          <label className="w-12"  htmlFor="code">Code</label>
          <textarea 
            name="code" 
            id="code" 
            className="border-gray-200 bg-slate-100 p-3 min-h-44 px-6 w-full"/>
        </div>
        <button type="submit" className="bg-blue-500 rounded-lg p-4 text-slate-200 text-2xl mt-4">Create</button>
      </form>
    </div>
  )
}
