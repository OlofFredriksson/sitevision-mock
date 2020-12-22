const fs = require("fs-extra");
const pkg = require("./package.json");
const path = require("path");
const glob = require("glob");
const mockFile = {};

glob.sync("dist/**", { nodir: true }).forEach((filePath) => {
    const name = path.basename(filePath, ".js");
    mockFile[name] = `./node_modules/${pkg.name}/${filePath}`;
});

fs.writeJSONSync("mock.json", mockFile);
