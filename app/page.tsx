
import React from 'react'
import Image from 'next/image'
const idCard = () => {
  return (
    <div className='flex-col min-h-screen bg-pink-140'>
      <div className='flex-grow flex items-center justify-center p-6'>
        <div className='bg-yellow-200 p12 rounded-1g shadow-1g max-w-4xl w-full flex items center justify-center border-4 border-orange-900'>
          {/* left section*/}
         
          <div className='w-2/3 pr-4 pt-16 relative z-10'>
          <h3 className='align-middle-center text-orange-700 border-l'>ID CARD</h3>
            <p className='text-orange-900'>
              <span><strong>Name:</strong></span>
              <span className='text-black'>Rida Zia</span>
            </p>
            <p className='mb-2 text-orange-900'>
              <span>{" "}<strong>Roll No:</strong></span>
              <span className='text-black'>0046553</span>
            </p>
            <p className='mb-2 text-orange-900'>
              <span>{" "}<strong>Quarter:</strong></span>
              <span className='text-black'>2</span>
            </p>
            <p className='mb-2 text-orange-900'>
              <span>{" "}<strong>Center:</strong></span>
              <span className='text-black'>Governer house karachi</span>
            </p>
            <p className='mb-2 text-orange-900'>
              <span>{" "}<strong>Day timings:</strong></span>
              <span className='text-black'>Monday( 2 to 5)</span>
            </p>
            <p className='mb-2 text-orange-900'>
              <span>{" "}<strong>Batch:</strong></span>
              <span className='text-black'>1</span>
            </p>
            {/*botten section*/}
            <div className='flex flex-col mt-4'>

              <button className='relative w-full p-1 rounded-1g border-grey-300 bg-orange-300 text-white'>
                <span className='absolute inset-0 bg-white-900 style={width:"50%"}}'></span>
                <span className='relative z-10'>Q1 & WMD </span>
              </button>
            </div>

          </div>
{/*right section*/}
<div className='w-1/3 text-center relative z-10'>
<img className='mt-10 mr-10' src="https://img.freepik.com/premium-photo/beautiful-anime-woman-passport-size-pic_685680-483.jpg?w=740" alt="" width={800} height={800} />
</div>







        </div>
      </div>
    </div>
  )
}

export default idCard
