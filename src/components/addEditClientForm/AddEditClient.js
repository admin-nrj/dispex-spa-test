import React, {useEffect, useState} from 'react';
import Modal from "../modal/modal";
import s from "../clientsList/clientsList.module.css";
import {useDispatch} from "react-redux";
import {asyncActions} from "../../store/actions/asyncActions";

function AddEditClient({client, setAddEditActive, isAddEditActive}) {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [fio, setFIO] = useState('');
    const dispatch = useDispatch();

    function setDefaultData() {
        setPhone('')
        setEmail('')
        setFIO('')
    }

    useEffect(()=>{
        if (client.phone){
            setPhone(client.phone)
            setEmail(client.email)
            setFIO(client.name)
        }else{
            setDefaultData();
        }
    },[client])


    const saveClientData = () => {
        dispatch(asyncActions.editClient({id: client.id, phone,email,name:fio}));
        setAddEditActive(false);
        setDefaultData();
    }
    const addClientData = () => {
        dispatch(asyncActions.addClient({phone,email,name:fio}))
        setAddEditActive(false);
        setDefaultData();
    }

    return (
        <Modal setIsShow={setAddEditActive} show={isAddEditActive}
               title={client.phone ? 'Редактирование данных' : 'Создание и привязка нового жильца'}>
            <div>
                <input type={"text"} placeholder={'Телефон'} value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <div>
                <input type={"text"} placeholder={'Email'} value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <input type={"text"} placeholder={'ФИО'} value={fio} onChange={(e) => setFIO(e.target.value)}/>
            </div>
            <div className={s.butons}>
                <div onClick={client.phone ? saveClientData : addClientData}>Сохранить</div>
                <div onClick={() => setAddEditActive(false)}>Отменить</div>
            </div>
        </Modal>
    );
}

export default React.memo(AddEditClient);