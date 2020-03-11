const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

const params = dotenv.config();
const paramsExt = dotenvExpand(params).parsed;

module.exports = paramsExt;