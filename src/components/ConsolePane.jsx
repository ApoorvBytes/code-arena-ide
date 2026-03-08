function ConsolePane({logs}){

return(

<div className="console-pane">

{logs.map((log,i)=>(

<div key={i}>{log}</div>

))}

</div>

)

}

export default ConsolePane