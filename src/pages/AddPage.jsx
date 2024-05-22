import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.min.css';  
import axios from 'axios';


export const AddPage = () => {

    const { register, handleSubmit } = useForm({defaultValues : async ()=> axios.get('http://localhost:8000/products/')})
    const onSubmit = (data) => {
      axios.post('http://localhost:8000/products/', data)
    }

  return (
    <div className='bg-dark editPageBg'>

    <form onSubmit={handleSubmit(onSubmit)} className='w-50 mb-5'>

      <div className='d-flex flex-column align-items-center gap-3 border border-danger'>
        <div className='d-flex gap-1 mt-5'>
          <label className='text-white'>Yemeyin Adini qeyd edin</label><input {...register("meal")} />
        </div>
        <div className='d-flex gap-5'>
          <label className='text-white'>Resepti Qeyd Edin</label><input  {...register("receipt")} />
        </div>
        <div className='d-flex gap-4'>
          <label className='text-white'>Qiymetini Qeyd Edin</label><input  {...register("price")} />
        </div>
       
        <input className='btn btn-outline-danger' type="submit" />
      </div>

    </form>
    
  </div>
  )
}
