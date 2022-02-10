import {api} from "../../api/apiService";
import {
    clientsReceivedAC,
    house_flatsReceivedAC,
    housesReceivedAC,
    streetsReceivedAC
} from "../reducers/housingStockReducer";

export const asyncActions={
    getStreets: () =>{
        return function(dispatch){
            api.getStreets()
                .then(streets=>dispatch(streetsReceivedAC(streets.data)))
                .catch(e=>console.log(e.message));
        }
    },
    getHouses(id) {
        return function (dispatch){
            api.getHouses(id)
                .then(response=>{
                    dispatch(housesReceivedAC(response.data))
                })
                .catch(e=>console.log(e.message))
        }
    },
    getHouses_flats(id) {
        return function (dispatch){
            api.getHouse_flats(id)
                .then(response=>{
                    dispatch(house_flatsReceivedAC(response.data))
                })
                .catch(e=>console.log(e.message))
        }
    },
    getClients(id) {
        return function (dispatch){
            api.getClients(id)
                .then(response=>{
                    dispatch(clientsReceivedAC(response.data))
                })
                .catch(e=>console.log(e.message))
        }
    }
}