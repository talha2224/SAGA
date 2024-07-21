import React, { useState } from 'react'
import Imag2 from '../assets/background.png'
import Imag1 from '../assets/coin.png'
import Imag3 from '../assets/azameina-saga-landscape-logo.png'
import Imag4 from '../assets/rock.png'
import Imag5 from '../assets/group.png'
import Imag6 from '../assets/battery.png'

import Imag7 from '../assets/mine-coin.png'
import Imag8 from '../assets/boss.png'
import Imag9 from '../assets/ludo.png'
import BottomNav from '../components/BottomNav'
import { ImCross } from 'react-icons/im'

const PlayPage = () => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState({ image: "", heading: "", description: "", btn: null, btn2: null })

    return (
        <div style={{ backgroundImage: `url(${Imag2})` }} className='w-screen h-screen bg-[black] px-[1rem] flex flex-col'>
            <div className='flex justify-center items-center pt-[2rem] flex-col'>
                <img src={Imag3} alt="" className='w-[348px]' />
                <input type="text" className='w-[13rem] h-[2.3rem] mt-3 rounded-md border border-[#FFCC00] bg-transparent px-3 outline-none text-white' />

            </div>
            <div className='flex justify-center items-center pt-[1rem]'>
                <img src={Imag1} alt="" className='h-[10rem]' />
            </div>

            <div className='flex justify-center items-center mt-[1rem] gap-x-3 border border-[#6CF926] pt-1 pb-2'>
                <img src={Imag4} alt="" className='h-[2rem]' />
                <p className='text-white'>Rock</p>
            </div>

            <div className='flex justify-center items-center mt-[2rem] gap-x-[1rem]'>
                <div onClick={() => { setData({ image: Imag1, heading: "BOSS MODE", description: "Battery draining so fast right? Want it to last for 10 hours while earning Lumik points effortlessly? Click below to mint this NFT and enjoy an 10 hours infinite battery limit daily for lifetime", btn: "GO", btn2: "CHECK" }); setShow(true) }} className='border border-white min-w-[4rem] h-[5rem] rounded-md flex justify-center items-center flex-col'>
                    <img src={Imag7} alt="" className='h-[1.5rem]' />
                    <p className='text-[#65F926]'>GAME</p>
                </div>

                <div onClick={() => { setData({ image: Imag1, heading: "BOSS MODE", description: "Battery draining so fast right? Want it to last for 10 hours while earning Lumik points effortlessly? Click below to mint this NFT and enjoy an 10 hours infinite battery limit daily for lifetime", btn: "GO", btn2: "CHECK"}); setShow(true) }} className='border border-[#6CF926] min-w-[4rem] h-[5rem] rounded-md flex justify-center items-center flex-col'>
                    <img src={Imag8} alt="" className='h-[1.5rem]' />
                    <p className='text-[#65F926]'>BOSS</p>
                </div>
                <div onClick={() => { setData({ image: Imag9, heading: "LUDO -- MONEY BANK", description: "Experience Ludo Money Bank: a WEB 3.0 play to earn game with Azameina token and NFT integration. Enjoy Indie and tournament modes for entertainment and finanical rewards",btn:"LOCKED",btn2:null }); setShow(true) }} className='border border-[#FFCC00] min-w-[4rem] h-[5rem] rounded-md flex justify-center items-center flex-col'>
                    <img src={Imag9} alt="" className='h-[1.5rem]' />
                    <p className='text-[#FFCC00]'>LUDO</p>
                </div>
            </div>

            <p className='text-white mt-7 text-center'>200 / 250</p>

            <div className='flex justify-center items-center pt-[1rem]'>
                <img src={Imag6} alt="" className='' />
            </div>

            <div className='flex-1  mt-auto flex justify-end items-end mb-[1rem]' >
                <BottomNav />
            </div>

            {
                show && (
                    <div className='bg-[#0D0B0D]  fixed top-0 left-0 w-screen h-screen z-50 bg-opacity-50 flex jusity-end items-end'>
                        <div className='p-4 w-screen h-[25rem] rounded-tl-[2rem] rounded-tr-[2rem] bg-green-950'>
                            <div onClick={() => setShow(false)} className='flex justify-end'>
                                <ImCross className='text-[#6CF926] rounded-full border border-[#6CF926] text-[2rem] p-1 text-end' />
                            </div>

                            <div className='flex justify-center items-center flex-col mt-3'>
                                <img src={data.image} alt="" className=' h-[5rem]' />
                                <p className='text-lg text-[#6CF926] mt-2'>{data.heading}</p>
                                <p className='text-lg text-[#ffff] mt-2 text-center'>{data.description}</p>
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

export default PlayPage
