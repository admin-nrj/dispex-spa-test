const SET_ERROR='SET_ERROR';
const UNSET_ERROR='UNSET_ERROR';

const defState={
    hasError:false,
    message:''
}

export const errorReducer = (state=defState, action)=>{
    switch (action.type) {
        case SET_ERROR:
            return {...state, hasError: true, message: action.payload}
        case UNSET_ERROR:
            return {...state, hasError: false, message: ''}
        default:
            return state;
    }
}

export const setErrorAC = (payload) =>({type:SET_ERROR,payload});
export const unSetErrorAC = () =>({type:UNSET_ERROR});