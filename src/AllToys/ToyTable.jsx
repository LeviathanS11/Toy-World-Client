import React from 'react';

const ToyTable = ({ toy }) => {
    const { name, toyName, category, price, quantity } = toy;
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
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default ToyTable;