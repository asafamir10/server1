var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
title:String,
description:String,
created:Date

});

module.exports = mongoose.model('product',ProductSchema);
