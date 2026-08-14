import express from 'express';
import { createHotelHandler, getALLHotelHandler, getHotelByIdHandler } from '../../controllers/Hotel.controller';
import { validateRequestBody } from '../../validators';
import { hotelSchema } from '../../validators/hotel.validator';

const hotelRouter = express.Router();

hotelRouter.post('/', validateRequestBody(hotelSchema) ,createHotelHandler);
hotelRouter.get('/:id', getHotelByIdHandler);
hotelRouter.get('/',getALLHotelHandler);
export default hotelRouter; 