import { NextFunction, Request, Response } from "express";
import { createHotelService, getAllHotelServics, getHotelByIdService } from "../services/hotel.service";
import { StatusCodes } from "http-status-codes";

export async function createHotelHandler(req: Request, res: Response, next: NextFunction){
      // call the servics layer
       const hotel = await createHotelService(req.body);
       //send the respnse
       res.status(StatusCodes.CREATED).json({
        message: `Hotel created sucessfully`,
        data: hotel,
        success:true
       });
    
}

export async function getHotelByIdHandler(req: Request, res: Response, next: NextFunction){
      // call the servics layer
       const hotelResponse = await getHotelByIdService(Number(req.params.id));

       //send the respnse
       res.status(StatusCodes.OK).json({
        message: `Hotel found sucessfully`,
        data: hotelResponse,
        success:true
       });
    
}

export async function getALLHotelHandler(req:Request, res:Response, next: NextFunction) {
 //calll the service layer
const hotelResponse  = await getAllHotelServics();
 //send the response
 res.status(StatusCodes.OK).json({
      message:`hotels found sucessfully.`,
      data:hotelResponse,
      success:true
 })

     
}
export async function deleteHotelHandler(req:Request, res:Response, next: NextFunction) {
 res.status(StatusCodes.NOT_IMPLEMENTED).json({
   
 })     
}
export async function updateHotelHandler(req:Request, res:Response, next: NextFunction) {
 res.status(StatusCodes.NOT_IMPLEMENTED).json({

 })     
}