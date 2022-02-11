import {setErrorAC, unSetErrorAC} from "../store/reducers/errorReduser";

export const errorHelper={
    setError:(message)=>{
        return function (dispatch){
            dispatch(setErrorAC(message));
            setInterval(()=>{
                dispatch(unSetErrorAC())
            },5000)
        }
    }
}