import React from 'react'
import Imag1 from '../assets/saga.png'
import Imag2 from '../assets/force.png'
import Imag3 from '../assets/golden.png'
import Imag4 from '../assets/fuel.png'
import Imag5 from '../assets/ranks.png'
import { useNavigate } from 'react-router-dom'
const BottomNav = () => {
    const nav = useNavigate()
    return (
        <div className=' bottom-[3rem] left-0 right-0 flex justify-between items-center gap-x-4  overflow-x-auto z-50 '>

            <div onClick={()=>nav("/saga")}  className='border border-white min-w-[4rem] h-[5rem] rounded-md flex justify-center items-center flex-col'>
                <img src={Imag1} alt="" className='h-[1.5rem]' />
                <p className='text-[#65F926]'>SAGA</p>
            </div>

            <div onClick={()=>nav("/force")} className='border border-[#6CF926] min-w-[4rem] h-[5rem] rounded-md flex justify-center items-center flex-col'>
                <img src={Imag2} alt="" className='h-[1.5rem]' />
                <p className='text-[#65F926]'>FORCE</p>
            </div>
            <div onClick={()=>nav("/play")} className='border border-[#FFCC00] min-w-[4rem] h-[5rem] rounded-md flex justify-center items-center flex-col'>
                <img src={Imag3} alt="" className='h-[1.5rem]' />
                <p className='text-[#FFCC00]'>PLAY</p>
            </div>
            <div onClick={()=>nav("/fuel")} className='border border-[#6CF926] min-w-[4rem] h-[5rem] rounded-md flex justify-center items-center flex-col'>
                <img src={Imag4} alt="" className='h-[1.5rem]' />
                <p className='text-[#65F926]'>FUEL</p>
            </div>
            <div onClick={()=>nav("/rank")} className='border border-[#6CF926] min-w-[4rem] h-[5rem] rounded-md flex justify-center items-center flex-col'>
                <img src={Imag5} alt="" className='h-[1.5rem]' />
                <p className='text-[#65F926]'>RANK</p>
            </div>

        </div>
    )
}

export default BottomNav
