import mongoose from "mongoose";

const BusSchems=new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    departureCity: {
        type: String,
        required: true
    },
    arrivalCity: {
        type: String,
        required: true
    },
    photos: {
        type: [String]
    },
    desc: {
        type: String,
    },   
    rating: {
        type: Number,
        min:1,
        max:5
    },
    fair:{
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default:false 
    },
    noOfSeats:{
        type: Number,
        required: true
    }
    

})


export default mongoose.model('Bus',BusSchems);