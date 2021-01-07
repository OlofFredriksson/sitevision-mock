const fs = require("fs-extra");
const pkg = require("./package.json");
const path = require("path");
const glob = require("glob");
const mockFile = {};

glob.sync("dist/**/*.js", { nodir: true }).forEach((filePath) => {
    const name = path.basename(filePath, ".js");
    mockFile[name] = `<rootDir>/node_modules/${pkg.name}/${filePath}`;
});

fs.writeJSONSync("dist/mock.json", mockFile);
