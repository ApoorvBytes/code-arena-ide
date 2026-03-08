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

const [consoleLogs,setConsoleLogs] = useState(["Console ready..."])

const [stats,setStats] = useState({
execTime:0,
lines:0,
chars:0,
errors:0
})

return(

<div className="shell">

<Topbar
files={files}
setFiles={setFiles}
activeFile={activeFile}
setActiveFile={setActiveFile}
/>

<Workspace
files={files}
activeFile={activeFile}
setFiles={setFiles}
consoleLogs={consoleLogs}
stats={stats}
setStats={setStats}
/>

<StatusBar/>

<Footer/>

</div>

)

}

export default App