import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.min.css';  
import { useParams } from 'react-router';
import axios from 'axios';



export const Edit = () => {

  const { register, handleSubmit } = useForm({defaultValues : async ()=> axios.get('http://localhost:8000/products/'+id)})
  const onSubmit = (data) => {
    axios.patch('http://localhost:8000/products/'+id, data)
  }

  const {id} = useParams();
  const [info, setinfo] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8000/products/' + id)
      .then(res => setinfo(res.data))
  }, [])




  return (
    <div className='bg-dark editPageBg'>

      <form onSubmit={handleSubmit(onSubmit)} className='w-50 mb-5'>

        <div className='d-flex flex-column align-items-center gap-3 border border-danger'>
          <div className='row w-100 gap-1 mt-5'>
            <label className='text-white'>Yemeyin Adini qeyd edin</label><input defaultValue={info.meal} {...register("meal")} />
          </div>
          <div className='row w-100'>
            <label className='text-white'>Resepti Qeyd Edin</label><input defaultValue={info.receipt} {...register("receipt")} />
          </div>
          <div className='row w-100'>
            <label className='text-white'>Qiymetini Qeyd Edin</label><input defaultValue={info.price} {...register("price")} />
          </div>
          <input className='btn btn-outline-danger' type="submit" />
        </div>

      </form>
      
    </div>
  )
}
