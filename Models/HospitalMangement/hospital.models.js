
import mongoose from "mongoose"

const hospitalSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            requied : true,
        },

        addressLine1: {
            type : String,
            requied : true,
        },
        addressLine2: {
            type : String,
            requied : true,
        },

        cityName : {
            type : String
        },

        pinCode : {
            type : String
        },
        // A single hospital can be specialised in more then one field hence defining an array.
        specialization : [
            {
                type : String
            }
        ]
    },
    { timestamps : true}
)

export const Hospital = mongoose.model("Hospital" , hospitalSchema)