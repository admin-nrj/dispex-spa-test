import React from 'react';
import s from './search-box.module.css';
import SearchBoxItem from "./SearchBoxItem";

function SearchBox(props) {

const getStyle = ()=>{
        if (props.input)
                return {width : props.input?.offsetWidth-2, top: props.input?.offsetHeight};

        return {width : 0, top: 0}
}

    return (
        <div className={props.show ? `${s.searchBox}` : `${s.searchBox} ${s.searchBoxHide}`}
             onMouseEnter={props.onMouseEnter}
             onMouseLeave={props.onMouseLeave}
             style={getStyle()}>
            {props.list?.map(l => <SearchBoxItem key={l.id} l={l} onClickHandler={props.onItemClickHandler}/>)}
        </div>
    );
}

export default SearchBox;