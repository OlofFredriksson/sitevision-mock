module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ["./**/*.js", "!**/coverage/**", "!**/jest.config.js"],
    /* You need to build before running these tests */
    moduleNameMapper: {
        ...require("../dist/mock"),
    },
};
