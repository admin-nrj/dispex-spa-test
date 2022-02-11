import React, {useCallback, useEffect, useState} from 'react';
import Modal from "../modal/modal";
import s from "../clientsList/clientsList.module.css";
import ss from './addEditClient.module.css';
import {useDispatch} from "react-redux";
import {asyncActions} from "../../store/actions/asyncActions";

function AddEditClient({client, setAddEditActive, isAddEditActive}) {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [fio, setFIO] = useState('');
    const dispatch = useDispatch();
    const [hasPhoneError, setHasPhoneError] = useState(false);

    function setDefaultData() {
        setPhone('')
        setEmail('')
        setFIO('')
    }

    useEffect(() => {
        if (client.phone) {
            setPhone(client.phone)
            setEmail(client.email)
            setFIO(client.name)
        } else {
            setDefaultData();
        }
    }, [client])


    const saveClientData = useCallback(() => {
        dispatch(asyncActions.editClient({id: client.id, phone, email, name: fio}));
        setAddEditActive(false);
        setDefaultData();
    },[client.id, dispatch, email, fio, phone, setAddEditActive])

    const addClientData = useCallback(() => {
        dispatch(asyncActions.addClient({phone, email, name: fio}))
        setAddEditActive(false);
        setDefaultData();
    },[dispatch, email, fio, phone, setAddEditActive])

    const onSaveHandler = useCallback(() => {
        if (!phone || phone === '') {
            setHasPhoneError(true);
            return
        }
        client.phone ? saveClientData() : addClientData()
    },[addClientData, client.phone, phone, saveClientData])
    
    return (
        <Modal setIsShow={setAddEditActive} show={isAddEditActive}
               title={client.phone ? 'Редактирование данных' : 'Создание и привязка нового жильца'}>
            <div className={ss.addEditForm}>
                <div className={ss.field}>
                    <span className={!hasPhoneError ? `${ss.hide}` : ''}>!</span>
                    <input type={"text"}
                           placeholder={'* Телефон'}
                           value={phone}
                           onChange={(e) => {
                               setHasPhoneError(false);
                               setPhone(e.target.value)
                           }}/>
                </div>
                <div className={ss.field}>
                    <input type={"text"} placeholder={'Email'} value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={ss.field}>
                    <input type={"text"} placeholder={'ФИО'} value={fio} onChange={(e) => setFIO(e.target.value)}/>
                </div>
            </div>
            <div className={s.buttons}>
                <div onClick={onSaveHandler}>Сохранить</div>
                <div onClick={() => setAddEditActive(false)}>Отменить</div>
            </div>

        </Modal>
    );
}

export default React.memo(AddEditClient);