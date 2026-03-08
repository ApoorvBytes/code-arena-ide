import Editor from "@monaco-editor/react"

function EditorPane({ files, activeFile, setFiles }) {

const file = files.find(f => f.name === activeFile)

function updateCode(value){

const updated = files.map(f =>
f.name === activeFile ? {...f,content:value} : f
)

setFiles(updated)

}

function detectLanguage(name){

if(name.endsWith(".js")) return "javascript"
if(name.endsWith(".html")) return "html"
if(name.endsWith(".css")) return "css"
if(name.endsWith(".py")) return "python"
if(name.endsWith(".cpp")) return "cpp"
if(name.endsWith(".java")) return "java"

return "plaintext"

}

return(

<div className="editor-pane">

<Editor
height="100%"
theme="vs-dark"
language={detectLanguage(activeFile)}
value={file?.content || ""}
onChange={updateCode}
options={{
fontSize:14,
minimap:{enabled:false},
automaticLayout:true,
scrollBeyondLastLine:false
}}
/>

</div>

)

}

export default EditorPane