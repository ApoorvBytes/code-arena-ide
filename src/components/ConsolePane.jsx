import Icon from "./Icon"

function ConsolePane({logs}){

return(

 <section className="console-pane">
   <div className="console-header"><div><Icon name="terminal" size={14} /><span>Console</span><span className="console-count">{logs.length}</span></div><span className="console-state"><span className="tiny-dot" /> Process ready</span></div>
   <div className="console-output">
     {logs.map((log,i)=><div className="console-line" key={`${log}-${i}`}><span className="line-number">{String(i+1).padStart(2,"0")}</span><span className={log.toLowerCase().includes("error") ? "log-error" : ""}>{log}</span></div>)}
   </div>
 </section>

)

}

export default ConsolePane
