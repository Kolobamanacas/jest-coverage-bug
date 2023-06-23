export default {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,ts}'],
  coveragePathIgnorePatterns: ['.config.ts$'],
  coverageDirectory: './coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 100,
      lines: 50,
      statements: 50,
    }
  },
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
}
