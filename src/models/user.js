const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const autoPopulate = require('mongoose-autopopulate');

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
  },
  favoritos: [{
    type: Schema.Types.ObjectId,
    ref: 'Libro',
    autopopulate: true
  }]
});

UserSchema.plugin(autoPopulate);

UserSchema.methods.ToJSON = function(){
  let user = this.toObject();
  delete user.password;
  return user;
}

UserSchema.methods.comparePassword = async function(password){
  let result = await bcrypt.compare(password, this.password);
  return result;
};

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