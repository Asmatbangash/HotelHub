import mongoose, { Schema } from "mongoose";
import { Review } from "./Review.js";

let ListingData = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  image: {
    type: String,
    set: (v) => (v === "" ? "/imges/defaultHotel.jpg" : v),
  },
  price: {
    type: Number,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

 ListingData.post('findOneAndDelete',async (listings) =>{
  if(listings){
   await Review.deleteMany({_id : {$in: listings.reviews}})
  }
})

export const ListingDB = mongoose.model("ListingDB", ListingData);
