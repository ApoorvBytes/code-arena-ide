import { useEffect } from "react"
import EditorPane from "./EditorPane"
import ConsolePane from "./ConsolePane"
import PreviewPane from "./PreviewPane"
import StatsPane from "./StatsPane"
import Explorer from "./Explorer"

function Workspace({
files,
activeFile,
setActiveFile,
setFiles,
consoleLogs,
stats,
setStats,
runVersion,
addFile,
closeFile
}){

const file = files.find(f=>f.name===activeFile)

useEffect(()=>{

if(!file) return

 const text = file?.content || ""

const lines = text.split("\n").length
const chars = text.length

 setStats(current=>({...current,lines,chars}))

 },[file,setStats])

return(

<div className="workspace">

 <section className="editor-side">
   <div className="editor-workspace">
     <Explorer
       files={files}
       activeFile={activeFile}
       setActiveFile={setActiveFile}
       addFile={addFile}
       closeFile={closeFile}
     />
     <EditorPane
       files={files}
       activeFile={activeFile}
       setFiles={setFiles}
       closeFile={closeFile}
     />
   </div>

 <div className="splitter"></div>

 <ConsolePane logs={consoleLogs}/>

 </section>

<div className="splitter splitter-v"></div>

<div className="preview-side">

 <PreviewPane files={files} refreshKey={runVersion}/>

<div className="splitter"></div>

<StatsPane stats={stats}/>

</div>

</div>

)

}

export default Workspace
