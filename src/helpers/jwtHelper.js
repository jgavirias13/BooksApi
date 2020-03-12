const jwt = require('jsonwebtoken');

exports = function({Config}){
    return (user) => {
        return jwt.sign(user, Config.JWT_SECRET, {expiresIn: '4h'});
    };
}