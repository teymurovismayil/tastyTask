import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
    


export const Admin = () => {
    const [info, setinfo] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/products')
            .then(res => setinfo(res.data))
    }, [])

    const deleteElement = (id) =>{
        axios.delete('http://localhost:8000/products/'+id)
    }
    
    return (
        <div className='container d-flex align-items-center tablebox'>
            <table className='mb-5'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Meal</th>
                        <th>Receipt</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        info.map((el,i) => {
                            return (
                                <tr key={i}>
                                    <td>{el.id}</td>
                                    <td>{el.meal}</td>
                                    <td>{el.receipt}</td>
                                    <td>{el.price}</td>
                                    <td><Link to='/edit/+id'><button className='btn btn-outline-secondary'>Edit</button></Link></td>
                                    <td><button className='btn btn-outline-secondary' onClick={()=>deleteElement(id)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
          
        </div>
    )
}
