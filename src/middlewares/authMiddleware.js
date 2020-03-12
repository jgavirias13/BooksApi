const jwt = require('jsonwebtoken');

function authMiddleware({Config, NotAuthorizedException}){
    return function(req, res, next){
        const token = req.headers["authorization"];
        if(!token){
          throw NotAuthorizedException();
        }
      
        jwt.verify(token, Config.JWT_SECRET, (err, decodedToken) => {
          if(err){
            throw NotAuthorizedException();
          }
          req.user = decodedToken.user;
          next();
        });
    }
}
module.exports = authMiddleware;