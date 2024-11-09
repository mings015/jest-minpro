// jest.config.cjs
module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@/helper/(.*)$": "<rootDir>/src/helper/$1",
    "^@/store/(.*)$": "<rootDir>/src/store/$1",
    "^@/lib/(.*)$": "<rootDir>/src/lib/$1",
    "^@/routes/(.*)$": "<rootDir>/src/routes/$1",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$":
      "<rootDir>/src/__test__/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,jsx}",
    "!<rootDir>/src/assets/**",
    "!<rootDir>/src/main.jsx",
    "!<rootDir>/src/App.jsx",
    "!<rootDir>/src/**/*.d.ts",
  ],
  coverageProvider: "v8",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  testEnvironmentOptions: {
    url: "http://localhost",
  },
};
