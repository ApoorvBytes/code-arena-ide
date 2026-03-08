function StatsPane({stats}){

return(

<div className="stats-pane">

<div className="stat-card">
<div className="stat-val">{stats.execTime} ms</div>
<div className="stat-label">Exec Time</div>
</div>

<div className="stat-card">
<div className="stat-val">{stats.lines}</div>
<div className="stat-label">Lines</div>
</div>

<div className="stat-card">
<div className="stat-val">{stats.chars}</div>
<div className="stat-label">Chars</div>
</div>

<div className="stat-card">
<div className="stat-val">{stats.errors}</div>
<div className="stat-label">Errors</div>
</div>

</div>

)

}

export default StatsPane