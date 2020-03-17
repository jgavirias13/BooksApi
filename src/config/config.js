const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const lodash = require('lodash');

let paramsExt = {};
if(process.env.ENV == 'develop'){
    const params = dotenv.config();
    paramsExt = dotenvExpand(params).parsed;
}else{
    lodash._.each(process.env, (value,key) => {
        paramsExt[key] = value;
    });
}


module.exports = paramsExt;