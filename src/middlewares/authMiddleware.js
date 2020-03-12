const jwt = require('jsonwebtoken');
const config = require('../config/config');
const NotAuthorizedException = require('../helpers/notAuthorizedException');

function authMiddleware(){
    return function(req, res, next){
        const token = req.headers["authorization"];
        if(!token){
          throw new NotAuthorizedException();
        }
      
        jwt.verify(token, config.JWT_SECRET, (err, decodedToken) => {
          if(err){
            throw new NotAuthorizedException();
          }
          req.user = decodedToken.user;
          next();
        });
    }
}
module.exports = authMiddleware;