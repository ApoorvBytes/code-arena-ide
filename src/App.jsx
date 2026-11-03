import { useState } from "react"
import Topbar from "./components/Topbar"
import Workspace from "./components/Workspace"
import StatusBar from "./components/StatusBar"
import Footer from "./components/Footer"
import "./style.css"

function App(){

 const [files,setFiles] = useState([
 {name:"index.html",content:"<h1>Hello Arena</h1>"},
 {name:"style.css",content:""},
 {name:"main.js",content:""}
 ])

const [activeFile,setActiveFile] = useState("index.html")

 const [consoleLogs,setConsoleLogs] = useState([
 "Workspace initialized",
 "Live preview is ready"
 ])

 const [runVersion,setRunVersion] = useState(0)

 const [stats,setStats] = useState({
 execTime:0,
 lines:0,
 chars:0,
 errors:0
 })

 function addFile(){
 const name = prompt("Enter a file name")?.trim()
 if(!name) return
 if(files.some(file=>file.name===name)){
   alert("A file with that name already exists")
   return
 }
 setFiles([...files,{name,content:""}])
 setActiveFile(name)
 }

 function renameFile(){
 const newName = prompt("Enter a new file name",activeFile)?.trim()
 if(!newName || newName===activeFile) return
 if(files.some(file=>file.name===newName)){
   alert("A file with that name already exists")
   return
 }
 setFiles(files.map(file=>file.name===activeFile ? {...file,name:newName} : file))
 setActiveFile(newName)
 }

 function closeFile(name){
 const remaining = files.filter(file=>file.name!==name)
 setFiles(remaining)
 if(activeFile===name) setActiveFile(remaining[0]?.name || "")
 }

 function downloadProject(){
 const data = JSON.stringify(files,null,2)
 const blob = new Blob([data],{type:"application/json"})
 const url = URL.createObjectURL(blob)
 const link = document.createElement("a")
 link.href = url
 link.download = "code-arena-project.json"
 link.click()
 URL.revokeObjectURL(url)
 }

 function runProject(){
 setRunVersion(version=>version+1)
 setConsoleLogs(logs=>[...logs.slice(-3),"Preview updated successfully"])
 setStats(current=>({...current,execTime:4,errors:0}))
 }

return(

<div className="shell">

 <Topbar
  activeFile={activeFile}
 addFile={addFile}
 renameFile={renameFile}
 downloadProject={downloadProject}
 onRun={runProject}
 />

<Workspace
 files={files}
 activeFile={activeFile}
 setActiveFile={setActiveFile}
 setFiles={setFiles}
 consoleLogs={consoleLogs}
 stats={stats}
 setStats={setStats}
 runVersion={runVersion}
 addFile={addFile}
 closeFile={closeFile}
 />

<StatusBar/>

<Footer/>

</div>

)

}

export default App
