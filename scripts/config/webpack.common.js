const path = require('path');
const { PROJECT_PATH, isDev } = require('../constants');

module.exports = {
    entry: {
        app: path.resolve(PROJECT_PATH, './src/app.js')
    },
    output: {
        filename: `js/[name]${isDev?'':'.[hash:8].'}js`,
        path: path.resolve(PROJECT_PATH, './dist'),
    }
}