const mongoose=require("mongoose");
const AgencyModel=require("../models/AgencyModel");

mongoose.connect("mongodb://127.0.0.1:27017/rescue_agencies");

const AgencyService={
    login:async(agency_id,agency_password)=>{
        var agency=await AgencyModel.findOne({agency_id:agency_id});
        if(agency!=null){
            if(agency.agency_password!=agency_password){
                return { message:"Password is incorrect"};
            }
            else{
                return agency;
            }
        }
        else{
            return { message:"Your agency have't registered"};
        }
    },
    register:async(agency_details)=>{
        var agency=await AgencyModel.findOne({agency_id:agency_details.agency_id});
        if(agency==null){
            var new_agency=await AgencyModel.create({
                agency_name:agency_details.agency_name,
                agency_id:agency_details.agency_id,
                agency_contact:agency_details.agency_contact,
                agency_expertise:agency_details.agency_expertise,
                agency_catetory:agency_details.agency_catetory,
                agency_certificates:agency_details.agency_certificates,
                agency_address:agency_details.agency_address,
                agency_password:agency_details.agency_password
            });
            return new_agency;
        }
        else{
            return { message:"Your agency Already had an account"};
        }
    },
    search_by_expertise:async(expertise_in)=>{
        var agencies=await AgencyModel.find({agency_expertise:expertise_in});
        if(agencies==null){
            return AgencyModel.find();
        }
        return agencies;
    },
    search_by_location:async(location)=>{
        var agencies=await AgencyModel.find({
            $or:[
                {'agency_address.street':location},
                {'agency_address.city':location},
                {'agency_address.district':location},
                {'agency_address.state':location},
                {'agency_address.country':location}
            ]
        })
        return agencies;
    }
}

module.exports=AgencyService;
