import React from 'react'

const Formsubhead = ({subHead,formheadreview}) => {
  return (
    <div>

<div className='pb-10 pt-5'>
<h2 className='bg-[#F7BD6D] text-black font-semibold text-lg p-4 '>{subHead} <span className='text-lg font-bold'>{formheadreview}</span></h2>
</div>
    </div>
  )
}

export default Formsubhead