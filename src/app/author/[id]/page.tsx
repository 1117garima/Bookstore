'use client'

import ParallexHeader from '@/components/ParallexHeader'
import { bookData } from '@/dummy/bookData'
import { useSingleAuthorQuery } from '@/lib/features/api/author/authorApi'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { FaPlay, FaStar } from 'react-icons/fa'
import { FaBasketShopping } from 'react-icons/fa6'

const AuthorDetailPage = () => {
    const { id } = useParams()

    const { data } = useSingleAuthorQuery(id)

    //author details dummy
    const authorDetails = {
        photo: 'https://exprostudio.com/html/book_library/images/author/imag-25.jpg',
        name: 'Silence of the lambs',
        books: '17,658 Publised Books'
    }

    //Parallex header
    const title = 'Author'
    const pathname = 'Author > Authors Title'

    return (
        <div>
            {/* Header */}
            <ParallexHeader title={title} pathname={pathname} />

            {/* Content Body */}
            <div className='flex flex-col gap-x-6 gap-y-[20px] sm:grid sm:grid-cols-7 md:grid-cols-5 lg:grid-cols-3'>
                {/* image */}
                <div className='col-span-3 pl-[15px] md:col-span-2 md:pl-[30px] lg:col-start-1 lg:col-end-2 lg:pl-[50px] '>
                    {/* <Image src={authorDetails.photo} alt="Author image in detail" height={370} width={370} className="sm:h-[370px] sm:w-[370px] h-[60vh] w-[94vw]" /> */}
                    <Image
                        src={data?.image}
                        alt='Author image in detail'
                        height={370}
                        width={370}
                        className='h-[60vh] w-[94vw] sm:h-[370px] sm:w-[370px]'
                    />
                </div>

                {/* Details x Author books */}
                <div className='col-span-4 pl-[15px] sm:pl-0 md:col-span-3 lg:col-start-2 lg:col-end-4'>
                    {/* NamexBookxSocials  */}
                    <div className='mb-[30px] flex h-[110px] w-[96%] flex-col items-start  space-y-[12px] border-b-[0.5px] border-[#c3c2c2] sm:h-[130px] sm:w-[94%] lg:h-[90px] lg:flex-row lg:items-center lg:justify-between'>
                        <div className='  '>
                            <p className='sm:text-md text-[14px] font-normal text-[#484848]'>{authorDetails.books}</p>
                            {/* <h2 className="sm:text-[30px] text-[20px] text-[#484848]">{authorDetails.name}</h2> */}
                            <h2 className='text-[20px] text-[#484848] sm:text-[30px]'>{data?.name}</h2>
                        </div>

                        <div className='flex cursor-pointer items-center gap-2'>
                            <Image
                                src='/facebook.png'
                                alt=''
                                width={200}
                                height={200}
                                className='h-[25px] w-[25px] object-cover'
                            />

                            <Image
                                src='/instagram.png'
                                alt=''
                                width={200}
                                height={200}
                                className='h-[25px] w-[25px] object-cover'
                            />
                            <Image src='/pinterest.png' alt='' width={200} height={200} className='h-[25px] w-[25px]' />
                            <Image src='/linkedin.png' alt='' width={200} height={200} className='h-[25px] w-[25px]' />
                        </div>
                    </div>
                    {/* Description */}
                    <div className='space-y-4 pr-[65px] text-start text-[14px] text-[#666]'>
                        {/* <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt labore toloregna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoiars nisiuip commodo consequat aute irure dolor in aprehenderit aveli esseati cillum dolor fugiat nulla pariatur cepteur sint occaecat cupidatat.</p>

            <p>Caanon proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnisate natus error sit voluptatem accusantium doloremque totam rem aperiam, eaque ipsa quae abillo inventoe veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.</p>

            <p>Voluptas sit asapernatur aut odit aut fugit, sed quia consequuntur magni dolores eos quistan ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</p> */}
                        <p>{data?.bio}</p>
                    </div>

                    {/* Other books of author */}
                    <div className='mt-[16px]'>
                        {/* title */}
                        <p className='w-[92%] border-b-[1px] border-[#c3c2c2] pb-[10px] text-[22px] font-medium text-[#484848] '>
                            Books of Nora
                        </p>

                        {/* books */}
                        <div className='mt-[30px] flex flex-col gap-x-2 gap-y-7 sm:ml-[7px] sm:grid sm:grid-cols-2 lg:ml-[10px]  lg:w-[59vw] lg:grid-cols-3 xl:grid-cols-4'>
                            {/* {bookData.slice(0, 8).map((data, index) => ( */}
                            <div className='flex flex-col items-start gap-y-5'>
                                <div className='flex flex-col gap-y-[10px]'>
                                    <div>
                                        <Image
                                            src={data?.image}
                                            alt=''
                                            width={200}
                                            height={200}
                                            className='h-[87vh] w-[88vw] object-cover sm:h-[40vh] sm:w-[23vw] md:h-[255px] md:w-[180px] lg:h-[226px] lg:w-[160px] xl:h-[257px] xl:w-[171px]'
                                        />
                                    </div>
                                    {/* <p className=" text-[#666] text-[13px] border-b-[0.5px] border-[#bfbdbd] leading-8 w-[82%] hover:text-[#337ab7]">{data.category}</p> */}
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

                                    {/* <Link href={`/product/${data?.name}`} className="text-[#484848] text-[16px] font-medium leading-[19px] hover:text-[#6f9a37] ">{data?.name}</Link> */}
                                    <Link
                                        href={`/author/${data?.name}`}
                                        className='text-[16px] font-medium leading-[19px] text-[#484848] hover:text-[#6f9a37] '
                                    >
                                        {data?.name}
                                    </Link>
                                </div>

                                <div className=''>
                                    <div className=' leading-[13px] text-[#666]'>
                                        <span className='text-[14px]'>By: </span>
                                        {/* <span className="text-[13px] hover:text-[#337ab7]">{data.author}</span> */}
                                        {/* <span className="text-[13px] hover:text-[#337ab7]">{data.name}</span> */}
                                    </div>

                                    <div className='mt-[6px] flex gap-1 text-sm'>
                                        <FaStar className='text-[#fcd01e]' />
                                        <FaStar className='text-[#fcd01e]' />
                                        <FaStar className='text-[#fcd01e]' />
                                        <FaStar className='text-[#fcd01e]' />
                                        <FaStar className='text-[#666]' />
                                    </div>

                                    {/* <div className="flex items-center">
                      <p className="text-[#77b748] text-[18px] font-medium">{data.currentPrice}</p>
                      <p className="text-[#666] text-[13px] pl-[10px] line-through" >{data.previousPrice}</p>
                    </div> */}
                                </div>

                                <button className='flex items-center gap-x-2 rounded-full border-[1px] border-gray-200 px-[12px] py-[9px] text-[13px] text-[#666] hover:bg-[#77b748] hover:text-[#fff]'>
                                    {' '}
                                    <FaBasketShopping /> Add to Basket
                                </button>
                            </div>
                            {/* ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorDetailPage
