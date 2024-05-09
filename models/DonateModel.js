const mongoose=require("mongoose");

const DonateModel=mongoose.model("donate",new mongoose.Schema({
    request_id:{type:String, unique:true},
    request_type:{type:String},
    specification:{type:String},
    quantity:{type:String},
    requested_by:{type:String},
    requester_contact:{type:String},
    request_end_date:{type:String}
}))

module.exports=DonateModel;