var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = mongoose.Schema({
  name: {type:String,required:true},
  email: {type:String,required:true,unique:true}
}, {timestamps:true})
mongoose.model('User', UserSchema)

var DashboardSchema = mongoose.Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  title: {type:String, required:true},
  description: {type:String, required:true},
  category: {type:String, required:true},
  dones: [{type: Schema.Types.ObjectId, ref: 'User'}],
  pending: [{type: Schema.Types.ObjectId, ref: 'User'}],
}, {timestamps:true})
mongoose.model('Dashboard', DashboardSchema)
