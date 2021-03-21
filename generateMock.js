const fs = require("fs-extra");
const path = require("path");
const glob = require("glob");
const UglifyJS = require("uglify-js");
const babel = require("@babel/core");

let mock = "";

fs.emptyDirSync("dist");

glob.sync("**/*.js", {
    nodir: true,
    cwd: "src/",
    ignore: "**/*.spec.js",
}).forEach((filePath) => {
    let fileContent = fs.readFileSync(`src/${filePath}`);
    fileContent = babel.transformSync(fileContent);
    fs.outputFileSync(
        `dist/${filePath}`,
        UglifyJS.minify(fileContent.code).code,
        "utf-8"
    );
});

glob.sync("mock/**/*.js", { nodir: true, cwd: "dist" }).forEach((filePath) => {
    const name = path.basename(filePath, ".js");
    mock = `${mock}"^${name}$": path.join(__dirname, "${filePath}"),`;
});
mock = mock.slice(0, -1); // Remove last comma

const minifiedFileContent = UglifyJS.minify(`
var path = require("path");
module.exports={
    ${mock}
};`);

fs.writeFileSync("dist/mock.js", minifiedFileContent.code);
