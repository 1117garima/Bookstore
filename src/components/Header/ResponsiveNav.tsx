import Link from 'next/link'
import { useState } from 'react'
import { IoIosMenu } from 'react-icons/io'
import { IoChevronDown, IoChevronForward } from 'react-icons/io5'
import AllCategoriesList from '../AllCategoriesList'

const ResponsiveNav = () => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false)
    const [isAuthorsOpen, setIsAuthorsOpen] = useState(false)
    const [isNewsOpen, setIsNewsOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isProductOpen, setIsProductOpen] = useState(false)

    const categoryToggle = () => setIsCategoryOpen(!isCategoryOpen)
    const AuthorsToggle = () => setIsAuthorsOpen(!isAuthorsOpen)
    const NewsToggle = () => setIsNewsOpen(!isNewsOpen)
    const MenuToggle = () => setIsMenuOpen(!isMenuOpen)
    const ProductToggle = () => setIsProductOpen(!isProductOpen)

    return (
        <div>
            <div className='w-screen bg-white'>
                <ul className='px-[10px]'>
                    {/* All Categories */}

                    <li className='flex  cursor-pointer flex-col border-b-[1px] px-[10px] py-[10px] text-sm font-medium text-[#666]'>
                        <div className='flex items-center justify-between'>
                            All Categories
                            {isCategoryOpen ? (
                                <span className=' flex h-[20px] w-[20px] items-center justify-center bg-[#333] text-xs text-white'>
                                    {' '}
                                    <IoChevronDown onClick={() => categoryToggle()} />{' '}
                                </span>
                            ) : (
                                <span className=' flex h-[20px] w-[20px] items-center justify-center bg-[#333] text-xs text-white'>
                                    <IoChevronForward onClick={() => categoryToggle()} />
                                </span>
                            )}
                        </div>
                        {isCategoryOpen && (
                            <div>
                                <AllCategoriesList />
                            </div>
                        )}
                    </li>

                    {/* Home */}

                    <li className='cursor-pointer  border-b-[1px] px-[10px] py-[10px] text-sm font-medium text-[#666]'>
                        Home
                    </li>

                    {/* Authors */}
                    <li className='flex  cursor-pointer flex-col border-b-[1px] px-[10px] py-[10px] text-sm font-medium text-[#666]'>
                        <div className='flex items-center justify-between'>
                            Authors
                            {isAuthorsOpen ? (
                                <span className=' flex h-[20px] w-[20px] items-center justify-center bg-[#333] text-xs text-white'>
                                    <IoChevronDown onClick={() => AuthorsToggle()} />
                                </span>
                            ) : (
                                <span className=' flex h-[20px] w-[20px] items-center justify-center bg-[#333] text-xs text-white'>
                                    <IoChevronForward onClick={() => AuthorsToggle()} />
                                </span>
                            )}
                        </div>

                        {isAuthorsOpen && (
                            <ul className='mt-[7px] font-light '>
                                <li className='border-b-[1px] px-[7px] py-[7px]'>Authors</li>
                                <li className='px-[10px] py-[7px]'>Author Details</li>
                            </ul>
                        )}
                    </li>

                    {/* Best Selling */}

                    <li className='cursor-pointer  border-b-[1px] px-[10px] py-[10px] text-sm font-medium  text-[#666]'>
                        <Link href='/product'>Best Selling</Link>{' '}
                    </li>

                    {/* Weekly Sale */}

                    <li className='cursor-pointer  border-b-[1px] px-[10px] py-[10px] text-sm font-medium text-[#666]'>
                        Weekly Sale
                    </li>

                    {/* Latest News */}

                    <li className='flex  cursor-pointer flex-col border-b-[1px] px-[10px] py-[10px] text-sm font-medium  text-[#666]'>
                        <div className='flex items-center justify-between'>
                            Latest News
                            {isNewsOpen ? (
                                <span className=' flex h-[20px] w-[20px] items-center justify-center bg-[#333] text-xs text-white'>
                                    {' '}
                                    <IoChevronDown onClick={() => NewsToggle()} />{' '}
                                </span>
                            ) : (
                                <span className=' flex h-[20px] w-[20px] items-center justify-center bg-[#333] text-xs text-white'>
                                    <IoChevronForward onClick={() => NewsToggle()} />
                                </span>
                            )}
                        </div>

                        {isNewsOpen && (
                            <ul className='mt-[7px] font-light '>
                                <li className='border-b-[1px] px-[7px] py-[7px]'>News List</li>
                                <li className='border-b-[1px] px-[7px] py-[7px]'>News Grid</li>
                                <li className='px-[10px] py-[7px]'>News Detail</li>
                            </ul>
                        )}
                    </li>

                    {/* Contact */}

                    <li className='cursor-pointer  border-b-[1px] px-[10px] py-[10px] text-sm font-medium  text-[#666]'>
                        Contact
                    </li>

                    {/* Menu */}

                    <li className='flex  cursor-pointer flex-col border-b-[1px] px-[10px] py-[10px] text-2xl font-medium text-[#666]'>
                        <div className='flex items-center justify-between'>
                            <IoIosMenu />
                            {isMenuOpen ? (
                                <span className=' flex h-[20px] w-[20px] items-center justify-center bg-[#333] text-xs text-white'>
                                    {' '}
                                    <IoChevronDown onClick={() => MenuToggle()} />{' '}
                                </span>
                            ) : (
                                <span className=' flex h-[20px] w-[20px] items-center justify-center bg-[#333] text-xs text-white'>
                                    {' '}
                                    <IoChevronForward onClick={() => MenuToggle()} />
                                </span>
                            )}
                        </div>

                        {isMenuOpen && (
                            <ul className='mt-[7px] text-sm font-light '>
                                <li className='border-b-[1px] px-[7px] py-[7px]'>
                                    <div className='flex items-center  justify-between'>
                                        Products
                                        {isProductOpen ? (
                                            <span className=' flex h-[20px] w-[20px] items-center justify-center bg-[#333] text-xs text-white'>
                                                {' '}
                                                <IoChevronDown onClick={() => ProductToggle()} />{' '}
                                            </span>
                                        ) : (
                                            <span className=' flex h-[20px] w-[20px] items-center justify-center bg-[#333] text-xs text-white'>
                                                {' '}
                                                <IoChevronForward onClick={() => ProductToggle()} />
                                            </span>
                                        )}
                                    </div>
                                    {isProductOpen && (
                                        <ul className='mt-[7px] font-light '>
                                            <li className='border-b-[1px] px-[7px] py-[7px]'>
                                                <Link href='/product'> Products</Link>
                                            </li>
                                            <li className='px-[7px] py-[7px] '>Product Detail</li>
                                        </ul>
                                    )}
                                </li>

                                <li className='border-b-[1px] px-[7px] py-[7px]'>About Us</li>
                                <li className='border-b-[1px] px-[10px] py-[7px]'>404 Error</li>
                                <li className='px-[10px] py-[7px]'>Coming Soon</li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ResponsiveNav
