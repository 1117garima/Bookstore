import { categoryData } from '@/dummy/categoryData'
import { useCategoriesQuery } from '@/lib/features/api/product/categoryApi'
import Link from 'next/link'
import React from 'react'

const Table = () => {
    const { data } = useCategoriesQuery()

    return (
        <div className='mt-7 flex flex-col'>
            {/* HEAD */}
            <h1 className='mb-[7px] rounded-md bg-gray-600 px-[25px] py-[10px] text-white '>Categories</h1>
            {/* BODY */}
            <div>
                <ul className='ml-[5px] mr-[5px] flex justify-between border-b-[1.5px] border-gray-300  py-[12px] text-[13px] text-[#666] '>
                    <Link href={`/books`}>
                        {' '}
                        <li className='ml-[10px] '>All</li>
                    </Link>
                </ul>
                {data?.data?.map((data: any) => (
                    <ul className='ml-[5px] mr-[5px] flex justify-between border-b-[1.5px] border-gray-300  py-[12px] text-[13px] text-[#666] '>
                        {/* <Link href={`books/?category_id=${data?.id}`}> <li className='ml-[10px] '>{data?.name}</li> </Link> */}
                        <Link href={`books/?category=${data?.id}`}>
                            {' '}
                            <li className='ml-[10px] '>{data?.name}</li>{' '}
                        </Link>
                        {/* <li className='mr-[10px]'>{data.count}</li> */}
                    </ul>
                ))}
            </div>
            {/* FOOT */}
            <p className='ml-[17px] py-[10px] text-[13px]  text-[#666]'>View All</p>
        </div>
    )
}

export default Table
