function Topbar({files,setFiles,activeFile,setActiveFile}){

function addFile(){

const name = prompt("Enter file name")

if(!name) return

if(files.find(f=>f.name===name)){
alert("File already exists")
return
}

const newFile = {
name:name,
content:""
}

setFiles([...files,newFile])
setActiveFile(name)

}

function renameFile(){

const newName = prompt("Enter new file name")

if(!newName) return

const updated = files.map(f=>
f.name===activeFile ? {...f,name:newName} : f
)

setFiles(updated)
setActiveFile(newName)

}

function closeFile(name){

const filtered = files.filter(f=>f.name!==name)

setFiles(filtered)

if(activeFile===name && filtered.length){
setActiveFile(filtered[0].name)
}

}

function downloadProject(){

const data = JSON.stringify(files,null,2)

const blob = new Blob([data],{type:"application/json"})

const url = URL.createObjectURL(blob)

const a = document.createElement("a")

a.href = url
a.download = "code-arena-project.json"

a.click()

}

function getIcon(name){

if(name.endsWith(".html")) return "🌐"
if(name.endsWith(".css")) return "🎨"
if(name.endsWith(".js")) return "⚡"
if(name.endsWith(".py")) return "🐍"
if(name.endsWith(".cpp")) return "💻"

return "📄"

}

return(

<div className="topbar">

<h2 className="logo">CODE // ARENA</h2>

<div className="tabs">

{files.map(file=>(

<div
key={file.name}
className={activeFile===file.name ? "tab active":"tab"}
onClick={()=>setActiveFile(file.name)}
>

<span className="file-icon">
{getIcon(file.name)}
</span>

<span className="file-name">
{file.name}
</span>

<span
className="close"
onClick={(e)=>{
e.stopPropagation()
closeFile(file.name)
}}
>
×
</span>

</div>

))}

</div>

<div className="actions">

<button onClick={addFile}>+ File</button>
<button onClick={renameFile}>Rename</button>
<button>Run</button>
<button onClick={downloadProject}>Download</button>

</div>

</div>

)

}

export default Topbar