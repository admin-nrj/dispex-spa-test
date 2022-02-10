const STREETS_RECEIVED='STREETS_RECEIVED';
 const HOUSES_RECEIVED = 'HOUSES_RECEIVED';
 const HOUSE_FLATS_RECEIVED = 'HOUSE_FLATS_RECEIVED';
 const CLIENTS_RECEIVED = 'CLIENTS_RECEIVED';
 const UNBIND_CLIENT = 'UNBIND_CLIENT';
 const ADD_CLIENT = 'ADD_CLIENT';
 const EDIT_CLIENT = 'EDIT_CLIENT';

 const SET_STREET_ID='SET_STREET_ID';
 const SET_HOUSE_ID='SET_HOUSE_ID';
 const SET_FLAT_ID='SET_FLAT_ID';

const defState={
    streets:[],
    houses:[],
    house_flats:[],
    clients:[],
    selectedStreetId:null,
    selectedHouseId:null,
    selectedFlatId:null
}

export const housingStockReducer = (state = defState, action)=>{

    switch (action.type){
        case STREETS_RECEIVED:
            return {...state, streets: [...action.payload]}
        case HOUSES_RECEIVED:
            return {...state, houses: [...action.payload]}
        case HOUSE_FLATS_RECEIVED:
            return {...state, house_flats: [...action.payload]}
        case CLIENTS_RECEIVED:
            return {...state, clients: [...action.payload]}
        case UNBIND_CLIENT:
            return {...state, clients: state.clients.filter(c=>c.id!==action.payload)}
        case ADD_CLIENT:
            return {...state, clients: [action.payload, ...state.clients]}
        case EDIT_CLIENT:
            return {...state, clients: state.clients.map(c=>(c.id===action.payload.id) ? {...action.payload}: c)}
        case SET_STREET_ID:
            return {...state, selectedStreetId: action.payload}
        case SET_HOUSE_ID:
            return {...state, selectedHouseId: action.payload}
        case SET_FLAT_ID:
            return {...state, selectedFlatId: action.payload}
        default: return state;
    }
}

export const streetsReceivedAC = (payload) =>({type:STREETS_RECEIVED, payload})
export const housesReceivedAC = (payload) =>({type:HOUSES_RECEIVED, payload})
export const house_flatsReceivedAC = (payload) =>({type:HOUSE_FLATS_RECEIVED, payload})
export const clientsReceivedAC = (payload) =>({type:CLIENTS_RECEIVED, payload})
export const clientUnBindAC = (payload) =>({type:UNBIND_CLIENT, payload})
export const addClientAC = (payload) =>({type:ADD_CLIENT, payload})
export const editClientAC = (payload) =>({type:EDIT_CLIENT, payload})

export const setStreetIdAC = (payload) =>({type:SET_STREET_ID, payload})
export const setHouseIdAC = (payload) =>({type:SET_HOUSE_ID, payload})
export const setFlatAC = (payload) =>({type:SET_FLAT_ID, payload})