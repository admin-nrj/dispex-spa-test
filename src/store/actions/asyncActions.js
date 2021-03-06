import {api} from "../../api/apiService";
import {
    addClientAC,
    clientsReceivedAC, clientUnBindAC, editClientAC,
    house_flatsReceivedAC,
    housesReceivedAC,
    streetsReceivedAC
} from "../reducers/housingStockReducer";
import {errorHelper} from "../../helpers/errorHelper";

export const asyncActions={
    getStreets: () =>{
        return function(dispatch){
            api.getStreets()
                .then(streets=>dispatch(streetsReceivedAC(streets.data)))
                .catch(e=> {
                    dispatch(errorHelper.setError(e.message));
                    console.log(e.message)
                });
        }
    },
    getHouses(id) {
        return function (dispatch){
            api.getHouses(id)
                .then(response=>{
                    dispatch(housesReceivedAC(response.data))
                })
                .catch(e=> {
                    dispatch(errorHelper.setError(e.message))
                    console.log(e.message)
                })
        }
    },
    getHouses_flats(id) {
        return function (dispatch){
            api.getHouse_flats(id)
                .then(response=>{
                    dispatch(house_flatsReceivedAC(response.data))
                })
                .catch(e=> {
                    dispatch(errorHelper.setError(e.message))
                    console.log(e.message)
                })
        }
    },
    getClients(id) {
        return function (dispatch){
            api.getClients(id)
                .then(response=>{
                    dispatch(clientsReceivedAC(response.data))
                })
                .catch(e=> {
                    dispatch(errorHelper.setError(e.message))
                    console.log(e.message)
                })
        }
    },
    unBindClient(id) {
        return function (dispatch){
            api.unBindClient(id)
                .then(response=>{
                    console.log(response)
                    const respId = response.data?.id ? response.data?.id : id;
                    // ????????????-???? ???? ?????????????? ???????????????? ???????????? ?????????? ???? ???????????????? 200, ???? ?????????? ???????????????????????????????????? ???????????????? ???? ????????????
                    // ?????????????? ?????????? ???????????????? ???????????????? ?????????????????????????? ???????????? ???????????????????? ??????????????????
                    dispatch(clientUnBindAC(respId))
                })
                .catch(e=> {
                    dispatch(errorHelper.setError(e.message))
                    console.log(e.message)
                })
        }
    },
    editClient(clientData) {
        return function (dispatch, getState){
            const state = getState();
            if (!clientData.phone){
                dispatch(errorHelper.setError('error: ???????? ?????????????? ????????????????????????'))
                console.log('error: ???????? ?????????????? ????????????????????????')
                return;
            }
            if (state.housingStock.selectedFlat?.id){
                clientData.addressId=state.housingStock.selectedFlat.id
            }else{
                dispatch(errorHelper.setError('error: ???? ???????????? ??????????'))
                console.log('error: ???? ???????????? ??????????')
                return;
            }
            clientData.clientId=clientData.id;
            api.editClient(clientData)
                .then(response=>{
                    if (response.status===200){
                        dispatch(editClientAC(clientData))
                    }else{
                        dispatch(errorHelper.setError(`error: ${response.data.message}`))
                        console.log(`error: ${response.data.message}`);
                    }
                })
                .catch(e=> {
                    dispatch(errorHelper.setError(e.message))
                    console.log(e.message)
                })
        }
    },
    addClient(clientData) {
        return function (dispatch, getState){
            const state = getState();
            if (!clientData.phone){
                dispatch(errorHelper.setError('error: ???????? ?????????????? ????????????????????????'))
                console.log('error: ???????? ?????????????? ????????????????????????')
                return;
            }
            if (state.housingStock.selectedFlat?.id){
                clientData.bindId=state.housingStock.selectedFlat.id
            }else{
                dispatch(errorHelper.setError('error: ???? ???????????? ??????????'))
                console.log('error: ???? ???????????? ??????????')
                return;
            }
            api.addClient(clientData)
                .then(response=>{
                    if (response.data.result==='Ok'){
                        clientData.id=response.data.id
                        dispatch(addClientAC(clientData))
                        // ???????????? ???????????????????? ???? ?????????????????????? ?? ????????????????, ?????????? ?????? ????????...
                        dispatch(asyncActions.editClient(clientData));
                    }else{
                        dispatch(errorHelper.setError(`error: ${response.data.message}`))
                        console.log(`error: ${response.data.message}`);
                    }
                })
                .catch(e=> {
                    dispatch(errorHelper.setError(e.message))
                    console.log(e.message)
                })
        }
    },
}