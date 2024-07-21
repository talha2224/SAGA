import React, { useState } from 'react'
import Imag2 from '../assets/background.png'
import Imag1 from '../assets/coin2.png'
import Imag3 from '../assets/azameina-saga-landscape-logo.png'
import G1 from '../assets/g1.png'
import G2 from '../assets/g2.png'
import G3 from '../assets/g3.png'
import G4 from '../assets/g4.png'
import G5 from '../assets/g5.png'
import G6 from '../assets/full-charge.png'
import G7 from '../assets/auto-miner.png'
import G8 from '../assets/multiplier.png'
import G9 from '../assets/energy-capacity.png'
import G10 from '../assets/fuel-speed.png'
import BottomNav from '../components/BottomNav'
import { ImCross } from 'react-icons/im'

const FuelPage = () => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState({ image: "", heading: "", description: "",btn:"",btn2:null })
    return (
        <div style={{ backgroundImage: `url(${Imag2})` }} className='w-screen min-h-screen bg-black  px-[1rem] flex flex-col '>

            <div className='flex justify-center items-center pt-[2rem] flex-col'>
                <p className='text-[#6CF926] text-lg w-[90%]'>FUEL SPEED</p>
                <div className='flex justify-between items-center w-[90%] my-3'>

                    <div className='flex items-center gap-x-2'>
                        <img src={Imag1} alt="" className='h-[1.5rem]' />
                        <p className='text-white'>500</p>
                        <div className='w-[1px] h-[1.5rem] bg-[#6CF926]'></div>
                        <p className='text-[#6CF926]'>LVL 1</p>

                    </div>

                    <div>
                        <img src={Imag3} alt="" className='h-[1rem]' />
                    </div>
                </div>
                <input type="text" className='w-[13rem] h-[2.3rem] mt-3 rounded-md border border-[#FFCC00] bg-transparent px-3 outline-none text-white' />
            </div>

            <div className='mt-4'>
                <p className='text-[#6CF926] text-lg'>POWER UPS</p>
                <img onClick={() => { setData({ image: G6, heading: "FULL CHARGE", description: "To fully charge your battery please click the button below and watch the entire ad without skipping",btn:"Watch Ad",btn2:null }); setShow(true) }} src={G1} alt="" className='mb-[10px]' />
                <img onClick={() => { setData({ image: G7, heading: "LUMIK TAPER", description: "Would you like to automate your Lumik points earning? Click the button below to mint this NFT and enjoy automated lumik points earning 24/7 for lifetime",btn:"GO",btn2:"CHECK" }); setShow(true) }} src={G2} alt="" className='mb-[10px]' />

                <p className='text-[#6CF926] text-lg'>BOOSTERS</p>
                <img onClick={() => { setData({ image: G8, heading: "MULTIPLIER", description: "WOULD YOU LIKE TO INCREASE YOUR FUEL FILLING SPEED? Click the button below to spend 500 Lumik points and upgrade your fuel filling speed to LVL 2 boosting it to 2 points per second",btn:500,btn2:null }); setShow(true) }} src={G3} alt="" className='mb-[10px]' />
                <img onClick={() => { setData({ image: G9, heading: "MULTIPLIER", description: "WOULD YOU LIKE TO INCREASE YOUR FUEL Tapping SPEED? Click the button below to spend 500 Lumik points and upgrade your tapping speed to LVL 2 boosting it to 2 points per second",btn:500,btn2:null }); setShow(true) }} src={G4} alt="" className='mb-[10px]' />
                <img onClick={() => { setData({ image: G10, heading: "MULTIPLIER", description: "Worried about your battery draining quickly? No worry! click the button below to spend 500 Lumik points and upgrade your battery energy capacity to LVL 2 increasing it to 1000 points",btn:500,btn2:null }); setShow(true) }} src={G5} alt="" className='mb-[10px]' />

            </div>


            <div className='flex-1  mt-4 flex justify-end items-end mb-[1rem]' >
                <BottomNav />
            </div>

            {
                show && (
                    <div className='bg-[#0D0B0D]  fixed top-0 left-0 w-screen h-screen z-50 bg-opacity-50 flex jusity-end items-end'>
                        <div className='p-4 w-screen h-[25rem] rounded-tl-[2rem] rounded-tr-[2rem] bg-green-950'>
                            <div onClick={()=>setShow(false)} className='flex justify-end'>
                                <ImCross className='text-[#6CF926] rounded-full border border-[#6CF926] text-[2rem] p-1 text-end' />
                            </div>

                            <div className='flex justify-center items-center flex-col mt-3'>
                                <img src={data.image} alt="" className='border border-[#6CF926] h-[5rem]' />
                                <p  className='text-lg text-[#6CF926] mt-2'>{data.heading}</p>
                                <p  className='text-lg text-[#6CF926] mt-2 text-center'>{data.description}</p>
                            </div>

                            <div className='flex justify-center items-center mt-4 gap-x-5'>
                                {
                                    data.btn && (
                                        <button className='border border-[#FFCC00] text-white p-2 rounded-md '>{data.btn}</button>
                                    )
                                }
                                {
                                    data.btn2 && (
                                        <button className='border border-[#FFCC00] text-white p-2 rounded-md '>{data.btn2}</button>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default FuelPage
