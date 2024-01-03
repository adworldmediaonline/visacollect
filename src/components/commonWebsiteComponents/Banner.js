import React from 'react'
import Link from 'next/link';


export const Banner = () => {
    return (
        <div className='pt-16 '>
            <div className='bg-[#f3f5f7] flex justify-center items-center'>
                <p className='py-8'>
                    <span className='font-semibold'>Home</span> &gt; Australia
                </p>
            </div>
            <div className="container py-16">
                <div className='grid grid-cols-2 gap-10'  >
                    <div className="space-y-5 flex flex-col items-center justify-center h-full w-full ">
                        <h2 className="md:text-4xl italic text-black text-xl font-bold ">
                            Welcome to Australia
                        </h2>
                        <div className=''>
                            <Link href="/australia/application">
                                <button className="w-full py-3 text-white duration-150 ease-in-out rounded px-16 text-xl font-semibold  bg-primary hover:scale-105">
                                    Apply Now
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div>
                        <div className="border-l-8 border-primaryMain border-r border-t border-b text-black font-semibold p-4 text-lg  rounded-lg ">
                            <div className='grid grid-cols-3 space-x-5'>
                                <div>
                                    <p className='text-lg text-primary'>Visa</p>
                                    <p className='text-sm text-gray-500'>REQUIRED FOR TRAVEL</p>
                                </div>
                                <div className='col-span-2'>
                                    <div className=' border border-primary rounded-md'>
                                        <div className='bg-primary py-3 text-xl text-white flex justify-center'>
                                            Type of Visa
                                        </div>
                                        <div className='flex items-center flex-col space-y-2 py-3'>
                                            <p className='text-xl'>
                                                Valid for 1 year
                                            </p>
                                            <p className='text-xl'>
                                                Multiple Entries
                                            </p>
                                            <p className='text-sm'>
                                                Fee
                                            </p>
                                            <p className='text-2xl'>
                                                $126.67
                                            </p>
                                            <p className='text-sm'>/applicant</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
