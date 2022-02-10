import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import s from './clientsList.module.css'
import ClientsListItem from "./clientsListItem";
import Modal from "../modal/modal";
import {asyncActions} from "../../store/actions/asyncActions";
import AddEditClient from "../addEditClientForm/AddEditClient";

function ClientsList() {
    const [isDeleteActive, setDeleteActive] = useState(false);
    const [isAddEditActive, setAddEditActive] = useState(false);
    const clientRef = useRef({});
    const dispatch = useDispatch();
    const clients = useSelector(state => state.housingStock.clients);

    const onDeleteHandler = (client) => {
        setDeleteActive(true);
        clientRef.current = client;
    }

    const deleteClient = () => {
        setDeleteActive(false)
        if (clientRef.current?.id)
            dispatch(asyncActions.unBindClient(clientRef.current.id))
    }

    const onEditHandler = (client) => {
        clientRef.current = client;
        setAddEditActive(true);
    }
    const onAddHandler = () => {
        clientRef.current = JSON.parse(JSON.stringify({}));
        setAddEditActive(true);
    }


    return (
        <div>
            <button onClick={onAddHandler}>{'Добавить жильца'}</button>
            <div className={s.clientsList}>
                {clients?.map(c => <ClientsListItem key={c.id} client={c} onEditHandler={onEditHandler}
                                                    onDeleteHandler={onDeleteHandler}/>)}
            </div>

            <Modal setIsShow={setDeleteActive} show={isDeleteActive} title={'Клиент будет безвозвратно удалён'}>
                <div className={s.butons}>
                    <div onClick={deleteClient}>Удалить</div>
                    <div onClick={() => setDeleteActive(false)}>Отменить</div>
                </div>
            </Modal>

            <AddEditClient client={clientRef.current} setAddEditActive={setAddEditActive}
                           isAddEditActive={isAddEditActive}/>

        </div>

    );
}

export default ClientsList;