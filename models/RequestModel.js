const mongoose=require("mongoose");

const RequestModel=mongoose.model("Request",new mongoose.Schema({
    request_member_id:{type:String},
    request_description:{ type:String},
    request_location:{ type:String},
    request_type:{ type:String},
    request_replies:{ type:String},
    request_contact:{ type:String}
}))

module.exports=RequestModel;