function Explorer({files,activeFile,setActiveFile,setFiles}){

function deleteFile(id){

const updated = files.filter(f=>f.id!==id)
setFiles(updated)

if(updated.length>0){
setActiveFile(updated[0].id)
}

}

return(

<div style={{
width:"200px",
borderRight:"1px solid #333",
padding:"10px"
}}>

<h4>Explorer</h4>

{files.map(file=>(
<div key={file.id} style={{
display:"flex",
justifyContent:"space-between",
marginBottom:"6px"
}}>

<span
onClick={()=>setActiveFile(file.id)}
style={{
cursor:"pointer",
color: activeFile===file.id ? "#00e5ff" : "white"
}}
>
{file.name}
</span>

<span
onClick={()=>deleteFile(file.id)}
style={{cursor:"pointer",color:"red"}}
>
×
</span>

</div>
))}

</div>

)

}

export default Explorer