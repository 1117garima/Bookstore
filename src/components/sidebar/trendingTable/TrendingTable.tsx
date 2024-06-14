'use client'

import Image from 'next/image'
import { trendingData } from '@/dummy/trendingData'
import './trendingTable.module.css'

const TrendingTable = () => {
    return (
        <div className='mt-7'>
            {/* HEAD */}

            <h1 className='body mb-[20px] rounded-md bg-gray-600 px-[25px] py-[10px] text-white '>Trending Products</h1>

            {/* BODY */}
            <div className='ml-[10px]'>
                {trendingData.map((data, index) => (
                    <div
                        className='group mb-5 grid grid-cols-6 items-center gap-x-2 sm:grid-cols-10 sm:gap-x-4  '
                        key={index}
                    >
                        <div className='col-span-2 sm:col-span-2 lg:col-span-3  '>
                            <Image
                                src={data.photo}
                                alt=''
                                height={76}
                                width={76}
                                className='image group-hover:shadow-black/35 relative h-[120px] w-[30vw] cursor-pointer border-[4px] border-transparent object-cover group-hover:shadow-lg sm:h-[168px] sm:w-[168px] lg:h-[85px] lg:w-[85px]'
                            />
                        </div>

                        <div className='col-span-4 sm:col-span-8 lg:col-span-7  '>
                            <h1 className='cursor-pointer text-base font-medium text-[#666] group-hover:text-[#6f9a37]'>
                                {data.name}
                            </h1>
                            <span className='text-[14px] text-[#666]'>By:</span>
                            <span className='cursor-pointer text-[13px] text-[#666] group-hover:text-[#6f9a37]'>
                                {' '}
                                {data.by}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrendingTable
