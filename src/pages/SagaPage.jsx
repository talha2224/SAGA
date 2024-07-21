import React, { useState } from 'react'
import Imag1 from '../assets/background.png'
import Imag2 from '../assets/azameina-saga-landscape-logo.png'
import Imag3 from '../assets/coin2.png'
import Imag4 from '../assets/Group 29.png'
import Imag5 from '../assets/Group 52.png'
import Imag6 from '../assets/Component 21 – 1.png'
import Imag7 from '../assets/Group 23.png'
import Imag8 from '../assets/Group 24.png'
import Imag9 from '../assets/Group 25.png'
import Imag10 from '../assets/Group 25 (2).png'
import Imag11 from '../assets/Group 25 (1).png'
import BottomNav from '../components/BottomNav'

const SagaPage = () => {

    return (
        <div style={{ backgroundImage: `url(${Imag1})` }} className='w-screen min-h-screen bg-[black] px-[1rem] flex flex-col'>
            <div className='flex justify-center items-center pt-[2rem] flex-col'>
                <img src={Imag2} alt="" className='w-[348px]' />
                <div type="text" className='w-fit gap-x-4 h-[2.3rem] flex justify-between items-center mt-3 rounded-md border bg-[#FFCC00] opacity-80 border-[#FFCC00] bg-transparent px-3 outline-none '>
                    <img src={Imag3} alt="" className='h-[2rem]' />
                    <p className='text-white text-lg'>500000000000</p>
                </div>

                <img src={Imag4} alt="" className='mt-8' />


                <img src={Imag5} alt="" className='mt-3' />
                <img src={Imag6} alt="" className='mt-3' />
                <img src={Imag7} alt="" className='mt-3' />
                <img src={Imag8} alt="" className='mt-3' />
                <img src={Imag9} alt="" className='mt-3' />
                <img src={Imag10} alt="" className='mt-3' />
                <img src={Imag11} alt="" className='mt-3' />


            </div>

            <div className='flex-1   flex justify-end items-end mb-[1rem] mt-4' >
                <BottomNav />
            </div>
        </div>
    )
}

export default SagaPage
