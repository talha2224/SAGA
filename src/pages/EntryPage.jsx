import React from 'react'
import Image1 from '../assets/azameina.png'
import Imag2 from '../assets/background.png'
import Imag3 from '../assets/character.png'
import { useNavigate } from 'react-router-dom'

const EntryPage = () => {
  const nav = useNavigate()
  return (

    <div style={{ backgroundImage: `url(${Imag2})` }} className='w-screen min-h-screen bg-[#16240e] px-[1rem]'>

      <div className='flex justify-center items-center pt-[2rem]'>
        <img src={Image1} alt="" className='w-[348px]' />
      </div>
      <div className='flex justify-center items-center mt-6 flex-col'>
        <input onChange={(e)=>nav("/play")} type="text" className='w-[13rem] h-[2.3rem] rounded-md border border-[#6CF926] bg-transparent px-3 outline-none text-white' />
        <p className='text-white mt-3 w-[60%] text-center'>CONNECT YOUR SOLANA WALLET TO START PLAY THE GAME</p>
      </div>
      <div className='flex justify-center items-center pt-[2rem] fixed bottom-0 left-0 w-screen'>
        <img src={Imag3} alt="" className='sm:w-[500px] w-[230px]' />
      </div>
    </div>
  )
}

export default EntryPage
