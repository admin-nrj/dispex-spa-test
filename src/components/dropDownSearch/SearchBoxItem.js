import React from 'react';
import s from './listItem.module.css'

function SearchBoxItem(props) {
    // id={l.id} label={l.label} l={l} onClickHandler
    return (
        <div className={s.listItem}
             onClick={()=>props.onClickHandler(props.l)}>
            {props.l?.name}
        </div>
    );
}

export default SearchBoxItem;