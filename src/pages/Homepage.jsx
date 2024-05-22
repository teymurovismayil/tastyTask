import React from 'react'
import { Navbar } from '../components/Navbar'
import { Menu } from '../components/Menu'
import { ChefAbout } from '../components/ChefAbout'


export const Homepage = () => {
  return (
    <>
        <Navbar/>
        <ChefAbout/>
        <Menu/>
    </>
  )
}
