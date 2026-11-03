import { useEffect, useRef, useState } from "react"
import Icon from "./Icon"

function PreviewPane({files,refreshKey}){

 const iframeRef = useRef()
 const [manualRefresh,setManualRefresh] = useState(0)

useEffect(()=>{

const htmlFile = files.find(f=>f.name.endsWith(".html"))
const cssFiles = files.filter(f=>f.name.endsWith(".css"))
const jsFiles = files.filter(f=>f.name.endsWith(".js"))

const html = htmlFile ? htmlFile.content : ""

const css = cssFiles.map(f=>`<style>${f.content}</style>`).join("\n")

 const js = jsFiles.map(f=>`<script>${f.content}</script>`).join("\n")

const finalCode = `
${html}

${css}

${js}
`

const iframe = iframeRef.current
const doc = iframe.contentDocument || iframe.contentWindow.document

doc.open()
doc.write(finalCode)
doc.close()

  },[files,refreshKey,manualRefresh])

return(

 <div className="preview-pane">
   <div className="preview-header">
     <div className="preview-title"><Icon name="monitor" size={15} /><span>Preview</span><span className="live-pill">LIVE</span></div>
      <div className="preview-actions"><span className="viewport-label">Desktop · 100%</span><button className="panel-action" title="Refresh preview" onClick={()=>setManualRefresh(value=>value+1)}><Icon name="refresh" size={14} /></button></div>
   </div>
   <div className="preview-stage">
     <iframe title="Live project preview" className="preview-frame" ref={iframeRef} />
   </div>
 </div>

)

}

export default PreviewPane
