'use client';
import { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions"

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({snippet}: SnippetEditFormProps){
  const [codeSnippet, setCodeSnippet] = useState(snippet.code)

  function handleEditorChange(value: string = '') {
    setCodeSnippet(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, codeSnippet);

  return (
    <div>
      <Editor
        className="mt-10"
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <div className="flex justify-center">
          <button className="bg-blue-600 text-slate-100 px-6 py-3 mt-4 rounded-md">Save</button>
        </div>
      </form>
    </div>
  )

}