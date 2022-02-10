import React from 'react';
import s from './clientListItem.module.css'

function ClientsListItem({client, onDeleteHandler, onEditHandler}) {
    return (
        <div className={s.clientListCard} onDoubleClick={()=>console.log('double click')}>
            <div className={s.info}>
            <div>{client.id}</div>
            <div>{client.name}</div>
            <div>phone: {client.phone}</div>
            <div>email: {client.email}</div>
            </div>
            <div className={s.butons}>
                <div onClick={()=>onEditHandler(client)}>изменить</div>
                <div onClick={()=>onDeleteHandler(client)}>удалить</div>
            </div>
        </div>
    );
}

export default ClientsListItem;