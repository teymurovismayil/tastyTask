import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'



export const Admin = () => {
    const [info, setinfo] = useState([])
    const [value, setValue] = useState("")
    const [change, setChange] = useState('def')

    useEffect(() => {
        axios.get('http://localhost:8000/products')
            .then(res => setinfo(res.data))
    }, [])

    const deleteElement = (id) => {
        axios.delete('http://localhost:8000/products/' + id)
    }

    const searchData = info.filter(inf => {
        return inf.meal.toUpperCase().startsWith(value.toUpperCase())
    })

    
    const filterData = () => {
        if (change == 'inc') {
            return [...searchData].sort((a,b)=>a.price-b.price)
        }
        else if (change == 'dec') {
            return searchData.toSorted((a,b)=>b.price-a.price)
        }
        else {
            return searchData
        }
    }

    return (
        <>
            <div className='d-flex flex-column gap-5 align-items-center mt-5'>
                <div className='d-flex justify-content-center gap-5 w-100 '>
                    <input type="text" onInput={(e) => setValue(e.target.value)} placeholder='Search' className='w-50 border border-secondary p-2' />
                    <select className='border-0' onChange={(e)=>setChange(e.target.value)}>
                        <option value='def'>Default</option>
                        <option value='inc'>A-Z</option>
                        <option value='dec'>Z-A</option>
                    </select>
                </div>
                <div className='container tablebox'>
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
                                filterData().map((el, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{el.id}</td>
                                            <td>{el.meal}</td>
                                            <td>{el.receipt}</td>
                                            <td>{el.price}</td>
                                            <td><Link to={"/edit/" + el.id}><button className='btn btn-outline-secondary'>Edit</button></Link></td>
                                            <td><button className='btn btn-outline-secondary' onClick={() => deleteElement(el.id)}>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>

                    <Link to='/AddPage'><button className='btn btn-outline-secondary'>Add</button></Link>

                </div>
            </div>
        </>
    )
}
