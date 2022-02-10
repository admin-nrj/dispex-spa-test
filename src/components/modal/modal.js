import React from 'react';
import s from './modal.module.css'

function Modal({show, setIsShow, title, children}) {

    return (
        <div className={show ? s.modalYesNoContainer + " " + s.active : s.modalYesNoContainer} onClick={()=>setIsShow(false)}>
            <div className={s.form} onClick={e => e.stopPropagation()}>
                <div className={s.title}>
                    <strong>{title}</strong>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Modal;