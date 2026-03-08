import { useEffect, useRef } from "react"

function PreviewPane({files}){

const iframeRef = useRef()

useEffect(()=>{

const htmlFile = files.find(f=>f.name.endsWith(".html"))
const cssFiles = files.filter(f=>f.name.endsWith(".css"))
const jsFiles = files.filter(f=>f.name.endsWith(".js"))

const html = htmlFile ? htmlFile.content : ""

const css = cssFiles.map(f=>`<style>${f.content}</style>`).join("\n")

const js = jsFiles.map(f=>`<script>${f.content}<\/script>`).join("\n")

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

},[files])

return(

<div className="preview-pane">

<iframe
title="preview"
className="preview-frame"
ref={iframeRef}
/>

</div>

)

}

export default PreviewPane