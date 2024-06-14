import Link from 'next/link'

const Temporary = () => {
    return (
        <div>
            <Link href='#' className='flex items-center space-x-3 rtl:space-x-reverse'>
                {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>BookStore</span>
            </Link>
            <button
                data-collapse-toggle='navbar-dropdown'
                type='button'
                className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
                aria-controls='navbar-dropdown'
                aria-expanded='false'
            >
                <span className='sr-only'>Open main menu</span>
                <svg
                    className='h-5 w-5'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 17 14'
                >
                    <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M1 1h15M1 7h15M1 13h15'
                    />
                </svg>
            </button>
            <div className='hidden w-full md:block md:w-auto' id='navbar-dropdown'>
                {/* <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> */}
                <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium rtl:space-x-reverse md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 '>
                    <li>
                        <Link
                            href='/'
                            className='block rounded bg-blue-700 px-3 py-2 text-white dark:bg-blue-600 md:bg-transparent md:p-0 md:text-blue-700 md:dark:bg-transparent md:dark:text-blue-500'
                            aria-current='page'
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <button
                            id='dropdownNavbarLink'
                            data-dropdown-toggle='dropdownNavbar'
                            className='flex w-full items-center justify-between rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                        >
                            Dropdown{' '}
                            <svg
                                className='ms-2.5 h-2.5 w-2.5'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 10 6'
                            >
                                <path
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='m1 1 4 4 4-4'
                                />
                            </svg>
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div
                            id='dropdownNavbar'
                            className='z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white font-normal shadow dark:divide-gray-600 dark:bg-gray-700'
                        >
                            <ul
                                className='py-2 text-sm text-gray-700 dark:text-gray-400'
                                aria-labelledby='dropdownLargeButton'
                            >
                                <li>
                                    <Link
                                        href='#'
                                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='#'
                                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                                    >
                                        Settings
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='#'
                                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                                    >
                                        Earnings
                                    </Link>
                                </li>
                            </ul>
                            <div className='py-1'>
                                <Link
                                    href='#'
                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                                >
                                    Sign out
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className='hover:bg-white'>
                        <Link
                            href='#'
                            className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                        >
                            Services
                        </Link>
                    </li>
                    <li className='hover:bg-white'>
                        <Link
                            href='/product'
                            className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                        >
                            Best Selling
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='#'
                            className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                        >
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='#'
                            className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Temporary
