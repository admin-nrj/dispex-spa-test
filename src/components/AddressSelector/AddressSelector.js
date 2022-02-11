import React, {useEffect} from 'react';
import DropDownSearch from "../dropDownSearch/DropDownSearch";
import s from './addressSelector.module.css';
import {useDispatch, useSelector} from "react-redux";
import {asyncActions} from "../../store/actions/asyncActions";
import {setDefaultAC, setFlatAC, setHouseAC, setStreetAC} from "../../store/reducers/housingStockReducer";

function AddressSelector() {
    const dispatch = useDispatch();
    const streets = useSelector(state=>state.housingStock.streets);
    const houses = useSelector(state=>state.housingStock.houses);
    const flats = useSelector(state=>state.housingStock.house_flats);

    const street = useSelector(state=>state.housingStock.selectedStreet);
    const house = useSelector(state=>state.housingStock.selectedHouse);
    const flat = useSelector(state=>state.housingStock.selectedFlat);

    useEffect(()=>{
        dispatch(asyncActions.getStreets())
    },[dispatch])

    const onStreetSelect=(selObj)=>{
        dispatch(setStreetAC(selObj))
        dispatch(asyncActions.getHouses(selObj.id))
    }
    const onHouseSelect=(selObj)=>{
        dispatch(setHouseAC(selObj))
        dispatch(asyncActions.getHouses_flats(selObj.id))
    }
    const onFlatSelect=(selObj)=>{
        dispatch(setFlatAC(selObj))
        dispatch(asyncActions.getClients(selObj.id))
    }

    function clearFields() {
        dispatch(setDefaultAC())
        dispatch(asyncActions.getStreets())
    }


    return (
        <div className={s.addressSelector}>
            <div>* Адрес:</div>
            <DropDownSearch placeholder={'Улица'} width={200} list={streets} value = {street} onSelect={onStreetSelect}/>
            <DropDownSearch placeholder={'Дом'} width={100} list={houses} value = {house } onSelect={onHouseSelect}/>
            <DropDownSearch placeholder={'Кв'} width={100} list={flats} value = {flat} onSelect={onFlatSelect}/>
            <button className={s.clearButton} onClick={clearFields} >Очистить</button>
        </div>
    );
}

export default AddressSelector;