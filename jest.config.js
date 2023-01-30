const config = {
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "preset": "ts-jest",
    "globals": {
        "ts-jest": {
            "diagnostics": true
        }
    },
    "injectGlobals": true,
    "rootDir": ".",
    "setupFiles": [
        "<rootDir>/src/test-helpers/setupTests.ts"
    ],
    "automock": false,
    "transform": {
        "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
        "^.+\\.(js|jsx)$": "babel-jest"
    },
    "moduleNameMapper": {
        "^axios$": require.resolve('axios')
      },
    "testEnvironment": "jsdom",
    "testEnvironmentOptions": {
        "resources": "usable"
    },
    "testTimeout": 20000
}
module.exports = config;
