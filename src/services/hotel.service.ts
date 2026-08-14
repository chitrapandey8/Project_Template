import { createHotelDTO } from "../dto/hotel.dto";
import { createHotel, getAllHotels, getHotelById } from "../Repositories/hotel.repository";



export async function createHotelService(hotelData: createHotelDTO) {
    const hotel = await  createHotel(hotelData);
    return hotel;
}

export async function getHotelByIdService(id : number) {
    const hotel = await getHotelById(id);
    return hotel;
    
}

export async function getAllHotelServics() {
    const hotels = await getAllHotels();
    return hotels;
}
