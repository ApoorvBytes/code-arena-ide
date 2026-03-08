import { useEffect } from "react"
import EditorPane from "./EditorPane"
import ConsolePane from "./ConsolePane"
import PreviewPane from "./PreviewPane"
import StatsPane from "./StatsPane"

function Workspace({
files,
activeFile,
setFiles,
consoleLogs,
stats,
setStats
}){

const file = files.find(f=>f.name===activeFile)

useEffect(()=>{

if(!file) return

const text = file.content || ""

const lines = text.split("\n").length
const chars = text.length

setStats({
execTime: Math.floor(Math.random()*5), // temporary execution time
lines,
chars,
errors:0
})

},[file])

return(

<div className="workspace">

<div className="editor-side">

<EditorPane
files={files}
activeFile={activeFile}
setFiles={setFiles}
/>

<div className="splitter"></div>

<ConsolePane logs={consoleLogs}/>

</div>

<div className="splitter splitter-v"></div>

<div className="preview-side">

<PreviewPane files={files}/>

<div className="splitter"></div>

<StatsPane stats={stats}/>

</div>

</div>

)

}

export default Workspace