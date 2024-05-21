import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Menu = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/products')
            .then(res => setdata(res.data))
    }, [])
    return (
        <>

            <section id='menu'>
                <div className='menu__header'>
                    <span>OUR MENU</span>
                    <h2>Discover Our Exclusive Menu</h2>
                </div>

                <div className="container">
                    <div className="row">
                        {
                            data.map((element, i) => {
                                return (
                                    <div className="col-12 col-lg-6 mb-2">
                                        <div className='menu-item'>
                                            <div className='card-container'>
                                                <div className="image">
                                                    <img src={element.image} alt="" />
                                                </div>
                                                <div className='test'>
                                                    <h3>{element.meal}</h3>
                                                    <p>{element.receipt}</p>
                                                </div>
                                            </div>
                                            <h1>{element.price}</h1>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

              
            
            </section>
        </>
    )
}
