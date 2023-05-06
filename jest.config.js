module.exports = {

testMatch: ['<rootDir>/tests/**/*.test.{js,jsx,ts,tsx}'],
setupFilesAfterEnv: 
['@testing-library/react/dont-cleanup-after-each'],
};
