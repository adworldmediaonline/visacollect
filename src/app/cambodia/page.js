import React from 'react'
import Link from 'next/link';
function Page() {
  return (
    <div>
      <div className=''>
        <Link href="/cambodia/application">
          <button className="w-full py-3 text-white duration-150 ease-in-out rounded px-16 text-xl font-semibold  bg-primary hover:scale-105">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Page