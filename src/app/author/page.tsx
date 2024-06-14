'use client'
import PageTitle from '@/components/PageTitle'
import ParallexHeader from '@/components/ParallexHeader'
import { bloggerData } from '@/dummy/bloggersData'
import { FaFacebookF } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'
import { useGetAllAuthorQuery } from '@/lib/features/api/author/authorApi'
// import { AuthorReviewData } from "@/dummy/authorReviewData";
// import AuthorPicksSwiper from "@/components/swipers/AuthorPicksSwiper";
// import AuthorReviewSwiper from "@/components/swipers/AuthorReviewSwiper";

const AuthorPage = () => {
    const { data } = useGetAllAuthorQuery()

    console.log('author', data)

    //Parallex header title
    const title = 'Authors'
    const pathname = 'Authors'

    //Page title
    const subTitle = 'Strong Minds Behind Us'
    const mainTitle = 'Most Popular Authors'
    return (
        <div>
            {/* HEADER */}
            <div>
                <ParallexHeader title={title} pathname={pathname} />
            </div>

            {/* PAGE MAIN BODY */}
            <div className=' '>
                {/* Page Title */}
                <div className='pl-[10px] pr-[30px] lg:pl-[100px]'>
                    <PageTitle subTitle={subTitle} mainTitle={mainTitle} />
                </div>
                {/* Content Body */}
                <div>
                    {/* Author list */}
                    <div className=' grid w-[98%] grid-cols-1 gap-y-8  sm:w-[95%] sm:grid-cols-2 sm:pl-[10px] md:w-[88%] md:grid-cols-3 md:pl-[30px] lg:grid-cols-5 lg:pl-[120px] xl:pl-[80px]'>
                        {/* {bloggerData.map((author, index) => ( */}
                        {data?.data?.map((author, index) => (
                            <div className=' group flex flex-col items-center gap-y-4' key={index}>
                                {/* image and name */}
                                <div className='flex flex-col items-center gap-y-[10px]'>
                                    <Image
                                        src={author?.image || []}
                                        alt='author image'
                                        height={160}
                                        width={160}
                                        className=' group-hover:shadow-black/35 h-[50vh] w-[83vw] cursor-pointer border-[8px] border-transparent object-cover group-hover:shadow-lg sm:h-[40vh] sm:w-[50vw] md:h-[208px] md:w-[208px] lg:h-[160px] lg:w-[160px]'
                                    />

                                    <Link
                                        href={`/author/${author?.id}`}
                                        className='cursor-pointer text-[16px] font-medium text-[#484848] hover:text-[#77b748]'
                                    >
                                        {author.name}
                                    </Link>
                                </div>

                                {/* Published books */}
                                {/* <p className="text-[#666] text-[14px]">{author.books}</p> */}

                                {/* socials */}
                                <div className='flex items-center gap-4'>
                                    {/* Facebook */}
                                    <div>
                                        <p className='inline-block cursor-pointer rounded-full bg-[#cecece] p-[5px] duration-300 group-hover:bg-[#337ab7]'>
                                            <Link href='/author'>
                                                <FaFacebookF className='  text-[13px] text-[#999] duration-300 group-hover:text-white  ' />
                                            </Link>
                                        </p>
                                    </div>

                                    {/* twitter */}
                                    <div>
                                        <p className='inline-block cursor-pointer rounded-full bg-[#cecece] p-[5px] duration-300 group-hover:bg-black'>
                                            <Link href='/author'>
                                                <FaXTwitter className='  text-[13px] text-[#999] duration-300 group-hover:text-white ' />
                                            </Link>
                                        </p>
                                    </div>

                                    {/* linkendin */}
                                    <div>
                                        <p className='inline-block cursor-pointer rounded-full bg-[#cecece] p-[5px] duration-300 group-hover:bg-[#337ab7]'>
                                            <Link href='/author'>
                                                <FaLinkedinIn className='  text-[13px] text-[#999] duration-300 group-hover:text-white' />
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Review Swiper */}
                    {/* <AuthorReviewSwiper /> */}

                    {/* Authors Pick Swiper */}

                    <div className='pl-[30px] pr-[30px] lg:pl-[100px]'>
                        <div className='flex w-[98%] flex-col justify-between space-y-4 border-b-[1px]  pb-[20px] sm:flex-row md:w-[94%]'>
                            <div className=' space-y-3'>
                                <p className=' text-[14px] text-[#484848] sm:text-[16px] '>Related Products </p>
                                <h1 className='text-[20px] leading-5 text-[#484848] sm:text-[30px]'>
                                    You May Also Like
                                </h1>
                            </div>
                            <button className='mr-[10px] w-[30vw] rounded-[25px] border-[1px] px-[25px] py-[15px] text-sm text-[#666]  sm:w-[18vw] lg:w-[8vw] '>
                                View All
                            </button>
                        </div>

                        <div className='w-[98%] pt-[40px] sm:w-[95%] sm:pl-[10px] md:w-[88%]  md:pl-[30px] lg:pl-[120px] xl:pl-[80px]'>
                            {/* <AuthorPicksSwiper /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorPage
