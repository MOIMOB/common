export default {
    // ...
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': 'ts-jest'
    },
    extensionsToTreatAsEsm: ['.ts']
};
