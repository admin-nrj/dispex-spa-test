import React, {useEffect, useRef, useState} from 'react';
import SearchBox from "./SearchBox";
import s from './drop-down-search.module.css';

function DropDownSearch(props) {
    const [showSearchBox, setShowSearchBox] = useState(false);
    const [mouseOverSearchBox, setMouseOverSearchBox] = useState(false);
    const [list, setList] = useState([]);
    const [value, setValue] = useState((props.value?.name) ? props.value?.name : '');
    
    useEffect(()=>{
        setList(props.list);
        setValue((props.value?.name) ? props.value?.name : '');
    }, [props.list, props.value?.name]);


    const searchInput = useRef();

    const handlerInputOnFocus = () =>{
        setShowSearchBox(true)
    }
    const handleInputOnBlur = () => {
        if (!mouseOverSearchBox)
            setShowSearchBox(false);
    }

    const onItemClickHandler=(selectedObj) => {
        props.onSelect(selectedObj);
        setShowSearchBox(false);
    }
    const handleOnSearchChange=(e)=>{
        setValue(e.target.value)
        // тут возможны варианты например поск сначала строки
        setList(props.list.filter(l=>l.name.toLowerCase().includes(e.target.value.toLowerCase())));
    }



    return (
        <div className={s.dropDownContainer}>
            <div className={s.dropDownSearch}>
                <input type="text" ref={searchInput}
                       value = {value}
                       onChange={handleOnSearchChange}
                       placeholder={props.placeholder}
                       style={{width:props.width}}
                       onFocus={handlerInputOnFocus}
                       onBlur={handleInputOnBlur}
                />
                <SearchBox show={showSearchBox}
                           input={searchInput.current}
                           onItemClickHandler={onItemClickHandler}
                           list={list}
                           onMouseEnter = {()=>setMouseOverSearchBox(true)}
                           onMouseLeave = {()=>setMouseOverSearchBox(false)}
                />
            </div>
        </div>
    );
}

export default DropDownSearch;