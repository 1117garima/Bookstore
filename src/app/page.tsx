// import Banner from '@/components/common/Banner/Banner'
// import Partners from '@/components/home/Partners'
// import Features from '@/components/home/Features'
// import Info from '@/components/home/Info'
// import Products from '@/components/home/Products'
// import Scheme from '@/components/home/Scheme'
// import Blogs from '@/components/home/Blogs'

// import { fetchApiData } from '@/utils/fetchApiData'
// import { REVALIDATION_VALUE } from '@/constants/nextConfig'

// export const revalidate = REVALIDATION_VALUE
// import type { Metadata } from 'next'
// import getMetaTags from '@/utils/getMetaTags'
// import metaTags from '@/data/metaTags'

// export const metadata: Metadata = getMetaTags(metaTags.home)

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import { FaBookMedical, } from "react-icons/fa";
// import { FiMessageCircle } from "react-icons/fi";
// import { MdOutlineShoppingCart } from "react-icons/md";

// import { Navigation, Pagination } from 'swiper/modules';
// import Testimonials from '@/components/Testimonials'

// export default async function Home() {

//     const products = [
//         {
//             id: 1,
//             name: "Nike Air MX Super 2500 - Red",
//             price: 449,
//             discountedPrice: 699,
//             image1: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b",
//             image2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//             discount: "39% OFF"
//         },
//         {
//             id: 2,
//             name: "Nike Air MX Super 2500 - Red",
//             price: 449,
//             discountedPrice: 699,
//             image1: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b",
//             image2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//             discount: "39% OFF"
//         },
//         {
//             id: 3,
//             name: "Nike Air MX Super 2500 - Red",
//             price: 449,
//             discountedPrice: 699,
//             image1: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b",
//             image2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//             discount: "39% OFF"
//         },
//     ];

//     return (
//         <>
//             <main>
//                 {/* <Swiper
//                     spaceBetween={30}
//                     effect={'fade'}
//                     loop={true}
//                     navigation={true}
//                     pagination={{
//                         clickable: true,
//                     }}
//                     modules={[Navigation, Pagination]}
//                     className="mySwiper"
//                 >
//                     <SwiperSlide>
//                         <img src="http://exprostudio.com/html/book_library/images/slider/img-01.jpg" alt="" />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <img src="http://exprostudio.com/html/book_library/images/slider/img-01.jpg" alt="" />
//                     </SwiperSlide>
//                 </Swiper> */}

//             <Testimonials/>

//             </main>
//         </>
//     )
// }

'use client'

// Import Swiper React components
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import BestsellSwiper from '@/components/swipers/bestselling/BestsellSwiper'
import NewsSwiper from '@/components/swipers/news/NewsSwiper'
import PopularauthorSwiper from '@/components/swipers/popularauthor/PopularauthorSwiper'
import { newreleaseData } from '@/dummy/newreleaseData'
import Image from 'next/image'
import Link from 'next/link'
import { FaAngleLeft, FaBookMedical, FaChevronRight, FaRegStar, FaStar } from 'react-icons/fa'
import { FaBasketShopping } from 'react-icons/fa6'
import { FiMessageCircle } from 'react-icons/fi'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Navigation, Pagination } from 'swiper/modules'
import Total from '../../public/parallax/bgparallax-04.jpg'
import { useGetdashboardQuery } from '@/lib/features/api/dashboard/dashboardApi'
// import './styles.module.css';

