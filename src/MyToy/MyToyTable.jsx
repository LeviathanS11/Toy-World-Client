import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToyTable = ({ toy, setMyToy, myToy }) => {
    const { name, toyName, category, price, quantity, _id } = toy;
    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server-leviathans11.vercel.app/toys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                        }
                        const remaining = myToy.filter(T => T._id !== _id)
                        setMyToy(remaining)
                    })
            }
        })
    }
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
                <Link to={`/update/${_id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default MyToyTable;