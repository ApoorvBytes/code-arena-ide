import Icon from "./Icon"

function Topbar({activeFile,addFile,renameFile,downloadProject,onRun}){

return(

 <header className="topbar">
   <div className="brand-lockup">
     <div className="brand-mark">CA</div>
     <div>
       <div className="brand-name">Code Arena</div>
       <div className="brand-caption">Frontend workspace</div>
     </div>
   </div>

   <div className="workspace-context">
     <span className="context-overline">Workspace</span>
     <strong>untitled-project</strong>
     <span className="context-divider">/</span>
     <span className="branch-label"><span className="branch-dot" /> main</span>
   </div>

   <div className="topbar-actions">
     <div className="connection-status"><span className="status-dot" /> Live preview</div>
     <button className="toolbar-button" onClick={addFile} title="Create a new file">
       <Icon name="plus" size={15} /> <span>New file</span>
     </button>
     <button className="toolbar-button quiet" onClick={renameFile} title={`Rename ${activeFile}`}>
       <Icon name="edit" size={15} />
     </button>
     <button className="toolbar-button quiet" onClick={downloadProject} title="Download project">
       <Icon name="download" size={15} />
     </button>
     <button className="run-button" onClick={onRun} title="Run project">
       <Icon name="play" size={14} /> <span>Run</span><kbd>⌘ ↵</kbd>
     </button>
   </div>

 </header>

)

}

export default Topbar
