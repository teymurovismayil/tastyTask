import React from 'react'
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.min.css';

export const Add = () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className='addPage'>
            <form className='d-flex flex-column w-50 align-items-center' onSubmit={handleSubmit(onSubmit)}>
                <label>Meal
                    <input {...register("meal")} />
                </label>


                <label>Receipt
                    <input {...register("receipt")} />
                </label>

                <label>Price
                    <input {...register("price")} />
                </label>

                <input type="submit" />
            </form>
        </div>

    )
}
