import React from 'react';


const TableToy = ({ toy }) => {
    const {
        name,
        seller,
        category,
        price,
        quantity,
        _id
      } = toy || {};

    return (
        <tr>
        <td>{seller}</td> 
        <td>{name}</td> 
        <td>{category}</td> 
        <td>{price}</td> 
        <td>{quantity}</td> 
        <td><button className='btn btn-warning btn-sm'>View details</button></td>
      </tr>
    );
};

export default TableToy;