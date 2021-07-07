module.exports = {
    verbose: true,
    roots: ['<rootDir>/src'],
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy',
      '^components$': '<rootDir>/src/index.tsx',
      '^components(.*)$': '<rootDir>/src/$1',
    },
    testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testPathIgnorePatterns: ['/node_modules/', '/lib/', '/esm/', '/dist/'],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
  };