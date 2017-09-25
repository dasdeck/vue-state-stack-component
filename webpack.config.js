const nodeExternals = require('webpack-node-externals');

const rules = [{
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: ['env']
    }
}, {
    test: /\.vue$/,
    loader: 'vue-loader'
}];

const example = {
    entry: {
        'state-stack': './example/src/browser.js'
    },
    output: {
        filename: './example/dist/app.js',
        libraryTarget: 'var'
    },
    externals: [],
    devtool: 'source-map',
    module: {
        rules: rules
    }
}

const browser = {
    entry: {
        'state-stack': './src/browser.js'
    },
    output: {
        filename: './dist/state-stack-component.browser.js',
        libraryTarget: 'var'
    },
    externals: [nodeExternals()],
    devtool: 'source-map',
    module: {
        rules: rules
    }
}

const common = {
    entry: {
        'state-stack': './src/state-stack-component.js'
    },
    output: {
        filename: './dist/state-stack-component.js',
        libraryTarget: "umd"
    },
    externals: [nodeExternals()],
    devtool: 'source-map',
    module: {
        rules: rules
    }
}

module.exports = [browser, common, example]