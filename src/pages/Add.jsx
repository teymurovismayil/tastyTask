import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

export const Add = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName")} />
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    )
}
