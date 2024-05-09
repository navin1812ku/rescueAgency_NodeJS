const mongoose=require("mongoose");

const address=new mongoose.Schema({
    door_number: String,
    bulding_name: String,
    street: String,
    city: String,
    district: String,
    state: String,
    country:String
});

const AgencyModel=mongoose.model("Agency",new mongoose.Schema({
    agency_name:{ type:String },
    agency_id:{ type:String},
    agency_contact:{ type:String},
    agency_expertise:{ type:Array},
    agency_certificates:{ type:String},
    agency_catetory:{ type:Array},
    agency_address:{ type:address},
    agency_password:{ type:String}
}));

module.exports=AgencyModel;

