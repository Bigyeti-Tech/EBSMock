import React from 'react';
//import './card.css'

export const Card = (props) => (

    <tr>
        <td>
            <p><strong>{props.monster.company.name}</strong></p>
        </td>
        <td>
            <p>{props.monster.address.street}</p>
        </td>
        <td>
            <p>{props.monster.address.city}</p>
        </td>
        <td>
            <p>Lat:{props.monster.address.geo.lat} / Long:{props.monster.address.geo.lng}</p>
        </td>
    </tr>

)