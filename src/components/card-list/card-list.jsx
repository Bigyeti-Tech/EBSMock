import React from 'react';
import { Card } from '../card/card';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CardList = props => (
    <div className="card-list">
        <table>
            <thead style={{ borderBottom: "1px black solid" }}>
                <tr>
                    <th><h4>Company Name</h4></th>
                    <th><h4>Address</h4></th>
                    <th><h4>City</h4></th>
                    <th><h4>Location</h4></th>
                </tr>
            </thead>
            <tbody>
                {props.monsters.map(monster => (
                    <Card key={monster.id} monster={monster} />
                ))}
            </tbody>
        </table>

    </div>
);