const path = require("path");

module.exports = {
    collectCoverage: false,
    moduleNameMapper: {
        ...require("../dist/mock"),
        "^sitevision-mock/(.+)$": "<rootDir>../$1",
    },
    transform: {
        "\\.js$": [
            "babel-jest",
            { configFile: path.join(__dirname, "../babel.config.js") },
        ],
    },
};
