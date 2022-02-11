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
    },
    unBindClient(id) {
        return $api.delete(`/HousingStock/bind_client/${id}`)
    },
    addClient(clientData) {
        return $api.post('/HousingStock/client',clientData)
    },

    editClient(clientData) {
        return $api.put('/HousingStock/bind_client',clientData)
    }
}