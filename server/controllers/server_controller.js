var mongoose = require('mongoose');
var User = mongoose.model('User');
var Dashboard = mongoose.model('Dashboard');

module.exports = {
  register: function(req,res){
    var user = new User(req.body);
    user.save(function(err,data){
      if(err){
        res.status(400).send(err)
      }
      else {
        req.session.user = data;
        // console.log("Server controller line 13",req.session.user);
        res.sendStatus(200);
      }
    })
  },
  login: function(req,res){
    User.findOne({email:req.body.email}, function(err,data){
      if(data == null){
        res.status(400).send("User not found.")
      }
      else{
        req.session.user = data;
        res.sendStatus(200);
        console.log(req.body)
      }
    })
  },
  current: function(req,res){
    if(req.session.user){
      res.json(req.session.user);
    }else{
      res.status(401).send("No user in session.");
    }
  },
  getUsers: function(req,res){
    User.find({}, function(err,data){
      if(err){
        console.log(err);
      }
      else{
        res.json(data);
      }
    })
  },
  getBuckets: function(req,res){
    Dashboard.find({}, function(err,data){
      if(err){
        console.log(err);
      }
      else {
        res.json(data);
      }
    })
  },
  createBucket: function(req,res){
    var bucket = new Dashboard(req.body);
    bucket.user = req.session.user._id;
    bucket.save(function(err,data){
      if(err){
        res.status(400).send("Bucket did not add.")
      }
      else {
        res.sendStatus(200);
      }
    })
  },
  logout: function(req,res){
    req.session.destroy();
    res.redirect('/');
  }
}
