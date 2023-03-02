import Bus from "../models/Bus.js";

export const createBus=async(req,res,next)=>{
    const newBus = new Bus(req.body);
    try {
        const savedBus = await newBus.save();
        res.status(200).json({savedBus: savedBus});
    } catch (error) {
        res.status(505).json({error: error});
    }
}

export const getBuses=async(req,res,next)=>{
    try {
        const AllBuses = await Bus.find();
        res.status(200).json({Bus: AllBuses});
    } catch (error) {
        next(error);
    }
}

export const getBusesByCity=async(req,res,next)=>{
    const city=req.query.cities.split(",");
    try {
        const Busd = await Bus.find({departureCity:city[0],arrivalCity:city[1]});
        res.status(200).json({Busd});
    } catch (error) {
        next(error);
    }
}

export const getBusesByType=async(req,res,next)=>{
    const busType=req.query.busType;
    try {
        const busByType=await Bus.find({type:busType});
        res.status(200).json({Bus: busByType});
    } catch (error) {
        next(error);
    }
}

export const getBusesByCompanyName=async(req,res,next)=>{
    const companyName=req.query.company;
    try {
        const busByCompany=await Bus.find({company:companyName});
        res.status(200).json({Bus: busByCompany});
    } catch (error) {
        next(error);
    }
}


export const getBusById=async(req,res,next)=>{
    try {
        const BusById = await Bus.findById(req.params.id);
        res.status(200).json({BusById: BusById});
    } catch (error) {
        next(error);
    }
}

export const updateBus=async(req,res,next)=>{
    try {
        const UpdatedBus = await Bus.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({UpdatedBus: UpdatedBus});
    } catch (error) {
        next(error);
    }
}

export const deleteBus=async(req,res,next)=>{
    try {
        await Bus.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Bus deleted"});
    } catch (error) {
        next(error);
    }
}