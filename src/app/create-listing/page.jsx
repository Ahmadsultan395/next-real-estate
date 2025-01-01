import React from 'react'

const createListing = () => {
  return (
    <>
    <div className='px-10 md:px-[10rem] flex flex-col gap-5 mt-10'>
    <h1 className='text-slate-800 text-[2.5rem] text-center font-bold'>Create Listing</h1>
    <div className='flex flex-col gap-5' >
      <input type="text" placeholder='Name' className='border  outline-none px-3 py-2 rounded-md text-slate-800' />
      <textarea name="description" id="description" placeholder='description'  className='border  outline-none px-3 py-2 rounded-md text-slate-800'/>
      <input type="text" placeholder='Address' className='border  outline-none px-3 py-2 rounded-md text-slate-800'/>
    </div>
    <div className=' flex flex-wrap gap-5'>
      <div>
      <input type="radio" />
      <span className='ml-2 text-gray-800'>Sell</span>
      </div><div>
      <input type="radio" />
      <span className='ml-2 text-gray-800'>Rent</span>
      </div><div>
      <input type="radio" />
      <span className='ml-2 text-gray-800'>Parking Spot</span>
      </div><div>
      <input type="radio" />
      <span className='ml-2 text-gray-800'>Furnished</span>
      </div>
      <div>
      <input type="radio" />
      <span className='ml-2 text-gray-800'>Offer</span>
      </div>
    </div>
    

    <div className=' flex flex-wrap gap-5'>
      <div>
      <input type="text" className='border  outline-none px-3 py-2 rounded-md text-slate-800' />
      <span className='ml-2 text-slate-800'>Beds</span>
      </div><div>
      <input type="text" className='border  outline-none px-3 py-2 rounded-md text-slate-800' />
      <span className='ml-2 text-slate-800'>Baths</span>
      </div><div>
      <input type="text" className='border  outline-none px-3 py-2 rounded-md text-slate-800' />
      <span className='ml-2 text-slate-800'>Regular Price ($/month)</span>
      </div>
      <div>
      <input type="text" className='border  outline-none px-3 py-2 rounded-md text-slate-800' />
      <span className='ml-2 text-slate-800'>Discount Price ($/month)</span>
      </div>  
    </div>

   <div>
   <div className='flex flex-col gap-5'>
      <p className='text-slate-800'><strong>Image:</strong> The First image will the cover (max 6)</p>
      <div className='flex'>
      <input type="file" className='border  outline-none px-3 py-2 rounded-md'/>
    <button className=' bg-gray-300 px-10 py-2 rounded-md text-green-500 font-semibold'>Upload</button>
      </div>  
    </div>
    <button className='mt-5 bg-blue-400 px-10 py-2 rounded-md text-slate-800 font-bold'>Create Listing</button>
   </div>
    </div>
    </>
  )
}

export default createListing