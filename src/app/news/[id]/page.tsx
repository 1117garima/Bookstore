'use client'
import AuthorDetails from '@/components/AuthorDetails'
import Form from '@/components/Form'
import ParallexHeader from '@/components/ParallexHeader'
import Comments from '@/components/newsContent/Comments'
import NewsContent from '@/components/newsContent/newsContent'
import NewsDetailPagination from '@/components/paginations/NewsDetailPagination'
import Sidebar from '@/components/sidebar/Sidebar'
import { NewsDetailData } from '@/dummy/NewsDetailData'
import { useSingleNewsQuery } from '@/lib/features/api/news/newsApi'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'
import { FaComment, FaRegEye } from 'react-icons/fa'

const NewsDetailPage = () => {
    const { id } = useParams()

    const { data } = useSingleNewsQuery(id)

    // const {} =

    const title = 'News & Articles'
    const pathname = 'News  > News Detail'
    return (
        <div>
            {/* Header */}
            <ParallexHeader title={title} pathname={pathname} />

            {/* BODY */}

            {/* Image */}

            <div className=''>
                {/* {NewsDetailData.map((data) => ( */}
                <div key={data?.title}>
                    <div className='lg:px-[70px] xl:px-[100px]'>
                        <div
                            style={{
                                backgroundImage: `url(${data?.image})`
                            }}
                            className='mx-auto mb-[160px] h-[230px] w-[90vw] object-cover sm:mb-0 md:h-[246px] md:w-[720px] lg:h-[320px] lg:w-[920px] xl:h-[390px] xl:w-[1140px] '
                        >
                            {/* Author */}
                            <div className=' absolute top-[840px] inline-block rounded-tr-lg bg-white p-[20px]  sm:top-[760px] md:top-[776px] lg:top-[850px] xl:top-[920px]'>
                                <div className=' flex flex-col items-start gap-2 sm:flex-row  sm:items-center '>
                                    <Image
                                        src={data?.image}
                                        alt=''
                                        height={50}
                                        width={50}
                                        className='h-[50px] w-[50px] rounded-full object-cover  '
                                    />

                                    <div className='space-y-1 text-[#666]'>
                                        <div className='  leading-[13px]'>
                                            <span className='text-[14px]'>By: </span>
                                            {/* <span className="text-[13px] hover:text-[#337ab7]">{data.author}</span> */}
                                        </div>

                                        <div className='flex gap-1 text-[13px] '>
                                            {/* <span className="flex items-center gap-[3px]"><FaComment /> {data.comments}</span>
                                                <span> / </span>
                                                <span className="flex items-center gap-[3px]"><FaRegEye /> {data.views}</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Body with every other content and sidebar */}
                    <div className='mt-[50px] flex flex-col gap-y-5 sm:pl-[40px] lg:grid lg:grid-cols-3 lg:pl-0  '>
                        {/* Sidebar */}
                        <div className='order-2  col-start-1 col-end-2 lg:order-none '>
                            <Sidebar />
                        </div>

                        {/* Content body */}

                        <div className='col-start-2 col-end-4 pl-[30px] pr-[20px] sm:pl-0 sm:pr-[30px] md:pr-[50px] lg:pr-[100px] '>
                            {/* News Description */}
                            {/* <NewsContent data={data} /> */}

                            {/* AuthorDetails */}
                            <div className='mt-[30px]'>
                                <AuthorDetails />
                            </div>
                            <div className='mt-[40px]'>
                                <NewsDetailPagination />
                            </div>

                            {/* Comments */}
                            <div>
                                <Comments />
                            </div>

                            {/* Comment Form */}
                            <div className='mt-[30px]'>
                                <h1 className='border-b-[1px] border-[#dbdbdb] py-[20px] text-[22px] text-[#484848]'>
                                    Leave Your Comment
                                </h1>

                                <div className='mt-[30px]'>
                                    <Form />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* // ))}  */}
            </div>
        </div>
    )
}

export default NewsDetailPage
