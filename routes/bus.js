import express from "express";
import { getBusesByType,getBusesByCompanyName,getBusesByCity,createBus, deleteBus, getBusById, getBuses, updateBus } from "../controllers/busController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router=express.Router();

//Create
router.post('/',verifyAdmin, createBus);
//Update
router.put('/updateBus/:id',verifyAdmin,updateBus);
//Delete
router.post('/deleteBus/:id',verifyAdmin,deleteBus);
//GetAll
router.get('/', getBuses);
//Get
router.get('/getBusById/:id', getBusById);

router.get('/byDepartureCity',getBusesByCity);

router.get('/byBusType',getBusesByType);

router.get('/byCompany',getBusesByCompanyName);
export default router;