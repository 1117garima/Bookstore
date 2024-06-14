'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { BsCart } from 'react-icons/bs'
import { CiHeart } from 'react-icons/ci'
import { FaRegQuestionCircle } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { IoChevronDown, IoChevronForward } from 'react-icons/io5'
import { IoIosMenu } from 'react-icons/io'
import AllCategoriesList from '../AllCategoriesList'
import ResponsiveNav from './ResponsiveNav'

import { FiLogIn, FiLogOut } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import HeaderSearchForm from '../../../src/components/common/HeaderSearchForm'

const Header = () => {
    //useState for dropdown on hover
    const [isAuthorsHovering, setIsAuthorsHovering] = useState(false)
    const [isNewsHovering, setIsNewsHovering] = useState(false)
    const [isCategoriesHovering, setIsCategoriesHovering] = useState(false)
    const [isMenuHovering, setIsMenuHovering] = useState(false)
    const [isbooksHovering, setIsbooksHovering] = useState(false)

    //Functions for handling mouseOver for each Link
    const handleAuthorsMouseOver = () => setIsAuthorsHovering(true)
    const handleAuthorsMouseOut = () => setIsAuthorsHovering(false)

    const handleNewsMouseOver = () => setIsNewsHovering(true)
    const handleNewsMouseOut = () => setIsNewsHovering(false)

    const handleCategoriesMouseOver = () => setIsCategoriesHovering(true)
    const handleCategoriesMouseOut = () => setIsCategoriesHovering(false)

    const handleMenuMouseOver = () => setIsMenuHovering(true)
    const handleMenuMouseOut = () => setIsMenuHovering(false)

    const handlebooksMouseOver = () => setIsbooksHovering(true)
    const handlebooksMouseOut = () => setIsbooksHovering(false)

    //Toggle menu
    const [open, setOpen] = useState(false)

    //temporary
    const slug = 'author detail'

    const [showMenu, setShowMenu] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setShowMenu(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const [searchOpen, setSearchOpen] = useState(false)

    const handleSearchToggle = () => {
        setSearchOpen(!searchOpen)
    }

    const handleSearchCancel = () => {
        setSearchOpen(false)
        // setSearchQuery('')
    }

    return (
        <div className='flex flex-col'>
            <header>
                <div className='topbar flex justify-center text-gray-600'>
                    <div className='flex h-12 w-9/12 flex-wrap items-center justify-between bg-white'>
                        <div className='w-1/6'>
                            <ul className='addnav flex items-center justify-between text-xs'>
                                <li className='mr-2 border-r-2 border-gray-200'>
                                    <a href='' className='mr-2 flex items-center'>
                                        <span className='pr-2'>
                                            <MdOutlineMailOutline size={22} />
                                        </span>{' '}
                                        Contact
                                    </a>
                                </li>
                                <li className='mr-2 border-r-2 border-gray-200'>
                                    <a href='' className='mr-2 flex items-center'>
                                        <span className='pr-2'>
                                            <FaRegQuestionCircle size={22} />
                                        </span>{' '}
                                        Help
                                    </a>
                                </li>
                                <li className='relative'>
                                    <Link href='/orders' className='flex items-center'>
                                        Orders
                                    </Link>
                                    <ul className='dropdown-menu absolute hidden pt-1 text-gray-700'>
                                        <li>
                                            <a
                                                href='#'
                                                className='whitespace-no-wrap block rounded-t bg-gray-200 px-4 py-2 hover:bg-gray-400'
                                            >
                                                USD
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='#'
                                                className='whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400'
                                            >
                                                EUR
                                            </a>
                                        </li>
                                        {/* Add more currency options as needed */}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div
                            className='userlogin relative flex w-28 items-center justify-between text-xs'
                            ref={dropdownRef}
                        >
                            <figure>
                                <img
                                    src='https://exprostudio.com/html/book_library/images/users/img-01.jpg'
                                    alt="Melonie's Profile"
                                    className='cursor-pointer rounded-full'
                                    onClick={toggleMenu}
                                />
                            </figure>
                            <span>Hi, Melonie</span>
                            <div
                                className={`dropdown-menu ${showMenu ? 'block' : 'hidden'} absolute top-8 z-50 w-40 rounded-md bg-white px-4 py-2 text-sm shadow-md transition duration-300 ease-in-out`}
                            >
                                <ul>
                                    <li className='flex items-center'>
                                        <FiLogIn className='mr-2' />
                                        <Link href='/login' className='hover:text-gray-900'>
                                            Login
                                        </Link>
                                    </li>
                                    <li className='flex items-center'>
                                        <FiLogOut className='mr-2' />
                                        <a href='#' className='hover:text-gray-900'>
                                            Logout
                                        </a>
                                    </li>
                                    {/* Add more user options as needed */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

                {/* searchbar */}
                <div className='flex justify-center'>
                    <div className='flex h-28 w-10/12 flex-wrap items-center justify-around bg-white px-9'>
                        <div className='logo '>
                            <Link href='/'>
                                {/* <img src="https://exprostudio.com/html/book_library/images/logo.png" alt="logo" /> */}
                                <img
                                    src='https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-1/168306631_251265416702022_7549293055333412913_n.jpg?stp=c7.0.200.200a_dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hJ0TfveeAsgQ7kNvgFXkbZn&_nc_oc=AdgmwlWBmldJcrCvYJW4cf0-uAIwZz890OsDT1jH03UBmum6OctXYLEJncAvsvaOPkw&_nc_ht=scontent.fktm3-1.fna&oh=00_AfBHWfPVv2HFEFXlaV4yzKRrYr4O-I_5Rp0n45lWy7jYtQ&oe=6657FBBA'
                                    height={70}
                                    width={70}
                                    alt='logo'
                                />
                            </Link>
                        </div>
                        <div className='flex w-6/12'>
                            {/* <input className="w-full border-2 border-black-900 pl-4 pr-6 py-2 text-lg outline-none text-sm " type="text" placeholder="Search by title, author, keyword, ISBN..." /> */}
                            {/* <div className='flex lg:px-40 '> */}
                            <HeaderSearchForm setSearchOpen={setSearchOpen} />
                            &nbsp;
                            {/* <button
                  title='close search bar'
                  onClick={() => handleSearchCancel()}
                  aria-label='cross'
                >
                  <AiOutlineClose className='h-5 w-5 text-body transition-all hover:scale-125 hover:text-primary' />
                </button> */}
                            {/* </div> */}
                        </div>
                        <div className='flex items-center '>
                            <div>
                                <Link href='/wishlist' className='wishlist flex items-center'>
                                    <button
                                        type='button'
                                        className='relative inline-flex items-center rounded-lg p-3 text-center text-sm font-medium focus:outline-none    '
                                    >
                                        <CiHeart size={22} />
                                        <div className='absolute -end-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white dark:border-gray-900'>
                                            20
                                        </div>
                                    </button>
                                    <span className=''>Wishlist</span>
                                </Link>
                            </div>
                            <div>
                                {/* <Link href="./cards" className="cart flex ml-4 items-center"><BsCart size={18} /><span>$123.00</span></Link> */}
                                <Link href='/cart/all' className='cart ml-4 flex items-center'>
                                    <BsCart size={18} />
                                    <span className='ml-2'>Cart</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* navbar  */}
                <nav className=' border-gray-200 bg-[#77b748] dark:border-gray-700'>
                    <div
                        className=' lflex-wrap  text-whi te mx-auto hidden h-[50px] max-w-screen-xl  items-center justify-center px-4
          lg:flex'
                    >
                        <div
                            className='flex h-full cursor-pointer items-center  px-6 duration-500 hover:bg-[#6ba940]'
                            onMouseOver={handleCategoriesMouseOver}
                            onMouseOut={handleCategoriesMouseOut}
                        >
                            <div>
                                <span className=' flex items-center gap-x-2 text-sm font-medium text-white'>
                                    All Categories <IoChevronDown />
                                </span>

                                {isCategoriesHovering && (
                                    <div className='absolute mt-[15px] w-full'>
                                        <AllCategoriesList />
                                    </div>
                                )}
                            </div>
                        </div>

                        <Link
                            href='/'
                            className='flex h-full items-center px-6 text-sm font-medium text-white duration-500 hover:bg-[#6ba940]'
                        >
                            Home
                        </Link>

                        <div
                            className='flex h-full cursor-pointer items-center  px-6 duration-500 hover:bg-[#6ba940]'
                            onMouseOver={handleAuthorsMouseOver}
                            onMouseOut={handleAuthorsMouseOut}
                        >
                            <div>
                                <p className='flex items-center gap-x-2 text-sm font-medium text-white '>
                                    Authors <IoChevronDown />
                                </p>

                                {isAuthorsHovering && (
                                    <div className=' absolute z-40 mt-[15px] flex w-[230px] flex-col bg-white text-sm text-[#666]'>
                                        <Link href='/author' className='border-b-[1px] py-[8px] pl-[10px]'>
                                            Author
                                        </Link>

                                        <Link href={`/author/${slug}`} className='py-[8px] pl-[10px]'>
                                            Author Detail
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>

                        <Link
                            href='/books'
                            className='flex h-full items-center px-6 text-sm font-medium text-white duration-500 hover:bg-[#6ba940]'
                        >
                            Best Selling
                        </Link>

                        <Link
                            href='/books'
                            className='flex h-full items-center px-6 text-sm font-medium text-white hover:bg-[#6ba940]'
                        >
                            Weekly Sale
                        </Link>

                        <div
                            className='flex h-full  cursor-pointer items-center px-6 duration-500 hover:bg-[#6ba940]'
                            onMouseOver={handleNewsMouseOver}
                            onMouseOut={handleNewsMouseOut}
                        >
                            <div>
                                <span className='flex items-center gap-x-2 text-sm font-medium text-white'>
                                    Latest News <IoChevronDown />
                                </span>

                                {isNewsHovering && (
                                    <div className=' absolute z-40 mt-[15px] flex w-[230px] flex-col bg-white text-sm text-[#666]'>
                                        <Link href='#' className='border-b-[1px] py-[8px] pl-[10px]'>
                                            News List
                                        </Link>

                                        <Link href='/news' className='border-b-[1px] py-[8px] pl-[10px]'>
                                            News Grid
                                        </Link>

                                        <Link href='#' className='py-[8px] pl-[10px]'>
                                            News Detail
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>

                        <Link
                            href='/contact'
                            className='flex h-full items-center px-6 text-sm font-medium text-white duration-500 hover:bg-[#6ba940]'
                        >
                            Contact
                        </Link>

                        <div
                            className='flex h-full cursor-pointer items-center bg-[#6ba940] px-[20px] '
                            onMouseOver={handleMenuMouseOver}
                            onMouseOut={handleMenuMouseOut}
                        >
                            <div>
                                <span className='flex items-center gap-x-2 text-2xl font-medium text-white'>
                                    <IoIosMenu /> <IoChevronDown className='text-sm' />
                                </span>

                                {isMenuHovering && (
                                    <div className=' absolute z-40 mt-[13px] flex w-[230px] flex-col bg-white text-sm text-[#666] shadow-lg '>
                                        <div onMouseOver={handlebooksMouseOver} onMouseOut={handlebooksMouseOut}>
                                            <p className='flex items-center justify-between border-b-[1px] py-[8px] pl-[10px]  pr-[20px]'>
                                                bookss <IoChevronForward />
                                            </p>
                                            {isbooksHovering && (
                                                <div className='absolute  right-[230px] top-[0px] z-40 flex w-[230px] flex-col bg-white text-sm text-[#666] shadow-md  '>
                                                    <Link href='/books' className='border-b-[1px] py-[8px] pl-[10px]'>
                                                        All bookss
                                                    </Link>
                                                    <Link href='#' className='border-b-[1px] py-[8px] pl-[10px]'>
                                                        {' '}
                                                        books Detail
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                        <Link href='#' className='border-b-[1px] py-[8px] pl-[10px]'>
                                            About Us
                                        </Link>

                                        <Link href='#' className='border-b-[1px] py-[8px] pl-[10px]'>
                                            404 Error
                                        </Link>

                                        <Link href='#' className='py-[8px] pl-[10px]'>
                                            Coming Soon
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='h-[50px] lg:hidden'>
                        <div className='flex h-full   items-center pl-[40px]'>
                            <IoIosMenu
                                className='  flex cursor-pointer flex-col rounded border-2 border-white text-[30px] text-white'
                                onClick={() => setOpen(!open)}
                            />
                            {open && (
                                <div className='absolute top-[258px] z-40  ml-[-40px]'>
                                    <ResponsiveNav />
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
