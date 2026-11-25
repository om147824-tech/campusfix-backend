const mongoose = require('mongoose');
const user = new mongoose.Schema({name:{type:String,required:true},email:{type:String,required:true,unique:true,lowercase:true},password:{type:String,required:true,select:false},role:{type:String,enum:['user','admin'],default:'user'}},{timestamps:true});
const report = new mongoose.Schema({owner:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true,index:true},category:{type:String,required:true},place:{type:String,required:true},description:{type:String,required:true},photo:{type:String,select:false},latitude:Number,longitude:Number,status:{type:String,enum:['Pendiente','En proceso','Resuelto'],default:'Pendiente'}},{timestamps:true});
module.exports={User:mongoose.model('User',user),Report:mongoose.model('Report',report)};
