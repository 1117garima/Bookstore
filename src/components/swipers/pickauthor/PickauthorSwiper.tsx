'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SwiperNavButton from './SwiperNavButton'
import { bookData } from '@/dummy/bookData'
import Image from 'next/image'
import { FaBasketShopping } from 'react-icons/fa6'
import { FaPlay, FaStar } from 'react-icons/fa'
import Link from 'next/link'
import { bestsellData } from '@/dummy/bestsellData'

const PickauthorSwiper = () => {
    return (
        <div>
            {/* <SwiperNavButton /> */}

            <Swiper
                loop={true}
                spaceBetween={5}
                slidesPerView={3}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 5
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}
            >
                {/* <div className='mt-[-100px] sm:mt-0 '> <SwiperNavButton /> */}
                <div>
                    {' '}
                    <SwiperNavButton />
                </div>

                {/* {bestsellData.slice(0, 12).map((data) => ( */}
                {bestsellData?.map(data => (
                    <SwiperSlide>
                        {/* <Image src={data.photo} alt="" width={200} height={200} className="object-cover lg:h-[257px] lg:w-[171px] sm:h-[410px] sm:w-[40vw] w-[88vw]" /> */}
                        {/* <div className="flex flex-col gap-y-5 items-start">
              <div className="flex flex-col">
                <Image src={data.photo} alt="" width={200} height={200}  />
                <p className="text-[rgb(102,102,102)] text-[13px] border-b-[0.5px] border-[#bfbdbd] leading-8 w-[82%] hover:text-[#337ab7]">{data.category}</p>
              </div>

              <div className=" space-y-[9px]">
                <div className="flex items-center">
                  <p className="px-[2px] py-[2px] text-xs text-white bg-[#f16945] rounded-l inline-block">SALE</p>

                  <span className="text-[#f16945] ml-[-2px] text-[20px]"><FaPlay /></span>
                </div>

                <Link href={`/product/${data.name}`} className="text-[#484848] text-[16px] font-medium leading-[19px] hover:text-[#6f9a37] ">{data.name}</Link>
              </div>

              <div className="">
                <div className=" text-[#666] leading-[13px]">
                  <span className="text-[14px]">By: </span>
                  <span className="text-[13px] hover:text-[#337ab7]">{data.author}</span>
                </div>

                <div className="mt-[6px] flex gap-1 text-sm">
                  <FaStar className="text-[#fcd01e]" />
                  <FaStar className="text-[#fcd01e]" />
                  <FaStar className="text-[#fcd01e]" />
                  <FaStar className="text-[#fcd01e]" />
                  <FaStar className="text-[#666]"
                  />

                </div>

                <div className="flex items-center">
                  <p className="text-[#77b748] text-[18px] font-medium">{data.currentPrice}</p>
                  <p className="text-[#666] text-[13px] pl-[10px] line-through" >{data.previousPrice}</p>

                </div>
              </div>

              <button className="px-[12px] py-[9px] flex items-center text-[#666] text-[13px] gap-x-2 border-[1px] border-gray-200 rounded-full hover:bg-[#77b748] hover:text-[#fff]"> <FaBasketShopping /> Add to Basket</button>
            </div> */}

                        {/* <img src="https://exprostudio.com/html/book_library/images/books/img-05.jpg" alt="" width={180} height={180}/> */}
                        {/* <img src="https://exprostudio.com/html/book_library/images/books/img-05.jpg" alt="" height={180} width={180} /> */}

                        {/* <div className='hover:shadow-lg border-b hover:border-b-2 hover:border-[#77b748] px-6 py-6 cursor-pointer bg-gray-50 rounded-sm transition-all'> */}
                        <div className='cursor-pointer rounded-sm border-b bg-gray-50 px-6 py-6 transition-all hover:border-b-2 hover:border-[#77b748] hover:shadow-lg'>
                            <div className='flex justify-center'>
                                <div className='border-l-8 border-[#ff0000]'>
                                    <Image
                                        src={data.photo}
                                        alt=''
                                        width={200}
                                        height={200}
                                        className='w-[88vw] object-cover sm:h-[410px] sm:w-[40vw] lg:h-[257px] lg:w-[171px]'
                                    />
                                </div>
                            </div>
                            <div className='my-4 border-b-[0.5px] border-[#bfbdbd]'></div>
                            <div className='flex flex-grow flex-col items-center justify-center'>
                                <div className=' mb-4 space-y-[9px]'>
                                    <Link
                                        href={`/product/${data.name}`}
                                        className='text-[14px] font-bold leading-[19px] text-[#484848] hover:text-[#6f9a37] '
                                    >
                                        {data.name}
                                    </Link>
                                </div>

                                <div className=''>
                                    <div className=' leading-[13px] text-[#666]'>
                                        <span className='text-[14px]'>By: </span>
                                        <span className='text-[13px] hover:text-[#337ab7]'>{data.author}</span>
                                    </div>
                                </div>
                                <button className='mt-4 flex items-center gap-x-2 rounded-full border-[1px] border-gray-200 px-[12px] py-[9px] text-[13px] text-[#666] transition-all duration-300 hover:bg-[#77b748] hover:text-[#fff]'>
                                    {' '}
                                    <FaBasketShopping /> Add to Basket
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default PickauthorSwiper
