const mongoose=require("mongoose");
const DonateModel=require("../models/DonateModel");

mongoose.connect("mongodb://127.0.0.1:27017/rescue_agencies");

const DonateService={
    add_request:async(request_details)=>{
        var new_request=await DonateModel.create({
            request_id:generateUniqueString(),
            request_type:request_details.request_type,
            specification:request_details.specification,
            quantity:request_details.quantity,
            requested_by:request_details.requested_by,
            requester_contact:request_details.requester_contact,
            request_end_date:request_details.request_end_date
        });
        return new_request;
    },
    delete_request:async(request_id)=>{
        await DonateModel.deleteOne({request_id:request_id});
        return {message:"Request has been deleted"};
    }
};

module.exports=DonateService;

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