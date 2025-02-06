import mongoose from "mongoose";

let sampleData = [
    {
        title : 'The Muree Hotel',
        desc : 'All facilities are avaible.',
        image : "/imges/hotel.jpg",
        price : 15000,
        Location : 'Muree',
        country: 'pakistan'
    },
    {
        title : 'The UAE Hotel',
        desc : 'All facilities are avaible.',
        image : "/imges/hotel1.jpg",
        price : 15000,
        Location : 'Muree',
        country: 'pakistan'
    },
    {
        title : 'The Robab Hotel',
        desc : 'All facilities are avaible.',
        image : "/imges/hotel2.jpg",
        price : 15000,
        Location : 'Muree',
        country: 'pakistan'
    },
    {
        title : 'The Mangee Hotel',
        desc : 'All facilities are avaible.',
        image : "/imges/hotel3.jpg",
        price : 15000,
        Location : 'Muree',
        country: 'pakistan'
    },
    {
        title : 'The Naran Hotel',
        desc : 'All facilities are avaible.',
        image : "/imges/hotel4.jpg",
        price : 15000,
        Location : 'Muree',
        country: 'pakistan'
    },
    {
        title : 'The Kaghan Hotel',
        desc : 'All facilities are avaible.',
        image : "/imges/hotel5.jpg",
        price : 15000,
        Location : 'Muree',
        country: 'pakistan'
    },
]

export const initDBdata = sampleData