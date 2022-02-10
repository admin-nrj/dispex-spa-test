import {$api} from "../http";

export const api = {
    getStreets: async ()=>{
        return $api.get('/Request/streets');
    },
    getHouses(id) {
        return $api.get(`/Request/houses/${id}`);
    },
    getHouse_flats(id) {
        return $api.get(`/Request/house_flats/${id}`);
    },
    getClients(id) {
        return $api.get(`/HousingStock/clients`, {params:{addressId:id}});
    }
}