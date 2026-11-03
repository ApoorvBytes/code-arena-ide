import Icon from "./Icon"

function Explorer({files,activeFile,setActiveFile,addFile,closeFile}){

function getFileType(name){
 if(name.endsWith(".html")) return "html"
 if(name.endsWith(".css")) return "css"
 if(name.endsWith(".js")) return "js"
 return "file"
}

return(

 <aside className="explorer">
   <div className="explorer-heading">
     <span>Explorer</span>
     <button className="panel-action" onClick={addFile} title="Add file"><Icon name="plus" size={14} /></button>
   </div>
   <div className="project-tree">
     <div className="tree-folder"><Icon name="chevron-down" size={13} /><Icon name="folder" size={15} /><span>PROJECT</span></div>
     <div className="file-list">
       {files.map(file=>(
         <button key={file.name} className={`file-row ${activeFile===file.name ? "selected" : ""}`} onClick={()=>setActiveFile(file.name)}>
           <Icon name="file" size={15} className={`file-icon ${getFileType(file.name)}`} />
           <span>{file.name}</span>
           <span className="file-row-close" onClick={(event)=>{event.stopPropagation(); closeFile(file.name)}}><Icon name="x" size={13} /></span>
         </button>
       ))}
     </div>
   </div>
   <div className="explorer-footnote"><span className="tiny-dot" /> {files.length} files in workspace</div>
 </aside>

)

}

export default Explorer
