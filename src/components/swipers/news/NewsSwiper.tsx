'use client'

import { NewsData } from '@/dummy/NewsData'
import Image from 'next/image'
import Link from 'next/link'
import { FaPlay } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperNavButton from './SwiperNavButton'

const NewsSwiper = () => {
    return (
        <div>
            <Swiper
                loop={true}
                spaceBetween={5}
                slidesPerView={2}
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
                        slidesPerView: 4,
                        spaceBetween: 30
                    }
                }}
            >
                <div>
                    {' '}
                    <SwiperNavButton />
                </div>
                {NewsData?.map(data => (
                    <SwiperSlide>
                        <div className='flex flex-col items-start gap-y-5'>
                            <div className='flex flex-col'>
                                {/* <Image src={data.photo} alt="" width={200} height={200} className="object-cover lg:h-[257px] lg:w-[171px] sm:h-[410px] sm:w-[40vw] w-[88vw]" /> */}
                                <Image src={data.photo} alt='' width={200} height={200} />
                                <p className='w-[82%] border-b-[0.5px] border-[#bfbdbd] text-[13px] leading-8 text-[rgb(102,102,102)] hover:text-[#337ab7]'>
                                    {data.category}
                                </p>
                            </div>
                            <div className=' space-y-[9px]'>
                                <div className='flex items-center'>
                                    <p className='inline-block rounded-l bg-[#f16945] px-[2px] py-[2px] text-xs text-white'>
                                        FEATURE
                                    </p>
                                    <span className='ml-[-2px] text-[20px] text-[#f16945]'>
                                        <FaPlay />
                                    </span>
                                </div>
                                <Link
                                    href={`/product/${data.name}`}
                                    className='text-[16px] font-medium leading-[19px] text-[#484848] hover:text-[#6f9a37] '
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
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default NewsSwiper
