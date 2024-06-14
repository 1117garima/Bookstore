'use client'

import React, { useEffect, useState } from 'react'
import Categories from '@/components/collections/Categories'
import Products from '@/components/collections/Products'
import { fetchApiData } from '@/utils/fetchApiData'
import { useRouter } from 'next/navigation'
import { appendSearchParams, createSearchParms } from '@/utils/modifySearchParams'
import { pagination } from '@/constants/pagination'
import PaginationComponent from '@/components/common/Pagination'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'

/* to avoid, ref-fetching of data, if there is not any search params, cause SSR have already fetched.  */

let changedFilterOnce = false

import Featured from '@/components/Featured'
import Sidebar from '@/components/sidebar/Sidebar'
import { FaPlay, FaStar } from 'react-icons/fa'
import { FaBasketShopping } from 'react-icons/fa6'
import { CiHeart } from 'react-icons/ci'
import Link from 'next/link'
import { bookData } from '@/dummy/bookData'
import Image from 'next/image'
import ParallexHeader from '@/components/ParallexHeader'

export default function ClientCollection({
    products: productsData,
    searchParams,
    categories,
    productsCount,
    productFilter: initialProductFilter
}: {
    searchParams: SearchParams
    productFilter: {
        [key: string]: string
    }
    productsCount: number
    products: Product[]
    categories: Category[]
}) {
    const router = useRouter()
    const currency = useSelector((store: ReduxStore) => store.setting.value.currency)

    const [productFilter, setProductFilter] = useState(initialProductFilter)
    const [products, setProducts] = useState(productsData)

    useEffect(() => {
        setProducts(productsData)
    }, [productsData])

    useEffect(() => {
        setProductFilter(initialProductFilter)
    }, [initialProductFilter])

    useEffect(() => {
        handleFilterChange(undefined, {
            key: 'currency_id',
            value: currency?.id ? `${currency?.id}` : ''
        })
    }, [currency?.id])

    useEffect(() => {
        if (changedFilterOnce) {
            router.push('?' + createSearchParms(productFilter))
            // reFetchProducts() // SSR will fetch products when change in url
        }
    }, [JSON.stringify(productFilter)])

    function resetFilter(
        e?: React.ChangeEvent<HTMLSelectElement> | React.MouseEvent<HTMLButtonElement>,
        config?: {
            key?: string
            value?: string | null
        }
    ) {
        changedFilterOnce = true

        if (!config) {
            /* reset all */
            const defaultProductfilter: { [key: string]: string } = {
                search: '',
                category_slug: '',
                page: '1',
                page_size: `${pagination.PAGE_SIZE}`,
                min_rating: ''
            }
            setProductFilter(defaultProductfilter)
        } else {
            setProductFilter(prev => ({
                ...prev,
                [config?.key || (e?.target as HTMLSelectElement)?.name]:
                    config?.value || (e?.target as HTMLSelectElement)?.value
            }))
        }
    }

    const handleFilterChange = (
        e?: React.ChangeEvent<HTMLSelectElement> | React.MouseEvent<HTMLButtonElement>,
        config?: {
            key?: string
            value?: string
        }
    ) => {
        changedFilterOnce = true

        /* after change in search parameters, restart from page 1 */
        let page = '1'

        if ((config?.key || (e?.target as HTMLSelectElement)?.name) == 'page') {
            page = config?.value || (e?.target as HTMLSelectElement)?.value
        }

        setProductFilter(prev => ({
            ...prev,
            page,
            [config?.key || (e?.target as HTMLSelectElement)?.name]:
                config?.value || (e?.target as HTMLSelectElement)?.value
        }))
    }

    const title = 'All Products'
    const props = 'Products'
    return (
        <>
            <div>
                {/* HEADER */}
                <ParallexHeader pathname={props} title={title} />
                {/* BODY */}
                <div className='flex flex-col gap-y-5 lg:grid lg:grid-cols-3'>
                    {/* Sidebar */}
                    <div className='order-2 lg:order-none lg:col-start-1 lg:col-end-2 '>
                        <Sidebar />
                    </div>

                    {/* PRODUCT body */}
                    <div className=' ml-[17px] lg:col-start-2 lg:col-end-4 lg:ml-[10px]'>
                        {/* BODY TITLE */}
                        <div className=' mb-[30px] h-[90px] w-[98%] border-b-[0.5px] border-[#c3c2c2] md:w-[60%] lg:w-[90%] '>
                            <p className='text-md font-normal text-[#484848]'>People's Choice</p>
                            <h1 className='text-[30px] text-[#484848]'>Bestselling Books</h1>
                        </div>

                        {/* FEATURED */}
                        <Featured />

                        {/* BOOK COUNT AND DROPDOWN */}
                        <div className='mb-[40px] mt-[40px] flex  w-[85vw]  flex-col items-center justify-between space-y-2 sm:w-[58vw] lg:flex-row '>
                            <p className='  text-[13px] text-[#666] '>SHOWING 1 TO 8 OF 20 TOTAL</p>

                            <div className='flex gap-x-4'>
                                <div className='inline-block border-[0.5px] border-[#989898] px-[10px] py-[5px] text-sm text-[#333] sm:px-[20px]'>
                                    <span>sort by:</span>
                                    <select name='name' id='name' className='cursor-pointer bg-transparent'>
                                        <option value='name'>Name</option>
                                        <option value='name'>Name</option>
                                        <option value='name'>Name</option>
                                    </select>
                                </div>
                                <div className='inline-block border-[0.5px] border-[#989898] px-[20px] py-[5px] text-sm text-[#333]'>
                                    <span>show:</span>
                                    <select
                                        name='name'
                                        id='name'
                                        className='cursor-pointer bg-transparent'
                                        onChange={handleFilterChange}
                                    >
                                        {/* <option value="eight">8</option>
                                        <option value="sixteen">16</option>
                                        <option value="twenty">20</option> */}
                                        {[pagination.PAGE_SIZE, 9, 12, 15, 20].map((el, index) => {
                                            return (
                                                <option key={index} value={el}>
                                                    {el}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* BOOKS/MAIN PRODUCT */}
                        <Products products={products} />
                        <PaginationComponent
                            handleFilterChange={handleFilterChange}
                            perPage={productFilter.page_size}
                            current_page={productFilter.page}
                            productsCount={productsCount}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
