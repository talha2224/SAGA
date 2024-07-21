import React, { useState } from 'react'
import Imag1 from '../assets/background.png'
import Imag2 from '../assets/azameina-saga-landscape-logo.png'
import Imag3 from '../assets/coin2.png'
import Imag4 from '../assets/Group 46.png'
import Imag9 from '../assets/Group 7.png'
import Imag10 from '../assets/Component 12 – 4 (1).png'
import Imag11 from '../assets/Component 12 – 4 (2).png'
import Imag12 from '../assets/Component 12 – 4 (3).png'

import Imag13 from '../assets/Group 46 (5).png'
import Imag14 from '../assets/Group 46 (1).png'
import Imag15 from '../assets/Group 46 (2).png'
import Imag16 from '../assets/Group 46 (3).png'
import Imag17 from '../assets/Group 46 (4).png'

import BottomNav from '../components/BottomNav'
import { useNavigate } from 'react-router-dom'
import { ImCross } from 'react-icons/im'

const ForceTeamPage = () => {
    const nav = useNavigate()
    const [step, setstep] = useState("team")
    const [showPopup, setshowPopup] = useState(false)
    return (
        <div style={{ backgroundImage: `url(${Imag1})` }} className='w-screen min-h-screen bg-[black] px-[1rem] flex flex-col'>
            <div className='flex justify-center items-center pt-[2rem] flex-col'>
                <img src={Imag2} alt="" className='w-[348px]' />
                <div type="text" className='w-fit gap-x-4 h-[2.3rem] flex justify-between items-center mt-3 rounded-md border bg-[#FFCC00] opacity-80 border-[#FFCC00] bg-transparent px-3 outline-none '>
                    <img src={Imag3} alt="" className='h-[2rem]' />
                    <p className='text-white text-lg'>500000000000</p>
                </div>
            </div>

            <div className='flex justify-around items-center gap-x-3 border border-[#6CF926] mt-8 p-3 rounded-md'>
                <p onClick={() => setstep("task")} className={`text-[#6CF926]  `}>TASK</p>
                <p onClick={() => setstep("league")} className={`text-[#6CF926]`}>LEAGUES</p>
                <p onClick={() => setstep("team")} className={`text-[#6CF926]  `}>TEAMS</p>
            </div>

            {
                step == "task" && (
                    <div>
                        <img onClick={() => setshowPopup(true)} src={Imag4} alt="" className='mt-3' />
                        <img onClick={() => setshowPopup(true)} src={Imag4} alt="" className='mt-3' />
                        <img onClick={() => setshowPopup(true)} src={Imag4} alt="" className='mt-3' />
                        <img onClick={() => setshowPopup(true)} src={Imag4} alt="" className='mt-3' />
                    </div>
                )
            }

            {
                step == "team" && (
                    <div>
                        <img src={Imag10} alt="" className='mt-3' />
                        <img src={Imag11} alt="" className='mt-3' />
                        <img src={Imag12} alt="" className='mt-3' />
                    </div>
                )
            }

            {
                step == "league" && (
                    <div>
                        <img onClick={() => nav("/social")} src={Imag13} alt="" className='mt-3' />
                        <img onClick={() => nav("/social")} src={Imag14} alt="" className='mt-3' />
                        <img onClick={() => nav("/social")} src={Imag15} alt="" className='mt-3' />
                        <img onClick={() => nav("/social")} src={Imag16} alt="" className='mt-3' />
                        <img onClick={() => nav("/social")} src={Imag17} alt="" className='mt-3' />

                    </div>
                )
            }


            <div className='flex-1 flex justify-end items-end mb-[1rem] mt-3' >
                <BottomNav />
            </div>



            {
                showPopup && (
                    <div className='bg-[#0D0B0D]  fixed top-0 left-0 w-screen h-screen z-50 bg-opacity-50 flex jusity-end items-end'>
                        <div className='p-4 w-screen h-[25rem] rounded-tl-[2rem] rounded-tr-[2rem] bg-green-950'>
                            <div onClick={() => setshowPopup(false)} className='flex justify-end'>
                                <ImCross className='text-[#6CF926] rounded-full border border-[#6CF926] text-[2rem] p-1 text-end' />
                            </div>

                            <div className='flex justify-center items-center flex-col mt-3'>
                                <img src={Imag9} alt="" className=' h-[5rem]' />
                                <p className='text-lg text-[#6CF926] mt-2'>YOUR INVITE CODE</p>
                                <p className='text-lg text-[#6CF926] mt-2 text-center'>Share your invite code with friends to earn rewards. Both you and your friend will receive <span className='text-[#FFCC00]'>100 LP</span> for each successful referral. Plus, you'll earn <span className='text-[#FFCC00]'>1%</span> of the LP your referral earns through tapping.</p>
                            </div>

                            <div className='flex justify-center items-center mt-4'>
                                <div className='w-[70%] flex justify-between items-center gap-x-4 border border-[#FFCC00] rounded-md'>
                                    <p className='flex-1 text-center text-xl'>HHDGG6668</p>
                                    <p className='bg-[#FFCC00] text-black text-xl p-2'>COPY</p>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ForceTeamPage

