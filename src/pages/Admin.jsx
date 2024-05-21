import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export const Admin = () => {
    const [info, setinfo] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/products')
            .then(res => setinfo(res.data))
    }, [])



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Meal</th>
                        <th>Receipt</th>
                        <th>Price</th>
                        <th colSpan={2}>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        info.map((el,i) => {
                            return (
                                <tr key={i}>
                                    <td>{el.meal}</td>
                                    <td>{el.receipt}</td>
                                    <td>{el.price}</td>
                                    <td><Link to='/edit'><button>Edit</button></Link></td>
                                    <td><button>Delete</button></td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
        </div>
    )
}
