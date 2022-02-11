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
    const selectedFlat = useSelector(state => state.housingStock.selectedFlat);

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


    if (clients?.length > 0) {
        return (
            <div>
                <div className={s.clientsListAddButton}>
                    <button onClick={onAddHandler}>{'Добавить жильца'}</button>
                </div>
                <div className={s.clientsList}>
                    {clients?.map(c => <ClientsListItem key={c.id} client={c}
                                                        onEditHandler={onEditHandler}
                                                        onDeleteHandler={onDeleteHandler}/>)}
                </div>

                <Modal setIsShow={setDeleteActive} show={isDeleteActive} title={'Клиент будет безвозвратно удалён'}>
                    <div className={s.buttons}>
                        <div onClick={deleteClient}>Удалить</div>
                        <div onClick={() => setDeleteActive(false)}>Отменить</div>
                    </div>
                </Modal>

                <AddEditClient client={clientRef.current} setAddEditActive={setAddEditActive}
                               isAddEditActive={isAddEditActive}/>

            </div>

        );
    } else {
        return (
            <div className={s.clientsList}> {selectedFlat ? 'По этому адресу никого нет' : 'Выберите адрес'}</div>
        )
    }

}

export default React.memo(ClientsList);