const body_parser=require("body-parser");
const cors=require("cors");
const express = require("express");

const UserRouter=require("./routers/UserRouter");
const AgencyRouter=require("./routers/AgencyRouter");
const DonateRouter=require('./routers/DonateRouter');
const RequestRouter=require("./routers/RequestRouter");

const app=express();

app.use(body_parser.json());
app.use(cors());
app.use(UserRouter);
app.use(AgencyRouter);
app.use(DonateRouter);
app.use(RequestRouter);

app.listen(8081,()=>{
    console.log("Server started!!!")
});