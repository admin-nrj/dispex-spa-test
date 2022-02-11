const STREETS_RECEIVED='STREETS_RECEIVED';
 const HOUSES_RECEIVED = 'HOUSES_RECEIVED';
 const HOUSE_FLATS_RECEIVED = 'HOUSE_FLATS_RECEIVED';
 const CLIENTS_RECEIVED = 'CLIENTS_RECEIVED';
 const UNBIND_CLIENT = 'UNBIND_CLIENT';
 const ADD_CLIENT = 'ADD_CLIENT';
 const EDIT_CLIENT = 'EDIT_CLIENT';
const SET_DEFAULT='SET_DEFAULT';
 const SET_STREET='SET_STREET';
 const SET_HOUSE='SET_HOUSE';
 const SET_FLAT='SET_FLAT';

const defState={
    streets:[],
    houses:[],
    house_flats:[],
    clients:[],
    selectedStreet:null,
    selectedHouse: null,
    selectedFlat:null,
    loading:false,
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
        case SET_STREET:
            return {...state, selectedStreet: {...action.payload}, selectedHouse: null, selectedFlat: null, clients: [] }
        case SET_HOUSE:
            return {...state, selectedHouse: {...action.payload}, selectedFlat: null, clients: []}
        case SET_FLAT:
            return {...state, selectedFlat: {...action.payload}}
        case SET_DEFAULT:
            return {...defState}
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
export const setDefaultAC = () =>({type: SET_DEFAULT});
export const setStreetAC = (payload) =>({type:SET_STREET, payload})
export const setHouseAC = (payload) =>({type:SET_HOUSE, payload})
export const setFlatAC = (payload) =>({type:SET_FLAT, payload})