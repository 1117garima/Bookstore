// "use client"

// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import SwiperNavButton from './SwiperNavButton'
// import { bookData } from '@/dummy/bookData'
// import Image from 'next/image'
// import { FaBasketShopping } from 'react-icons/fa6'
// import { FaPlay, FaStar } from 'react-icons/fa'
// import Link from 'next/link'
// import { bestsellData } from '@/dummy/bestsellData'

// const BestsellSwiper = () => {
//   return (

//     <div>

//       <Swiper
//         loop={true}
//         spaceBetween={5}
//         slidesPerView={6}
//         breakpoints={{
//           320: {
//             slidesPerView: 1,
//             spaceBetween: 5
//           },
//           480: {
//             slidesPerView: 2,
//             spaceBetween: 10
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 20
//           },
//           1024: {
//             slidesPerView: 6,
//             spaceBetween: 30
//           },
//         }}
//       >
//         {/* <div className='mt-[-100px] sm:mt-0 '> <SwiperNavButton /> */}
//         <div > <SwiperNavButton />
//         </div>

//         {bestsellData?.map((data) => (
//           <SwiperSlide>
//             <div className="flex flex-col gap-y-5 items-start">
//               {/* <div className="flex flex-col gap-y-[10px]"> */}
//               <div className="flex flex-col">
//                 {/* <Image src={data.photo} alt="" width={200} height={200} className="object-cover lg:h-[257px] lg:w-[171px] sm:h-[410px] sm:w-[40vw] w-[88vw]" /> */}
//                 <Image src={data.photo} alt="" width={200} height={200}  />
//                 <p className="text-[rgb(102,102,102)] text-[13px] border-b-[0.5px] border-[#bfbdbd] leading-8 w-[82%] hover:text-[#337ab7]">{data.category}</p>
//               </div>

//               <div className=" space-y-[9px]">
//                 <div className="flex items-center">
//                   <p className="px-[2px] py-[2px] text-xs text-white bg-[#f16945] rounded-l inline-block">SALE</p>

//                   <span className="text-[#f16945] ml-[-2px] text-[20px]"><FaPlay /></span>
//                 </div>

//                 <Link href={`/product/${data.name}`} className="text-[#484848] text-[16px] font-medium leading-[19px] hover:text-[#6f9a37] ">{data.name}</Link>
//               </div>

//               <div className="">
//                 <div className=" text-[#666] leading-[13px]">
//                   <span className="text-[14px]">By: </span>
//                   <span className="text-[13px] hover:text-[#337ab7]">{data.author}</span>
//                 </div>

//                 <div className="mt-[6px] flex gap-1 text-sm">
//                   <FaStar className="text-[#fcd01e]" />
//                   <FaStar className="text-[#fcd01e]" />
//                   <FaStar className="text-[#fcd01e]" />
//                   <FaStar className="text-[#fcd01e]" />
//                   <FaStar className="text-[#666]"
//                   />

//                 </div>

//                 <div className="flex items-center">
//                   <p className="text-[#77b748] text-[18px] font-medium">{data.currentPrice}</p>
//                   <p className="text-[#666] text-[13px] pl-[10px] line-through" >{data.previousPrice}</p>

//                 </div>
//               </div>

//               <button className="px-[12px] py-[9px] flex items-center text-[#666] text-[13px] gap-x-2 border-[1px] border-gray-200 rounded-full hover:bg-[#77b748] hover:text-[#fff]"> <FaBasketShopping /> Add to Basket</button>
//             </div>
//           </SwiperSlide>

//         ))
//         }
//       </Swiper >

//     </div >
//   )
// }

// export default BestsellSwiper

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
import { useGetbestsellingQuery } from '@/lib/features/api/bestselling/bestsellingApi'

const BestsellSwiper = () => {
    const { data } = useGetbestsellingQuery()

    // console.log("all best sell",data?.data)

    return (
        <div>
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
                {/* <div className='mt-[-100px] sm:mt-0 '> <SwiperNavButton /> */}
                {/* {bestsellData?.map((data) => ( */}
                <div>
                    {' '}
                    <SwiperNavButton />
                </div>

                {data?.data?.map(data => (
                    <SwiperSlide>
                        <div className='flex flex-col items-start gap-y-5'>
                            <div className='flex flex-col gap-y-[10px]'>
                                {/* <div className="flex flex-col"> */}
                                {/* <Image src={data.photo} alt="" width={200} height={200} className="object-cover lg:h-[257px] lg:w-[171px] sm:h-[410px] sm:w-[40vw] w-[88vw]" /> */}
                                <Image src={data.photo} alt='' width={200} height={200} />
                                {/* <Image src={data?.cover_page} alt="" width={200} height={200} /> */}
                                <p className='w-[82%] border-b-[0.5px] border-[#bfbdbd] text-[13px] leading-8 text-[rgb(102,102,102)] hover:text-[#337ab7]'>
                                    {data.category}
                                </p>
                            </div>

                            <div className=' space-y-[9px]'>
                                <div className='flex items-center'>
                                    <p className='inline-block rounded-l bg-[#f16945] px-[2px] py-[2px] text-xs text-white'>
                                        SALE
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
                                {/* <Link href={`/product/${data.title}`} className="text-[#484848] text-[16px] font-medium leading-[19px] hover:text-[#6f9a37] ">{data.name}</Link> */}
                            </div>

                            <div className=''>
                                <div className=' leading-[13px] text-[#666]'>
                                    <span className='text-[14px]'>By: </span>
                                    {/* <span className="text-[13px] hover:text-[#337ab7]">{data.author}</span> */}
                                </div>

                                <div className='mt-[6px] flex gap-1 text-sm'>
                                    <FaStar className='text-[#fcd01e]' />
                                    <FaStar className='text-[#fcd01e]' />
                                    <FaStar className='text-[#fcd01e]' />
                                    <FaStar className='text-[#fcd01e]' />
                                    <FaStar className='text-[#666]' />
                                </div>

                                <div className='flex items-center'>
                                    <p className='fon0t-medium text-[18px] text-[#77b748]'>{data.currentPrice}</p>
                                    {/* <p className="text-[#77b748] text-[18px] fon0t-medium">{data.price}</p> */}
                                    <p className='pl-[10px] text-[13px] text-[#666] line-through'>
                                        {data.previousPrice}
                                    </p>
                                    {/* <p className="text-[#666] text-[13px] pl-[10px] line-through" >{data.price}</p> */}
                                </div>
                            </div>

                            <button className='flex items-center gap-x-2 rounded-full border-[1px] border-gray-200 px-[12px] py-[9px] text-[13px] text-[#666] hover:bg-[#77b748] hover:text-[#fff]'>
                                {' '}
                                <FaBasketShopping /> Add to Basket
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default BestsellSwiper
