const mongoose=require("mongoose");
const UserModel=mongoose.model("User",new mongoose.Schema({
    e_mail:{ type:String, required:true, unique:true},
    name:{ type:String, required:true},
    contact:{ type:String, required:true},
    password:{ type:String, required:true}
}))
///

module.exports=UserModel;