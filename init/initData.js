import mongoose from "mongoose";
import {initDBdata} from './data.js'
import {ListingDB} from '../DB/models/AllListing.js'

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wonderLust');
}

let initDataFunc = async () =>{
await ListingDB.deleteMany({})
await ListingDB.insertMany(initDBdata)
console.log('db was connected')
}


initDataFunc()