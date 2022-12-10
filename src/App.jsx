import React from 'react'
import Cover from './assets/bg-pattern-card.svg'
import Avatar from './assets/image-victor.jpg'

const App = () => {
  return (
    <div className='container flex mx-auto h-screen items-center justify-center bg-transparent'>

       {/* Flex Container */}
       <div className='flex flex-col w-80 h-85 bg-white rounded-xl items-center '>

        {/* cover */}
          <div className='rounded-t-xl'>
            <img className='rounded-t-xl' src={Cover} alt="" />
          </div>

          {/* the Avatar picture */}
          <div className='bg-white'>
            <img src={Avatar} className='rounded-full -mt-14 p-1 bg-white' alt="" />
          </div>

          {/* Information Section */}
          <section className='flex flex-col items-center w-full'>
            {/* Name and city */}
            <div className='flex flex-col items-center my-5'>
              <h1 className='text font-bold text-lg'>
                Victor Crest <span className='font-normal m-1 text-darkGrayishBlue'>26</span>
              </h1>
              <h4 className='text-darkGrayishBlue text-base'>London</h4>
            </div>

            <hr className='w-full'/>

            {/* Stats */}
            <div className='w-full flex text-center items-center justify-evenly my-5'>

              <div className='flex flex-col'>
                <p className='font-bold text-xl'>80K</p>
                <p className='text-sm text-darkGrayishBlue'>Followers</p>
              </div>
              <div>
                <p className='font-bold text-xl'>803K</p>
                <p className='text-sm text-darkGrayishBlue'>Likes</p>
              </div>
              <div>
                <p className='font-bold text-xl'>1.4K</p>
                <p className='text-sm text-darkGrayishBlue'>Photos</p>
              </div>
      
            </div>
          </section>

       </div>

    </div>
  )
}

export default App