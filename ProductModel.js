var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
title:String,
description:String,
created:Date

});



// html file (js)  ====> node(localhost| heroku ) ====> mongodb
//                 <====                          <====
module.exports = mongoose.model('product',ProductSchema);
