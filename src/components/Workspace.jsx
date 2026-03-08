import EditorPane from "./EditorPane"
import ConsolePane from "./ConsolePane"
import PreviewPane from "./PreviewPane"
import StatsPane from "./StatsPane"

function Workspace({
files,
activeFile,
setFiles,
consoleLogs,
stats
}){

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

<PreviewPane
files={files}
activeFile={activeFile}
/>

<div className="splitter"></div>

<StatsPane stats={stats}/>

</div>

</div>

)

}

export default Workspace