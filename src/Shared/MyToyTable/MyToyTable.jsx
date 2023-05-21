import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToyTable = (props) => {
  const { name, seller, category, price, quantity, _id } = props.toy || {};
  const serial = props.index;

  const handleDelete = _id => {
    // console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6' ,
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:5000/my-toys/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Toy has been deleted.',
                            'success'
                        )
                        window. location. reload(false);
                    }
                    
                })

        }
    })
}


  return (
    <tr>
      <td></td>
      <td>{serial + 1}</td>
      <td>{seller}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>$ {price}</td>
      <td>{quantity}</td>
      <td>
      <Link to={`update-toy/${_id}`}><button className="btn btn-primary btn-sm">Edit</button></Link>
        <button onClick={() => handleDelete(_id)} className="btn btn-error btn-sm mx-5">Delete</button>
      </td>
    </tr>
  );
};

export default MyToyTable;
