import React, {useEffect} from 'react';
import DropDownSearch from "../dropDownSearch/DropDownSearch";
import s from './addressSelector.module.css';
import {useDispatch, useSelector} from "react-redux";
import {asyncActions} from "../../store/actions/asyncActions";
import {setFlatAC, setHouseIdAC, setStreetIdAC} from "../../store/reducers/housingStockReducer";

function AddressSelector(props) {
    const dispatch = useDispatch();
    const streets = useSelector(state=>state.housingStock.streets);
    const houses = useSelector(state=>state.housingStock.houses);
    const flats = useSelector(state=>state.housingStock.house_flats);

    useEffect(()=>{
        dispatch(asyncActions.getStreets())
    },[dispatch])

    const onStreetSelect=(selObj)=>{
        dispatch(asyncActions.getHouses(selObj.id))
        dispatch(setStreetIdAC(selObj.id))
    }
    const onHouseSelect=(selObj)=>{
        dispatch(asyncActions.getHouses_flats(selObj.id))
        dispatch(setHouseIdAC(selObj.id))
    }
    const onFlatSelect=(selObj)=>{
        dispatch(setFlatAC(selObj.id))
        dispatch(asyncActions.getClients(selObj.id))
    }

    return (
        <div className={s.addressSelector}>
            <div>* Адрес:</div>
            <DropDownSearch placeholder={'Улица'} width={200} list={streets} onSelect={onStreetSelect}/>
            <DropDownSearch placeholder={'Дом'} width={100} list={houses} onSelect={onHouseSelect}/>
            <DropDownSearch placeholder={'Кв'} width={100} list={flats} onSelect={onFlatSelect}/>
        </div>
    );
}

export default AddressSelector;