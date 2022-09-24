export const arrayFilterEmpty = (array:any[])=> array.filter((x)=>!!x)

export const compileManifest = (content:any) =>{
    const manifest=JSON.parse(content)
    const newManifest = {
        ...manifest,
        content_scripts:[
            {
                ...manifest.content_scripts[0],
                js:['contentScript.js'],
                css:['css/contentScript.css']
            }
        ],
        web_accessible_resources:[
            {
                ...manifest.web_accessible_resources[0],
                resources:['css/contentScript.css']
            }
        ]
    }
    return JSON.stringify(newManifest)
}