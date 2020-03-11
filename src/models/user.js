const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  }
});

UserSchema.methods.ToJSON = function(){
  let user = this.toObject();
  delete user.password;
  return user;
}

UserSchema.pre('save', async function(next){
  if(!this.isModified('password')){
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;

  next();
})

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');