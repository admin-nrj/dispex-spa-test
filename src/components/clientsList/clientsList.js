import React, {useState} from 'react';
import {useSelector} from "react-redux";
import s from './clientsList.module.css'
import ClientsListItem from "./clientsListItem";
import Modal from "../modal/modal";

function ClientsList() {
    const [isDeleteShow, setDeleteShow] = useState(true);

    const clients = useSelector(state=>state.housingStock.clients)

    const deleteClient=()=>{
        setDeleteShow(false)
        //TODO  отвязывание клиента от квартиры

    }

    return (
        <div>
            <div className={s.clientsList}>
                {clients?.map(c => <ClientsListItem key={c.id} client={c} onDeleteHandler={()=>setDeleteShow(true)}/>)}
            </div>
            <Modal setIsShow={setDeleteShow} show={isDeleteShow} title={'Клиент будет безвозвратно удалён'}>
                <div className={s.butons}>
                    <div onClick={deleteClient}>Удалить</div>
                    <div onClick={()=>setDeleteShow(false)}>Отменить</div>
                </div>
            </Modal>
        </div>

    );
}

export default ClientsList;