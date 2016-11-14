import multiEntry from "rollup-plugin-multi-entry";

let entryPoint = require("./rollup_entry.json");

class DebugInfoRoll {
    constructor(options){
        this.options = options;
    }
    resolveId(id, from){
        console.log(id, from);
    }
}

const debugInfoRoll = (config) => new DebugInfoRoll(config);

export default {
    entry: {
        include: entryPoint.include,
        //exclude: [
            //"rollup.config.js",
            //"bundle.all.js",
            //"postinstall.js",
            //"hooks/**/*.js",
            //"node_modules/**/*.js"
        //]
    },
    dest: "bundle.all.js",
    format: "cjs",
    sourceMap: "inline",
    external: ["@angular"],
    treeshake: false,
    plugins: [
        //debugInfoRoll(),
        multiEntry()
    ]
}
