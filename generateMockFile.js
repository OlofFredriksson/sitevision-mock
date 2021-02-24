const fs = require("fs-extra");
const path = require("path");
const glob = require("glob");
let mock = "";

glob.sync("mock/**/*.js", { nodir: true, cwd: "dist" }).forEach((filePath) => {
    const name = path.basename(filePath, ".js");
    mock = `${mock}"^${name}$": path.join(__dirname, "${filePath}"),`;
});
mock = mock.slice(0, -1); // Remove last comma

const fileContent = `
var path = require("path");
module.exports={
    ${mock}
};`;

fs.writeFileSync("dist/mock.js", fileContent);
