'use client'

import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { FaStar } from 'react-icons/fa'
import { FaBasketShopping } from 'react-icons/fa6'

const Featured = () => {
    return (
        <div className='w-[90vw] bg-[#f7f7f7] lg:w-[55vw]  xl:w-[58vw]  '>
            <div className='space-x-4 px-[20px] py-[30px] lg:grid lg:grid-cols-8'>
                {/* BOOK */}
                <div className='hidden lg:col-span-2 lg:block xl:col-span-3 '>
                    <Image
                        src='http://exprostudio.com/html/book_library/images/img-04.png'
                        alt=''
                        height={300}
                        width={250}
                        className='h-[204px] w-[150px] xl:h-[300px] xl:w-[250px]'
                    />
                </div>

                <div className='flex flex-col gap-y-4 lg:col-span-6  xl:col-span-5 '>
                    {/* BOUT DESIGNS */}

                    <div className='flex flex-col gap-y-3'>
                        {/* FEATURED x CROSS */}

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <p className='inline-block rounded-l bg-[#f16945] px-[5px] py-[5px] text-xs text-white'>
                                    Featured
                                </p>
                                <span className='ml-[-3px] text-[26px] text-[#f16945]'>
                                    <FaPlay />
                                </span>
                            </div>

                            <div>
                                <p className='mr-[30px] rounded-full bg-[#f16945] p-[5px] text-sm text-white'>
                                    <ImCross />
                                </p>
                            </div>
                        </div>

                        <h1 className='text-[26px] font-bold leading-[28px] text-[#484848] xl:text-[34px] xl:leading-[42px]'>
                            Things To Know About Green Flat Desgin
                        </h1>

                        <div>
                            <div className='text-[18px] font-light text-[#666]'>
                                <span>By:</span>
                                <span className='hover:text-[#337ab7]'>Farrah Whisenhunt</span>
                            </div>

                            <div className='flex gap-1'>
                                <FaStar className='text-[#fcd01e]' />
                                <FaStar className='text-[#fcd01e]' />
                                <FaStar className='text-[#fcd01e]' />
                                <FaStar className='text-[#fcd01e]' />
                                <FaStar className='text-[#666]' />
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className='flex items-center gap-[12px]'>
                            <span className='text-[22px] font-bold text-[#484848] xl:text-[40px] '>$23.18</span>
                            <span className='text-[15px] font-medium text-[#484848] line-through xl:text-[26px]'>
                                $30.20
                            </span>
                        </div>

                        <button
                            className='mt-[2px] flex items-center gap-[5px] rounded-full bg-[#6f9a37] px-[15px]  py-[10px] text-[13px]  text-[#fff] xl:px-[25px] xl:py-[15px]
            '
                            style={{
                                boxShadow: 'inset 0 -2px 0 0 #517127'
                            }}
                        >
                            <FaBasketShopping /> Add to basket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
