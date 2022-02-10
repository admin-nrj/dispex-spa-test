import React from 'react';
import {useSelector} from "react-redux";

function ClientsList(props) {
    const clients = useSelector(state=>state.housingStock.clients)
    return (
        <div>
            {clients?.map(c=><div key={c.id}>{`${c.id} ${c.name} ${c.phone}`}</div>)}
        </div>
    );
}

export default ClientsList;