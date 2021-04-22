module.exports = {
    collectCoverage: true,
    testPathIgnorePatterns: ["/node_modules/", "integration"],
    collectCoverageFrom: ["./src/**/*.js", "!**/node_modules/**"],
};
