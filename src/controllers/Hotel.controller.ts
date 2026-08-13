import { NextFunction, Request, Response } from "express";
import { createHotelService, getHotelByIdService } from "../services/hotel.service";

export async function createHotelHandler(req: Request, res: Response, next: NextFunction){
      // call the servics layer
       const hotel = await createHotelService(req.body);
       //send the respnse
       res.status(201).json({
        message: `Hotel created sucessfully`,
        data: hotel,
        success:true
       });
    
}

export async function getHotelByIdHandler(req: Request, res: Response, next: NextFunction){
      // call the servics layer
       const hotelResponse = await getHotelByIdService(Number(req.params.id));

       //send the respnse
       res.status(201).json({
        message: `Hotel found sucessfully`,
        data: hotelResponse,
        success:true
       });
    
}

