'use client'

import { popularauthData } from '@/dummy/popularauthData'
import Image from 'next/image'
import Link from 'next/link'
import { FaPlay, FaStar } from 'react-icons/fa'
import { FaBasketShopping } from 'react-icons/fa6'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperNavButton from './SwiperNavButton'

const PopularauthorSwiper = () => {
    return (
        <div>
            {/* <SwiperNavButton /> */}

            <Swiper
                loop={true}
                spaceBetween={5}
                slidesPerView={6}
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
                        slidesPerView: 6,
                        spaceBetween: 30
                    }
                }}
            >
                <div>
                    {' '}
                    <SwiperNavButton />
                </div>

                {popularauthData?.map(data => (
                    <SwiperSlide>
                        <div className='flex flex-col items-start gap-y-5'>
                            <div className='flex flex-col'>
                                {/* <Image src={data.photo} alt="" width={200} height={200} className="object-cover lg:h-[257px] lg:w-[171px] sm:h-[410px] sm:w-[40vw] w-[88vw]" /> */}
                                <Image src={data.photo} alt='' width={200} height={200} />
                                {/* <p className="text-[rgb(102,102,102)] text-[13px] border-b-[0.5px] border-[#bfbdbd] leading-8 w-[82%] hover:text-[#337ab7]">{data.category}</p> */}
                            </div>

                            <div className=' space-y-[9px] text-xs'>
                                <Link
                                    href={`/product/${data.name}`}
                                    className='text-[16px] font-medium leading-[19px] text-[#484848] hover:text-[#6f9a37] '
                                >
                                    {data.name}
                                </Link>
                            </div>

                            <div className=''>
                                <div className=' leading-[13px] text-[#666]'>
                                    {/* <span className="text-[14px]">By: </span> */}
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

export default PopularauthorSwiper
