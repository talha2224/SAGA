import React, { useState } from 'react'
import Imag1 from '../assets/background.png'
import Imag2 from '../assets/azameina-saga-landscape-logo.png'
import Imag3 from '../assets/coin2.png'
import Imag4 from '../assets/Component 10 – 1.png'
import Imag5 from '../assets/Group 52.png'
import Imag6 from '../assets/Component 21 – 1.png'
import Imag7 from '../assets/Group 19.png'
import Imag8 from '../assets/Group 21.png'
import Imag9 from '../assets/Component 21 – 1 (1).png'
import Imag10 from '../assets/Component 21 – 10.png'
import Imag11 from '../assets/Component 21 – 1 (2).png'

import Imag12 from '../assets/Component 19 – 1.png'
import Imag13 from '../assets/Component 19 – 1 (1).png'
import Imag14 from '../assets/Component 19 – 1 (2).png'

import BottomNav from '../components/BottomNav'

const RankPage = () => {

    const [state, setState] = useState("111")

    return (
        <div style={{ backgroundImage: `url(${Imag1})` }} className='w-screen h-screen bg-[black] px-[1rem] flex flex-col'>
            <div className='flex justify-center items-center pt-[2rem] flex-col'>
                <img src={Imag2} alt="" className='w-[348px]' />
                <div type="text" className='w-fit gap-x-4 h-[2.3rem] flex justify-between items-center mt-3 rounded-md border bg-[#FFCC00] opacity-80 border-[#FFCC00] bg-transparent px-3 outline-none '>
                    <img src={Imag3} alt="" className='h-[2rem]' />
                    <p className='text-white text-lg'>500000000000</p>
                </div>

            </div>


            <h1 className='text-xl text-[#6CF926] mt-8'>GAME STATS</h1>
            <img src={Imag4} alt="" className='mt-3' />
            <img src={Imag5} alt="" className='mt-3' />
            <img src={Imag6} alt="" className='mt-3' />
            <h1 className='text-xl text-[#6CF926] mt-8'>RANKINGS</h1>
            <div className='flex justify-between items-center p-2 border border-[#6CF926]'>
                <img onClick={()=>setState("111")} src={Imag7} alt="" />
                <img onClick={()=>setState("other")} src={Imag8} alt="" />
            </div>
            {
                state == "111" ?
                    <div>
                        <img src={Imag9} alt="" className='mt-3' />
                        <img src={Imag10} alt="" className='mt-3' />
                        <img src={Imag11} alt="" className='mt-3' />
                    </div> :
                    <div>
                        <img src={Imag12} alt="" className='mt-3' />
                        <img src={Imag13} alt="" className='mt-3' />
                        <img src={Imag14} alt="" className='mt-3' />
                    </div>

            }
            <div className='flex-1  mt-auto flex justify-end items-end mb-[1rem]' >
                <BottomNav />
            </div>
        </div>
    )
}

export default RankPage
