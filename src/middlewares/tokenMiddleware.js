const jwt = require('jsonwebtoken');

function authMiddleware({Config}){
    return function(req, res, next){
        const token = req.headers["authorization"];
        if(!token){
          next()
        }
      
        jwt.verify(token, Config.JWT_SECRET, (err, decodedToken) => {
          if(err){
            next();
          }
          req.user = decodedToken.user;
          next();
        });
    }
}
module.exports = authMiddleware;