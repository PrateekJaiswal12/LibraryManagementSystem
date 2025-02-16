import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'



const Footer = () => {
  return (
    <div className='w-full text-sm bg-slate-600 text-white cursor-pointer md:flex-row flex-col font-semibold h-20 flex justify-evenly items-center'>
        <p className="hover:font-bold">Rampur Colony , K V Baikunthpur</p>
        <p className="hover:font-bold">Return Policy</p>
        <p className="hover:font-bold">Late Fees</p>
        <p className="hover:font-bold">Library Card Conditions</p>
        <div className="h-full flex justify-evenly items-center">
            <p className="mr-2">Socials</p>
            <YouTube className='mx-2' />
            <Twitter className='mx-2' />
            <Facebook className='mx-2' />
            <Instagram className='mx-2' />
        </div>

    </div>
  )
}



export default Footer
