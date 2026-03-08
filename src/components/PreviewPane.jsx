import { useEffect,useRef } from "react"

function PreviewPane({files}){

const iframeRef = useRef()

useEffect(()=>{

const htmlFile = files.find(f=>f.name==="index.html")

if(!htmlFile) return

const iframe = iframeRef.current
const doc = iframe.contentDocument

doc.open()
doc.write(htmlFile.content)
doc.close()

},[files])

return(

<div className="preview-pane">

<iframe
ref={iframeRef}
className="preview-frame"
title="preview"
/>

</div>

)

}

export default PreviewPane