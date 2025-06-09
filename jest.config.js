module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/chapter1/**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};