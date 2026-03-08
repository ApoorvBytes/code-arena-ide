export const languageMap = {
python: 71,
cpp: 54,
c: 50,
java: 62,
javascript: 63
}

export async function runCode(languageId, sourceCode){

const response = await fetch(
"https://ce.judge0.com/submissions?base64_encoded=false&wait=true",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
language_id:languageId,
source_code:sourceCode
})
}
)

return await response.json()

}