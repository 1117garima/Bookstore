'use client'

import Image from 'next/image'
import { bloggerData } from '@/dummy/bloggersData'

const BloggerTable = () => {
    return (
        <div className='mt-7'>
            {/* HEAD */}

            <h1 className='body mb-[20px] rounded-md bg-gray-600 px-[25px] py-[10px] text-white '>Top Bloggers</h1>

            {/* BODY */}
            <div className='ml-[10px]'>
                {bloggerData.map((data, index) => (
                    <div
                        className='group mb-5 grid grid-cols-6 items-center md:grid-cols-8 md:gap-3 lg:grid-cols-10  lg:gap-3 xl:gap-0 '
                        key={index}
                    >
                        <div className='col-span-2 md:col-span-1 lg:col-span-3 '>
                            <Image
                                src={data.photo}
                                alt=''
                                height={76}
                                width={76}
                                className='image group-hover:shadow-black/35 relative h-[85px] w-[22vw] border-[4px] border-transparent object-cover hover:cursor-pointer group-hover:shadow-lg md:w-[85px]'
                            />
                        </div>

                        <div className='col-span-4 md:col-span-7  lg:col-span-7 '>
                            <h1 className='text-base font-medium text-[#666] hover:cursor-pointer group-hover:text-[#6f9a37]'>
                                {data.name}
                            </h1>

                            <p className='text-[13px] text-[#666]'> {data.books}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BloggerTable
