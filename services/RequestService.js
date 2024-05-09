const mongoose=require("mongoose");
const RequestModel=require("../models/RequestModel");

mongoose.connect("mongodb://127.0.0.1:27017/rescue_agencies");

const RequestService={
    add_request:async(request_data)=>{
        var new_request=await RequestModel.create({
            request_member_id:generateUniqueString(),
            request_description:request_data.request_description,
            request_contact:request_data.request_contact,
            request_location:request_data.request_location,
            request_replies:null,
            request_type:request_data.request_type
        });
        return new_request;
    },
    add_reply:async(request_data)=>{
        var old_request=await RequestModel.findOneAndUpdate(
            {request_member_id:request_data.request_member_id},
            {$set:{request_replies:request_data.request_replies}}
        );
        return await RequestModel.findOne({request_member_id:request_data.request_member_id});
    },
    search_request:async(request_member_id)=>{
        return await RequestModel.findOne({request_member_id:request_member_id});
    }
};

module.exports=RequestService;

function generateRandomCharacter() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function generateUniqueString() {
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += generateRandomCharacter();
    }
    return result;
}