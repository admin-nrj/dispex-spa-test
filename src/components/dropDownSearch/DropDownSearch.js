import React, {useEffect, useRef, useState} from 'react';
import SearchBox from "./SearchBox";
import s from './drop-down-search.module.css';

function DropDownSearch(props) {
    const [showSearchBox, setShowSearchBox] = useState(false);
    const [mouseOverSearchBox, setMouseOverSearchBox] = useState(false);
    const [list, setList] = useState([]);
    const [searchValue, setSearchValue] =useState('');
    
    useEffect(()=>{
        setList(props.list);
    }, [props.list])
    const searchInput = useRef();

    const handlerInputOnFocus = () =>{
        setShowSearchBox(true)
    }
    const handleInputOnBlur = () => {
        if (!mouseOverSearchBox)
            setShowSearchBox(false);
    }

    const onItemClickHandler=(selectedObj) => {
        setSearchValue(selectedObj.name)
        props.onSelect(selectedObj);
        setShowSearchBox(false);
    }
    const handleOnSearchChange=(e)=>{
        setSearchValue(e.target.value)
        // тут возможны варианты например поск сначала строки
        setList(props.list.filter(l=>l.name.toLowerCase().includes(e.target.value.toLowerCase())));
    }



    return (
        <div className={s.dropDownContainer}>
            <div className={s.dropDownSearch}>
                <input type="text" ref={searchInput}
                       value = {searchValue}
                       onChange={handleOnSearchChange}
                       placeholder={props.placeholder}
                       style={{width:props.width}}
                       onFocus={handlerInputOnFocus}
                       onBlur={handleInputOnBlur}
                />
                <SearchBox show={showSearchBox} input={searchInput.current} onItemClickHandler={onItemClickHandler} list={list}
                           onMouseEnter = {()=>setMouseOverSearchBox(true)}
                           onMouseLeave = {()=>setMouseOverSearchBox(false)}
                />
            </div>
        </div>
    );
}

export default DropDownSearch;