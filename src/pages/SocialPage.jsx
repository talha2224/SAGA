import React, { useState } from 'react'
import Imag1 from '../assets/background.png'
import Imag2 from '../assets/azameina-saga-landscape-logo.png'
import Imag3 from '../assets/coin2.png'
import Imag4 from '../assets/Group 4755555.png'
import Imag5 from '../assets/Group 485555.png'
import Imag6 from '../assets/Group 488766.png'

import BottomNav from '../components/BottomNav'

const SocialPage = () => {
    const [show, setshow] = useState(false)
    return (
        <div style={{ backgroundImage: `url(${Imag1})` }} className='w-screen min-h-screen bg-[black] px-[1rem] flex flex-col'>
            <div className='flex justify-center items-center pt-[2rem] flex-col'>
                <img src={Imag2} alt="" className='w-[348px]' />
                <div type="text" className='w-fit gap-x-4 h-[2.3rem] flex justify-between items-center mt-3 rounded-md border bg-[#FFCC00] opacity-80 border-[#FFCC00] bg-transparent px-3 outline-none '>
                    <img src={Imag3} alt="" className='h-[2rem]' />
                    <p className='text-white text-lg'>500000000000</p>
                </div>
            </div>

            {
                !show ?
                <h1 className='text-[#6CF926] text-xl mt-5'>JOIN OUR SOCIALS</h1>
                :
                <h1 className='text-[#6CF926] text-xl mt-5'>DAILY TASK</h1>

            }
            {
                !show ?
                <p className='mt-3 text-white'>To be eligible for airdrop distribution, joining our social media platforms is required. We regularly share important updates on these channels. Complete all the tasks below [Join Socials] to receive your lumik points rewards.</p>
                :
                <p className='mt-3 text-white'>Complete all the tasks below to increase your lumik points score. Higher scores boost your chances of qualifying for the airdrop distribution.</p>

            }
            <img src={Imag4} alt="" className='mt-3' />
            <h1 className='text-[#6CF926] text-xl mt-2'>YOUR TASKS</h1>
            {
                !show ?
                    <div>
                        <img onClick={()=>setshow(true)} src={Imag5} alt="" className='mt-3' />
                        <img onClick={()=>setshow(true)} src={Imag5} alt="" className='mt-3' />
                        <img onClick={()=>setshow(true)} src={Imag5} alt="" className='mt-3' />
                        <img onClick={()=>setshow(true)} src={Imag5} alt="" className='mt-3' />
                    </div> :
                    <div>
                        <img src={Imag6} alt="" className='mt-3' />
                        <img src={Imag6} alt="" className='mt-3' />
                        <img src={Imag6} alt="" className='mt-3' />
                        <img src={Imag6} alt="" className='mt-3' />
                    </div>

            }

            <div className='flex-1 flex justify-end items-end mb-[1rem] mt-3' >
                <BottomNav />
            </div>

        </div>
    )
}

export default SocialPage

