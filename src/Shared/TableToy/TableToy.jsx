import React from 'react';
import { Link } from 'react-router-dom';


const TableToy = (props) => {
  const {name, seller, category, price, quantity, _id } = props.toy || {};
  const serial = props.index;

    return (
        <tr>
        <td>{serial + 1}</td> 
        <td>{seller}</td> 
        <td>{name}</td> 
        <td>{category}</td> 
        <td>$ {price}</td> 
        <td>{quantity}</td> 
        <td><Link to={`toy/${_id}`}><button className='btn btn-warning btn-sm'>View details</button></Link></td>
      </tr>
    );
};

export default TableToy;