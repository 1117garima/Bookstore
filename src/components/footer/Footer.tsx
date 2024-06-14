'use client'
import Image from 'next/image'
import { BiLeaf } from 'react-icons/bi'
import { CiHeart, CiClock1, CiMail } from 'react-icons/ci'
import { IoPricetagOutline, IoRocketOutline } from 'react-icons/io5'
import { BsBuildings } from 'react-icons/bs'
import { FiPhone } from 'react-icons/fi'
import { bloggerData } from '@/dummy/bloggersData'
import { useState } from 'react'
import About from '../About'

const Footer = () => {
    const [isFocused, setIsFocused] = useState(false)
    return (
        <div className='mt-[80px]'>
            <footer className=' border-t-2 border-[#77b748] bg-[#f7f7f7] lg:pl-[10px]'>
                {/* SERVICES */}
                <div className=' col-xs-12  col-sm-12 col-md-12 col-lg-12 mx-[20px] border-b-[0.5px] pb-[30px] pt-[60px] lg:mx-[80px]'>
                    <ul className='= flex  flex-col place-items-center items-center gap-y-6 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-center lg:gap-x-9 '>
                        <li className='flex items-center gap-3'>
                            <span className='tg-clientserviceicon text-[#93648d]'>
                                <IoRocketOutline size={30} />
                            </span>
                            <div className='tg-titlesubtitle'>
                                <h3 className='text-[18px] font-medium text-[#484848] lg:text-[22px]'>Fast Delivery</h3>
                                <p className='text-sm text-[#666] lg:text-[16px]'>Shipping Worldwide</p>
                            </div>
                        </li>
                        <li className='flex items-center gap-3'>
                            <span className='tg-clientserviceicon text-[#4cc3d9]'>
                                <IoPricetagOutline size={30} />
                            </span>
                            <div className='tg-titlesubtitle'>
                                <h3 className='text-[18px] font-medium text-[#484848] lg:text-[22px]'>Open Discount</h3>
                                <p className='text-sm text-[#666] lg:text-[16px]'>Offering Open Discount</p>
                            </div>
                        </li>
                        <li className='flex items-center gap-3'>
                            <span className='tg-clientserviceicon text-[#7bc8a4]'>
                                <BiLeaf size={30} />
                            </span>
                            <div className='tg-titlesubtitle'>
                                <h3 className='text-[18px] font-medium text-[#484848] lg:text-[22px]'>
                                    Eyes On Quality
                                </h3>
                                <p className='text-sm text-[#666] lg:text-[16px]'>Publishing Quality Work</p>
                            </div>
                        </li>
                        <li className='flex items-center gap-3'>
                            <span className='tg-clientserviceicon text-[#f16745]'>
                                <CiHeart size={30} />
                            </span>
                            <div className='tg-titlesubtitle'>
                                <h3 className='text-[18px] font-medium text-[#484848] lg:text-[22px]'>24/7 Support</h3>
                                <p className='text-sm text-[#666] lg:text-[16px]'>Serving Every Moments</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* LISTS */}

                <div className='flex flex-col gap-x-5 border-b-[1px] px-[25px] pb-[20px] pt-[40px] lg:grid lg:grid-cols-3  lg:px-[80px]'>
                    {/* About Company */}
                    <div className='flex flex-col gap-y-5'>
                        <Image src='/flogo.png' alt='logo' width={200} height={200} className=' ' />
                        <About />
                    </div>

                    {/* Shipping & info */}
                    <div className='mt-[30px] lg:mt-0'>
                        <h3 className='border-b-[1px] pb-[10px] text-[16px] font-medium text-[#404040] '>
                            Shipping And Help Information
                        </h3>

                        <div className='mt-[20px] grid grid-cols-2'>
                            <ul className='list-disc space-y-5 text-[13px] text-[#666] '>
                                <li className='cursor-pointer duration-300 hover:text-[#6f9a37] hover:marker:text-[#337ab7]'>
                                    Terms of Use
                                </li>
                                <li className='cursor-pointer duration-300 hover:text-[#6f9a37] hover:marker:text-[#337ab7]'>
                                    Terms of Sale
                                </li>
                                <li className='cursor-pointer duration-300 hover:text-[#6f9a37] hover:marker:text-[#337ab7]'>
                                    Returns
                                </li>
                                <li className='cursor-pointer duration-300 hover:text-[#6f9a37] hover:marker:text-[#337ab7]'>
                                    Privacy
                                </li>
                                <li className='cursor-pointer duration-300 hover:text-[#6f9a37] hover:marker:text-[#337ab7]'>
                                    Cookies
                                </li>
                                <li className='cursor-pointer duration-300 hover:text-[#6f9a37] hover:marker:text-[#337ab7]'>
                                    Conact Us
                                </li>
                                <li className='cursor-pointer duration-300 hover:text-[#6f9a37] hover:marker:text-[#337ab7]'>
                                    Our Affiliates
                                </li>
                                <li className='cursor-pointer duration-300 hover:text-[#6f9a37] hover:marker:text-[#337ab7]'>
                                    Vision & Aim
                                </li>
                            </ul>

                            <ul className='list-disc space-y-5 text-[13px] text-[#666] '>
                                <li className='cursor-pointer duration-300 hover:text-[#6f9a37] hover:marker:text-[#337ab7]'>
                                    Our Stories
                                </li>
                                <li className='cursor-pointer duration-300 hover:text-[#6f9a37] hover:marker:text-[#337ab7]'>
                                    Meet Our Team
                                </li>
                                <li className='cursor-pointer duration-300 hover:text-[#6f9a37] hover:marker:text-[#337ab7]'>
                                    FAQ
                                </li>
                                <li className='cursor-pointer duration-300 hover:text-[#6f9a37] hover:marker:text-[#337ab7]'>
                                    Testimonials
                                </li>
                                <li className='cursor-pointer duration-300 hover:text-[#6f9a37] hover:marker:text-[#337ab7]'>
                                    Join Our Team
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Top Selling Authors */}
                    <div className='mt-[30px] lg:mt-0'>
                        <h3 className='border-b-[1px] pb-[10px] text-[16px] font-medium text-[#404040] '>
                            Top Selling Authors
                        </h3>
                        <div className='ml-[10px] mt-[20px]'>
                            {bloggerData.slice(0, 3).map((data, index) => (
                                <div
                                    className='group mb-5 grid grid-cols-6 items-center sm:grid-cols-7 md:grid-cols-8 md:gap-3 lg:grid-cols-10  lg:gap-3 xl:gap-0 '
                                    key={index}
                                >
                                    <div className='col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-3 '>
                                        <Image
                                            src={data.photo}
                                            alt=''
                                            height={76}
                                            width={76}
                                            className='image group-hover:shadow-black/35 relative h-[85px] w-[22vw] border-[4px] border-transparent object-cover hover:cursor-pointer group-hover:shadow-lg md:w-[85px]'
                                        />
                                    </div>

                                    <div className='col-span-4 sm:col-span-5  md:col-span-7 lg:col-span-7 '>
                                        <h1 className='text-base font-medium text-[#666] hover:cursor-pointer group-hover:text-[#6f9a37]'>
                                            {data.name}
                                        </h1>

                                        <p className='text-[13px] text-[#666]'> {data.books}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SIGNUP */}
                <div className='flex flex-col  gap-y-6 pb-[40px] pt-[40px] lg:grid lg:grid-cols-2 lg:gap-y-0'>
                    <div className='place-content-start pl-[30px] lg:pl-[80px]'>
                        <h1 className='text-[30px] font-medium text-[#77b748]'>Signup Newsletter!</h1>
                        <p className='text-[14px] text-[#484848] lg:text-[17px]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                    <div
                        className='ml-[30px] flex w-[90vw] items-center gap-[5px] rounded-[4px] border-[1.5px] bg-white px-[15px] py-[12px] lg:ml-0 lg:w-[40vw]'
                        style={{ borderColor: isFocused ? '#6f9a37' : '#d7d6d6' }}
                    >
                        <input
                            className='w-full bg-transparent outline-none placeholder:text-[14px] placeholder:leading-[14px] placeholder:text-[#666]'
                            type='text'
                            placeholder='Enter Your Email ID'
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        />
                        <CiMail className='text-[20px] leading-5' />
                    </div>

                    <div></div>
                </div>

                {/* FOOT OF FOOTER */}
                <div className='flex h-20 flex-col  items-center justify-center gap-y-3  bg-[#484848] px-[30px] text-white sm:h-16 sm:flex-row sm:justify-around'>
                    <p className='order-2 text-[12px] sm:order-none'>2017 All Rights Reserved By © Book Library</p>

                    <img src='https://exprostudio.com/html/book_library/images/paymenticon.png' alt='' />
                </div>
            </footer>
        </div>
    )
}

export default Footer
