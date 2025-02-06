import mongoose from "mongoose";

let reviewsSchema = new mongoose.Schema({
    comment : String, 
    rating : {
        type : Number,
        min : 0, 
        max : 5, 
    },
    createdAt : {
        type: Date, 
        default: Date.now()
    }
})

export const Review = mongoose.model("Review", reviewsSchema);