const path = require("path");
module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ["./**/*.js", "!**/coverage/**", "!**/jest.config.js"],
    /* You need to build before running these tests */
    moduleNameMapper: {
        ...require("../dist/mock"),
    },
    transform: {
        "\\.js$": [
            "babel-jest",
            { configFile: path.join(__dirname, "../babel.config.js") },
        ],
    },
};