export default function Home() {
    const { data: dashboard } = useGetdashboardQuery()

    const products = [
        {
            id: 1,
            name: 'Nike Air MX Super 2500 - Red',
            price: 449,
            discountedPrice: 699,
            image1: 'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b',
            image2: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            discount: '39% OFF'
        },
        {
            id: 2,
            name: 'Nike Air MX Super 2500 - Red',
            price: 449,
            discountedPrice: 699,
            image1: 'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b',
            image2: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            discount: '39% OFF'
        },
        {
            id: 3,
            name: 'Nike Air MX Super 2500 - Red',
            price: 449,
            discountedPrice: 699,
            image1: 'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b',
            image2: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            discount: '39% OFF'
        }
    ]

    console.log('dashboard api', dashboard)

    return (
        <>
            <main>
                {/* banner  */}
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    loop={true}
                    navigation={true}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Navigation, Pagination]}
                    className='mySwiper'
                >
                    <SwiperSlide
                        style={{
                            backgroundImage: 'url(http://exprostudio.com/html/book_library/images/slider/img-01.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100vh'
                        }}
                    >
                        <div className='container'>
                            <div className='pb-8'>
                                <div className='col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2'>
                                    <div className='tg-slidercontent mt-[8%] flex flex-col items-center justify-center'>
                                        <figure>
                                            <a href='javascript:void(0);'>
                                                <img
                                                    src='https://exprostudio.com/html/book_library/images/author/imag-01.jpg'
                                                    alt='image description'
                                                    className='rounded-full border-2 bg-white p-2'
                                                />
                                            </a>
                                        </figure>
                                        <h1 className='mt-6 text-5xl font-bold'>Jude Morphew</h1>
                                        <h2 className='mb-4 text-2xl font-bold'>Latest 2017 Release</h2>
                                        <div className='tg-description w-[65%]'>
                                            <p>
                                                Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore
                                                tolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamcoiars nisi ut aliquip commodo.
                                            </p>
                                        </div>
                                        <div className='mt-8'>
                                            <a
                                                className='ml-6 rounded border-2 px-9 py-3 text-sm text-gray-600 hover:bg-[#77b748] hover:text-white'
                                                href='#'
                                            >
                                                Buy Now
                                            </a>
                                            <a
                                                className='ml-6 rounded border-2 px-9 py-3 text-sm text-gray-600 hover:bg-[#77b748] hover:text-white'
                                                href='#'
                                            >
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            backgroundImage: 'url(http://exprostudio.com/html/book_library/images/slider/img-01.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100vh'
                        }}
                    >
                        <div className='container'>
                            <div className='pb-8'>
                                <div className='col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2'>
                                    <div className='tg-slidercontent mt-[8%] flex flex-col items-center justify-center'>
                                        <figure>
                                            <a href='javascript:void(0);'>
                                                <img
                                                    src='https://exprostudio.com/html/book_library/images/author/imag-01.jpg'
                                                    alt='image description'
                                                    className='rounded-full border-2 bg-white p-2'
                                                />
                                            </a>
                                        </figure>
                                        <h1 className='mt-6 text-5xl font-bold'>Jude Morphew</h1>
                                        <h2 className='mb-4 text-2xl font-bold'>Latest 2017 Release</h2>
                                        <div className='tg-description w-[65%]'>
                                            <p>
                                                Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore
                                                tolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamcoiars nisi ut aliquip commodo.
                                            </p>
                                        </div>
                                        <div className='mt-8'>
                                            <a
                                                className='ml-6 rounded border-2 px-9 py-3 text-sm text-gray-600 hover:bg-[#77b748] hover:text-white'
                                                href='#'
                                            >
                                                Buy Now
                                            </a>
                                            <a
                                                className='ml-6 rounded border-2 px-9 py-3 text-sm text-gray-600 hover:bg-[#77b748] hover:text-white'
                                                href='#'
                                            >
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                {/* <BannerSwiper /> */}
                {/* total starts */}
                <div className='mb-4 flex justify-center bg-white'>
                    <div className='grid w-full grid-cols-1 gap-6 md:w-[80%] lg:grid-cols-3'>
                        <div className='flex items-center justify-center bg-[#45b8d1]  p-2 text-2xl text-white '>
                            <div className='flex h-44 w-full flex-col items-center justify-center border-2 '>
                                <span className='tg-statusicon mb-2'>
                                    <FaBookMedical size={32} />
                                </span>
                                <h2 className='text-center'>Books we have </h2>
                                <span className='text-center'>{dashboard?.data?.books_we_have}</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-center bg-[#a07799]  p-2 text-2xl text-white '>
                            <div className='flex h-44 w-full flex-col items-center justify-center border-2 '>
                                <span className='tg-statusicon mb-2'>
                                    <FaBookMedical size={32} />
                                </span>
                                <h2 className='text-center'>Total Members </h2>
                                <span className='text-center'>{dashboard?.data?.total_members}</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-center bg-[#f07c5f]  p-2 text-2xl text-white '>
                            <div className='flex h-44 w-full flex-col items-center justify-center border-2 '>
                                <span className='tg-statusicon mb-2'>
                                    <FaBookMedical size={32} />
                                </span>
                                <h2 className='text-center'>Happy Users</h2>
                                <span className='text-center'>{dashboard?.data?.happy_users}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* bestsellings */}
                <div className='mb-4 flex justify-center px-16'>
                    <div className='flex w-[85%] items-center justify-between'>
                        <h2 className='text-2xl text-gray-700'>
                            <span className='text-sm'>People’s Choice</span> <br />
                            Bestselling Books
                        </h2>
                        <a className='tg-btn' href='#'>
                            View All
                        </a>
                    </div>
                    {/* <hr /> */}
                </div>
                <div className='mt-[25px] flex justify-center'>
                    <div className='w-[77%]'>{/* <BestsellSwiper /> */}</div>
                </div>

                {/* advertisement */}
                <div className='my-16 flex justify-center bg-gray-100'>
                    <div className='flex w-[85%] justify-between '>
                        <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 hidden-sm hidden-xs'>
                            <figure>
                                <img
                                    src='https://exprostudio.com/html/book_library/images/img-02.png'
                                    alt='image description'
                                />
                            </figure>
                        </div>
                        <div className='flex w-full items-center justify-around'>
                            <div>
                                <div className=''>
                                    <span className='bg-[#f16945] text-white'>featured</span>
                                </div>
                                <div className='tg-booktitle py-4'>
                                    <h3 className='text-4xl font-bold text-[#484848]'>
                                        <a href='' className='hover:text-green-600'>
                                            Things To Know About <br /> Green Flat Design
                                        </a>
                                    </h3>
                                </div>
                                <span className='tg-bookwriter text-xl'>
                                    By:{' '}
                                    <a className='text-gray-600' href='#'>
                                        Farrah Whisenhunt
                                    </a>
                                </span>
                                <span className='tg-stars'>
                                    <span></span>
                                </span>

                                <div className='flex items-center'>
                                    <svg
                                        className='ms-1 h-4 w-4 text-yellow-300'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        viewBox='0 0 22 20'
                                    >
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <svg
                                        className='ms-1 h-4 w-4 text-yellow-300'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        viewBox='0 0 22 20'
                                    >
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <svg
                                        className='ms-1 h-4 w-4 text-yellow-300'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        viewBox='0 0 22 20'
                                    >
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <svg
                                        className='ms-1 h-4 w-4 text-yellow-300'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        viewBox='0 0 22 20'
                                    >
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <svg
                                        className='ms-1 h-4 w-4 text-gray-300 dark:text-gray-500'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        viewBox='0 0 22 20'
                                    >
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                </div>
                            </div>

                            <div className='tg-priceandbtn'>
                                <span className='text-[#484848]'>
                                    <ins className='mr-2 text-4xl font-bold'>$23.18</ins>
                                    <del className='text text-2xl'>$30.20</del>
                                </span>{' '}
                                <br />
                                <button className='mt-4 flex items-center rounded-2xl bg-[#77b748] px-6 py-2 text-white'>
                                    <MdOutlineShoppingCart />
                                    Add To Basket
                                </button>
                                {/* <Link className="tg-btn tg-btnstyletwo tg-active text-blue-600" href="#">
              </Link> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* new release books  */}
                <div className='flex flex-wrap justify-center'>
                    <div className='grid w-[76%] grid-cols-2 gap-8'>
                        <div className=''>
                            <div className='mb-4'>
                                <h2 className='text-2xl'>
                                    <span className='text-xs'>Taste The New Spice</span> <br />
                                    New Release Books
                                </h2>
                            </div>
                            <hr />
                            <div className='mt-4 text-sm text-gray-600'>
                                <p>
                                    Consectetur adipisicing elit sed do eiusmod tempor incididunt labore toloregna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoiars nisiuip
                                    commodo consequat aute irure dolor in aprehenderit aveli esseati cillum dolor fugiat
                                    nulla pariatur cepteur sint occaecat cupidatat.
                                </p>
                            </div>
                            <div className='mt-12'>
                                <a className='rounded bg-[#77b748] px-9 py-3 text-sm text-white' href='#'>
                                    View All
                                </a>
                                <a
                                    className='ml-6 rounded border-2 px-9 py-3 text-sm text-gray-600 hover:bg-[#77b748] hover:text-white'
                                    href='#'
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-6'>
                            {newreleaseData.map(data => (
                                <div className='flex flex-col items-start gap-y-5'>
                                    <div className='flex flex-col'>
                                        <Image src={data.photo} alt='' width={150} height={150} />
                                        <p className='w-[82%] border-b-[0.5px] border-[#bfbdbd] text-[13px] leading-8 text-[rgb(102,102,102)] hover:text-[#337ab7]'>
                                            {data.category}
                                        </p>
                                    </div>
                                    <div className=' space-y-[9px]'>
                                        <Link
                                            href={`/product/${data.name}`}
                                            className='text-[16px] font-medium leading-[19px] text-[#484848] hover:text-[#6f9a37] '
                                        >
                                            {data.name}
                                        </Link>
                                    </div>
                                    <div className=''>
                                        -
                                        <div className=' leading-[13px] text-[#666]'>
                                            <span className='text-[14px]'>By: </span>
                                            <span className='text-[13px] hover:text-[#337ab7]'>{data.author}</span>
                                        </div>
                                        <div className='mt-[6px] flex gap-1 text-sm'>
                                            <FaStar className='text-[#fcd01e]' />
                                            <FaStar className='text-[#fcd01e]' />
                                            <FaStar className='text-[#fcd01e]' />
                                            <FaStar className='text-[#fcd01e]' />
                                            <FaStar className='text-[#666]' />
                                        </div>
                                    </div>
                                    <button className='flex items-center gap-x-2 rounded-full border-[1px] border-gray-200 px-[12px] py-[9px] text-[13px] text-[#666] hover:bg-[#77b748] hover:text-[#fff]'>
                                        {' '}
                                        <FaBasketShopping /> Add to Basket
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className='min-h-60 mx-auto my-12 flex items-center justify-center bg-green-600 bg-cover bg-fixed bg-center bg-no-repeat py-4  '
                    style={{
                        backgroundImage:
                            "url('https://exprostudio.com/html/book_library/images/parallax/bgparallax-04.jpg')"
                    }}
                >
                    {/* <div id="tg-collectioncounters" className="grid items-center justify-between sm:grid-cols-2 grid-cols-4 md:grid-cols-4 w-[65%] bg-blue-600"> */}
                    <div id='tg-collectioncounters' className='sm: w-[75%]  '>
                        <div id='tg-collectioncounters' className='flex flex-wrap justify-around'>
                            <div className='flexc px-6'>
                                {/* <div className="bg-[#93648d] flex w-[12%] rounded-full p-3 text-white mr-2"> */}
                                <div className='mr-2 flex w-[50px] rounded-full bg-[#93648d] p-3 text-white'>
                                    <FiMessageCircle size={28} />
                                </div>
                                <div className='tg-titlepluscounter'>
                                    <h2 className='text-xl text-[#93648d]'>Drama</h2>
                                    <h3
                                        data-from='0'
                                        className='text-sm text-gray-600'
                                        data-to='6179213'
                                        data-speed='8000'
                                        data-refresh-interval='50'
                                    >
                                        6,179,213
                                    </h3>
                                </div>
                            </div>
                            <div className='flexc px-6'>
                                <div className='flexc mr-2 w-[50px]  rounded-full bg-[#4cc3d9] p-3 text-white'>
                                    <FiMessageCircle size={28} />
                                </div>
                                <div className='tg-titlepluscounter'>
                                    <h2 className='text-xl text-[#4cc3d9]'>Horror</h2>
                                    <h3
                                        data-from='0'
                                        className='text-sm text-gray-600'
                                        data-to='6179213'
                                        data-speed='8000'
                                        data-refresh-interval='50'
                                    >
                                        6,179,213
                                    </h3>
                                </div>
                            </div>
                            <div className='flexc px-6'>
                                <div className='flexc mr-2 w-[50px] rounded-full bg-[#7bc8a4] p-3 text-white'>
                                    <FiMessageCircle size={28} />
                                </div>
                                <div className='tg-titlepluscounter'>
                                    <h2 className='text-xl text-[#7bc8a4]'>Romance</h2>
                                    <h3
                                        data-from='0'
                                        className='text-sm text-gray-600'
                                        data-to='6179213'
                                        data-speed='8000'
                                        data-refresh-interval='50'
                                    >
                                        6,179,213
                                    </h3>
                                </div>
                            </div>
                            <div className='flexc px-6'>
                                <div className='flexc mr-2 w-[50px]  rounded-full bg-[#f16745] p-3 text-white'>
                                    <FaRegStar size={28} />
                                </div>
                                <div className='tg-titlepluscounter'>
                                    <h2 className='text-xl text-[#f16745]'>Fashion</h2>
                                    <h3
                                        data-from='0'
                                        className='text-sm text-gray-600'
                                        data-to='6179213'
                                        data-speed='8000'
                                        data-refresh-interval='50'
                                    >
                                        6,179,213
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-4 flex justify-center px-16'>
                    <div className='flex w-[85%] items-center justify-between'>
                        <h2 className='text-2xl text-gray-700'>
                            <span className='text-sm'>Some Great Books</span> <br />
                            Picked By Authors
                        </h2>
                        <a className='tg-btn' href='#'>
                            View All
                        </a>
                    </div>
                    {/* <hr /> */}
                </div>

                {/* testimonials  */}
                <div
                    className='mx-auto my-8 flex h-96 w-full items-center bg-cover bg-cover bg-fixed bg-center bg-no-repeat shadow-lg'
                    style={{
                        backgroundImage:
                            "url('https://exprostudio.com/html/book_library/images/parallax/bgparallax-05.jpg')"
                    }}
                >
                    <Swiper
                        effect={'flip'}
                        grabCursor={true}
                        pagination={true}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className='mySwiper h-80 w-1/2'
                    >
                        <SwiperSlide>
                            <div className='item tg-testimonial flex flex-col items-center justify-center '>
                                <figure>
                                    <img
                                        src='https://exprostudio.com/html/book_library/images/author/imag-02.jpg'
                                        alt='image description'
                                        className='h-36 rounded-full border-2 bg-[#77b748] p-1'
                                    />
                                </figure>
                                <blockquote>
                                    <q>
                                        Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore tolore
                                        magna aliqua enim ad minim veniam, quis nostrud exercitation ullamcoiars nisi ut
                                        aliquip commodo.
                                    </q>
                                </blockquote>
                                <div className='tg-testimonialauthor'>
                                    <h3>Holli Fenstermacher</h3>
                                    <span>Manager @ CIFP</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* populater author */}
                <div className='mb-4 flex justify-center px-16'>
                    <div className='flex w-[85%] items-center justify-between'>
                        <h2 className='text-2xl text-gray-700'>
                            <span className='text-sm'>Strong Minds Behind Us</span> <br />
                            Most Popular Authors
                        </h2>
                        <a className='tg-btn' href='#'>
                            View All
                        </a>
                    </div>
                    {/* <hr /> */}
                </div>
                <div className='mt-[25px] flex justify-center'>
                    <div className='w-[77%]'>
                        <PopularauthorSwiper />
                    </div>
                </div>

                {/* discount for all  */}
                <div
                    className='cbg-cover mx-auto my-6 flex h-64 justify-center bg-cover bg-fixed bg-center bg-no-repeat'
                    // style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599008633840-052c7f756385?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5vdGVib29rfGVufDB8fDB8fHww')" }}
                    style={{
                        backgroundImage:
                            "url('https://exprostudio.com/html/book_library/images/parallax/bgparallax-06.jpg')"
                    }}
                >
                    <div className='flex w-[80%] flex-wrap items-center justify-between'>
                        <div className=' '>
                            <h2 className='text-2xl font-bold text-[#484848]'>Open Discount For All</h2>
                            <p className='text-sm font-bold text-[#484848]'>
                                Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore.
                            </p>
                        </div>
                        <a className='rounded bg-[#77b748] px-4 py-2 text-white' href='#'>
                            Read More
                        </a>
                    </div>
                </div>

                {/* latest news & article */}
                <div className='mb-4 flex justify-center px-16'>
                    <div className='flex w-[85%] items-center justify-between'>
                        <h2 className='text-2xl text-gray-700'>
                            <span className='text-sm'>Latest News & Articles</span> <br />
                            What's Hot In The News
                        </h2>
                        <a className='tg-btn' href='#'>
                            View All
                        </a>
                    </div>
                    {/* <hr /> */}
                </div>
                <div className='mt-[25px] flex justify-center'>
                    <div className='w-[75%]'>
                        <NewsSwiper />
                    </div>
                </div>
            </main>
        </>
    )
}
