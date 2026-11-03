import Editor from "@monaco-editor/react"
import Icon from "./Icon"

function EditorPane({ files, activeFile, setFiles, closeFile }) {

const file = files.find(f => f.name === activeFile)

function updateCode(value){

const updated = files.map(f =>
f.name === activeFile ? {...f,content:value} : f
)

setFiles(updated)

}

function detectLanguage(name){

 if((name || "").endsWith(".js")) return "javascript"
 if((name || "").endsWith(".html")) return "html"
 if((name || "").endsWith(".css")) return "css"
 if((name || "").endsWith(".py")) return "python"
 if((name || "").endsWith(".cpp")) return "cpp"
if(name.endsWith(".java")) return "java"

return "plaintext"

}

return(

 <div className="editor-pane">
   <div className="editor-tabs">
     <div className="tab-list">
       {files.map(item=>(
         <div key={item.name} className={`editor-tab ${activeFile===item.name ? "active" : ""}`}>
           <Icon name="file" size={14} className={`file-icon ${item.name.endsWith(".html") ? "html" : item.name.endsWith(".css") ? "css" : "js"}`} />
           <span>{item.name}</span>
           <button className="tab-close" onClick={()=>closeFile(item.name)} aria-label={`Close ${item.name}`}><Icon name="x" size={12} /></button>
         </div>
       ))}
     </div>
     <span className="editor-tab-meta"><span className="saved-dot" /> Saved</span>
   </div>
   <div className="editor-toolbar">
     <span><Icon name="file" size={13} /> src / <strong>{activeFile || "No file selected"}</strong></span>
     <span className="language-label">{detectLanguage(activeFile)}</span>
   </div>
   <div className="editor-surface">
     <Editor
       height="100%"
       theme="vs-dark"
       language={detectLanguage(activeFile)}
       value={file?.content || ""}
       onChange={updateCode}
       options={{
         fontSize:13,
         lineHeight:21,
         minimap:{enabled:false},
         automaticLayout:true,
         scrollBeyondLastLine:false,
         padding:{top:12,bottom:16},
         renderLineHighlight:"gutter",
         fontLigatures:true,
         smoothScrolling:true
       }}
     />
   </div>
 </div>

)

}

export default EditorPane
