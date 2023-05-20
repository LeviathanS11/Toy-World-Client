import React from 'react';
import { Link } from 'react-router-dom';

const ToyTable = ({ toy }) => {
    const { name, toyName, category, price, quantity,_id } = toy;
    return (
        <tr>
            <td>
                {name}
            </td>
            <td>
                {toyName}
            </td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/details/${_id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
            </th>
        </tr>
    );
};

export default ToyTable;