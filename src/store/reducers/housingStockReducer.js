export const STREETS_RECEIVED='STREETS_RECEIVED';
export const HOUSES_RECEIVED = 'HOUSES_RECEIVED';
export const HOUSE_FLATS_RECEIVED = 'HOUSE_FLATS_RECEIVED';
export const CLIENTS_RECEIVED = 'CLIENTS_RECEIVED';
export const SET_STREET_ID='SET_STREET_ID';
export const SET_HOUSE_ID='SET_HOUSE_ID';
export const SET_FLAT_ID='SET_FLAT_ID';

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

export const setStreetIdAC = (payload) =>({type:SET_STREET_ID, payload})
export const setHouseIdAC = (payload) =>({type:SET_HOUSE_ID, payload})
export const setFlatAC = (payload) =>({type:SET_FLAT_ID, payload})