'use client'

import Sidebar from '@/components/sidebar/Sidebar'
import { FaPlay, FaComment, FaRegEye } from 'react-icons/fa'

import Link from 'next/link'

import Image from 'next/image'
import ParallexHeader from '@/components/ParallexHeader'
import { NewsData } from '@/dummy/NewsData'
import Featured from '@/components/Featured'
import FeaturedTag from '@/components/tags/FeaturedTag'
import { useGetAllNewsQuery } from '@/lib/features/api/news/newsApi'

const NewsPage = () => {
    const { data } = useGetAllNewsQuery()

    const title = 'News & Articles'
    const props = 'News'
    return (
        <div>
            {/* HEADER */}
            <ParallexHeader pathname={props} title={title} />
            {/* BODY */}
            <div className='flex flex-col gap-y-5 lg:grid lg:grid-cols-3'>
                {/* Sidebar */}
                <div className='order-2 lg:order-none lg:col-start-1 lg:col-end-2 '>
                    <Sidebar />
                </div>
                {/* PRODUCT body */}
                <div className=' ml-[17px] lg:col-start-2 lg:col-end-4 lg:ml-[10px]'>
                    {/* BODY TITLE */}
                    <div className=' mb-[30px] h-[90px] w-[98%] border-b-[0.5px] border-[#c3c2c2] md:w-[60%] lg:w-[90%] '>
                        <p className='text-md font-normal text-[#484848]'>Latest News & Posts</p>
                        <h1 className='text-[30px] text-[#484848]'>What's Hot In The News</h1>
                    </div>
                    {/* BOOKS/MAIN PRODUCT */}
                    <div className=' flex flex-col gap-x-2 gap-y-8 sm:ml-[7px] sm:grid sm:grid-cols-2 lg:ml-[10px] lg:w-[59vw] lg:grid-cols-3'>
                        {/* {NewsData.map((data) => ( */}
                        {data?.data?.map(data => (
                            <div className='flex flex-col items-start gap-y-3'>
                                <div className='flex flex-col gap-y-[10px]'>
                                    <div>
                                        <Image
                                            src={data.image}
                                            alt=''
                                            width={200}
                                            height={200}
                                            className='hover:shadow-black/45 w-[88vw] cursor-pointer object-cover duration-700 hover:shadow-lg sm:h-[410px] sm:w-[40vw] lg:h-[222px] lg:w-[255px]'
                                        />
                                    </div>
                                    <p className=' w-[82%] border-b-[0.5px] border-[#bfbdbd] text-[13px] leading-8 text-[#666] hover:text-[#337ab7]'>
                                        {data.category}
                                    </p>
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <FeaturedTag />
                                    {/* <Link href={`/news/${data.title}`} className="text-[#484848] text-[16px] font-medium leading-[19px] hover:text-[#6f9a37] ">{data?.title}</Link> */}
                                    <Link
                                        href={`/news/${data?.id}`}
                                        className='text-[16px] font-medium leading-[19px] text-[#484848] hover:text-[#6f9a37] '
                                    >
                                        {data?.title}
                                    </Link>
                                </div>

                                <div className='space-y-1 text-[#666]'>
                                    <div className='  leading-[13px]'>
                                        <span className='text-[14px]'>By: </span>
                                        <span className='text-[13px] hover:text-[#337ab7]'>{data.author}</span>
                                    </div>

                                    <div className='flex gap-1 text-[13px] '>
                                        <span className='flex items-center gap-[3px]'>
                                            <FaComment /> {data.comments}
                                        </span>
                                        <span> / </span>
                                        <span className='flex items-center gap-[3px]'>
                                            <FaRegEye /> {data.views}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsPage
