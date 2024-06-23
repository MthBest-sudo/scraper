import * as htmlparser2 from "htmlparser2";

export const parse=(val:string)=>{

    const data: string[] = []
    let inScriptTag = false; // Flag to track if we're inside a <script> tag
    const parser = new htmlparser2.Parser({
        onopentag(name, attributes) {
            /*
             * This fires when a new tag is opened.
             *
             * If you don't need an aggregated `attributes` object,
             * have a look at the `onopentagname` and `onattribute` events.
             */
            if (name === "script") {
                inScriptTag= true
            }
        },
        ontext(text) {
            if (inScriptTag) {
                data.push(text)
            } 
        },
        onclosetag(tagname) {
            if (tagname === "script") {
                inScriptTag=false
            }
    }},{xmlMode:true}
)
    parser.write(val)
    parser.end()
    return data
}