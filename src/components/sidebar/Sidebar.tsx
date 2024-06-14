'use client'

import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import Table from './CategoryTable'
import TrendingTable from './trendingTable/TrendingTable'
import BloggerTable from './bloggerTable/BloggerTable'
import InstagramTable from '../InstagramTable'

const Sidebar = () => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <div className='pl-[30px] pr-[30px] lg:pl-[80px] '>
            {/* SEARCH */}
            <div
                className={`flex  w-full items-center gap-[5px] rounded-[4px] border-[1.5px] px-[15px]  py-[14px]  `}
                style={{ borderColor: isFocused ? '#6f9a37' : '#d7d6d6' }}
            >
                <input
                    className=' w-full bg-transparent outline-none placeholder:text-gray-400 '
                    type='text'
                    placeholder='Search By Title,Author,Key...'
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />

                <CiSearch className='text-[30px]' />
            </div>

            <Table />
            <TrendingTable />
            <InstagramTable />
            <BloggerTable />
        </div>
    )
}

export default Sidebar
