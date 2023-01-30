module.exports = {
    resolver: {
        extraNodeModules: {
            ...require('node-libs-react-native'),
            vm: require.resolve('vm-browserify')
        }
    }
};