const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const ClubSchema = new Schema({
  name:String,
  info:String,
  meetStart:Number,
  meetLength:Number,
  day:Number,
  freq:Number,
  links:Array,
  tags:Array,
  app:Boolean,
  interactions:Number

},{});

const ClubModel = model('Club', ClubSchema);

module.exports = ClubModel;