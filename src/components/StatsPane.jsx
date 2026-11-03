import Icon from "./Icon"

function StatsPane({stats}){

return(

 <section className="stats-pane">
   <div className="stats-heading"><span>Run metrics</span><span className="stats-updated">Current session</span></div>
   <div className="stats-grid">
     <div className="stat-card"><div className="stat-icon blue"><Icon name="bolt" size={14} /></div><div><div className="stat-val">{stats.execTime}<small> ms</small></div><div className="stat-label">Execution time</div></div></div>
     <div className="stat-card"><div className="stat-icon purple"><Icon name="lines" size={14} /></div><div><div className="stat-val">{stats.lines}</div><div className="stat-label">Lines of code</div></div></div>
     <div className="stat-card"><div className="stat-icon amber"><Icon name="hash" size={14} /></div><div><div className="stat-val">{stats.chars}</div><div className="stat-label">Characters</div></div></div>
     <div className="stat-card"><div className="stat-icon green"><Icon name="check" size={14} /></div><div><div className="stat-val">{stats.errors}</div><div className="stat-label">Errors found</div></div></div>
   </div>
 </section>

)

}

export default StatsPane
