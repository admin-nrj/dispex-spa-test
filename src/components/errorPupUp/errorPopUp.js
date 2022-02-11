import React from 'react';
import s from './errorPopup.module.css';

function ErrorPopUp(props) {
    return (
        <div className={ props.show ? `${s.popUpContainer}` : `${s.popUpContainer} ${s.hide}` }>
            <div className={s.text }>
                {props.message}
            </div>
        </div>
    );
}

export default React.memo(ErrorPopUp);