import React from 'react';
import { Link } from 'react-router-dom';

const MyToyTable = ({ toy }) => {
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
            <th>
            <button className="btn btn-ghost btn-xs">Update</button>
            </th>
            <th>
            <button className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default MyToyTable;