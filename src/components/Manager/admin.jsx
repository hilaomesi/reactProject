import React from 'react';
import { Link } from "react-router-dom";
import { getAllServices } from '../../api/Service.api'


export const Admin = () => {


    return (

        <div>
            <h1>my business</h1>
           <li>
           <Link to={'/aboutAs'}>About us</Link>
           </li>
           <li>
           <Link to={'/Services'}>show the services of the business</Link>
           </li>
           <li>
            <Link to={'/ordersManager'}>Management of meetings</Link>
            </li>
            <li>
            <Link to={'/customersBusiness'}>the customers of the business</Link>
            </li>
        </div>
    )

}


