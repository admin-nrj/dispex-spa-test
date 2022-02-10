import React, {useRef, useState} from 'react';
import SearchBox from "./SearchBox";
import s from './drop-down-search.module.css';

function DropDownSearch(props) {
    const [showSearchBox, setShowSearchBox] = useState(false);
    const searchInput = useRef();

    const handlerInputOnFocus = () =>{
        setShowSearchBox(true)
    }
    const handleInputOnBlur=()=>{
        setShowSearchBox(false)
    }

    const onItemClickHandler=(id) =>{

    }

    return (
        <div className={s.dropDownContainer}>
            <div className={s.dropDownSearch}>
                <input type="text" ref={searchInput} placeholder={props.placeholder} style={{width:props.width}}
                       onFocus={handlerInputOnFocus}
                       onBlur={handleInputOnBlur}
                />
                <SearchBox show={showSearchBox} input={searchInput.current} onItemClickHandler={onItemClickHandler}/>
            </div>
        </div>
    );
}

export default DropDownSearch;