
import mongoose from "mongoose"

const patientSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
        },

        diagonsedwith : {
            type : String ,
            required : true,
        },

        address : {
           type : String ,
           required : true,
        },

        age : {
            type : Number
        },

        bloodGroup : {
            type : String,
        },

        gender : {
            type : String,
            enum : ['Male' , 'Female' , 'Others'],
            required : true
        },

        addmitedIn : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Hospital"
        }
    },
    { timestamps : true}
)

export const Patient = mongoose.model("Patient" , patientSchema)