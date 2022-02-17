module.exports = {
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',

  setupFilesAfterEnv: [
    './jest.setup',
    'jest-plugin-context/setup',
  ],

  testEnvironment: 'jsdom',

};
