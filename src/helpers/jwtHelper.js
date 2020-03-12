const jwt = require('jsonwebtoken');

function JwtHelper({Config}){
    return (user) => {
        return jwt.sign(user, Config.JWT_SECRET, {expiresIn: '4h'});
    };
}

module.exports = JwtHelper;