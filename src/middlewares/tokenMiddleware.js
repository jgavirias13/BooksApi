const jwt = require('jsonwebtoken');

function authMiddleware({Config}){
    return function(req, res, next){
        const token = req.headers["authorization"];
        if(!token){
          return next();
        }
      
        jwt.verify(token, Config.JWT_SECRET, (err, decodedToken) => {
          if(err){
            return next();
          }
          req.user = decodedToken.user;
          return next();
        });
    }
}
module.exports = authMiddleware;