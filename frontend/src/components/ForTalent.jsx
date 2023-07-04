import React from 'react'
import forTalentImg from './assets/fortalent.jpg'

function ForTalent() {
  return (
    <div>
        <div className='flex m-10 p-10 justify-center rounded'>
            <img className=' rounded-l-2xl' src={forTalentImg} alt="forTalentImg" />
            <div className='bg-blue-500 rounded-r-2xl'>
                <h2 className=' text-white text-2xl text-left mx-5 my-5'>For talent</h2>
                <h1 className=' text-white text-left mx-5 my-10 font-semibold  font-serif border-solid tracking-normal text-6xl'>Find<br/>greatwork</h1>
                <p>Meet clients you’re excited to work with and take your career or business to new heights.</p>
                

            </div>
        </div>
    </div>
  )
}

export default ForTalent