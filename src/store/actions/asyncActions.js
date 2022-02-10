import {api} from "../../api/apiService";
import {
    addClientAC,
    clientsReceivedAC, clientUnBindAC, editClientAC,
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
    },
    unBindClient(id) {
        return function (dispatch){
            api.unBindClient(id)
                .then(response=>{
                    const respId= response.data?.id ? response.data?.id : id;
                    // почему-то от сервера приходит пустой ответ со статусом 200, но чтобы продемонстрировать удаление из списка
                    // сделаем такую заглушку возможно деструктивные методы специально заблочены
                    dispatch(clientUnBindAC(respId))
                })
                .catch(e=>console.log(e.message))
        }
    },
    editClient(clientData) {
        return function (dispatch, getState){
            const state = getState();
            if (!clientData.phone){
                console.log('error: Поле телефон обязательное')
                return;
            }
            if (state.housingStock.selectedFlatId){
                clientData.addressId=state.housingStock.selectedFlatId
            }else{
                console.log('error: Не выбран адрес')
                return;
            }
            clientData.clientId=clientData.id;
            api.editClient(clientData)
                .then(response=>{
                    if (response.status===200){
                        dispatch(editClientAC(clientData))
                    }else{
                        console.log(`error: ${response.data.message}`);
                    }
                })
                .catch(e=>console.log(e.message))
        }
    },
    addClient(clientData) {
        return function (dispatch, getState){
            const state = getState();
            if (!clientData.phone){
                console.log('error: Поле телефон обязательное')
                return;
            }
            if (state.housingStock.selectedFlatId){
                clientData.bindId=state.housingStock.selectedFlatId
            }else{
                console.log('error: Не выбран адрес')
                return;
            }
            api.addClient(clientData)
                .then(response=>{
                    if (response.data.result==='Ok'){
                        clientData.id=response.data.id
                        dispatch(addClientAC(clientData))
                    }else{
                        console.log(`error: ${response.data.message}`);
                    }
                })
                .catch(e=>console.log(e.message))
        }
    },
}