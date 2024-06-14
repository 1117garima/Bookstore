'use client'

import Featured from '@/components/Featured'
import Sidebar from '@/components/sidebar/Sidebar'
import { FaMinus, FaPlay, FaPlus, FaStar, FaStore } from 'react-icons/fa'
import Image from 'next/image'
import { bookDetailData } from '@/dummy/bookDetailData'
import { GoRocket } from 'react-icons/go'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

import Numbers from '../../../components/Numbers'
import ProDetailsTable from '@/components/ProDetailsTable'
import ProductDescription from '@/components/ProductDescription'
import AuthorDetails from '@/components/AuthorDetails'
import ProductSwiper from '@/components/swipers/ProductSwiper'
import ParallexHeader from '@/components/ParallexHeader'
import { useGetSingleProductQuery } from '@/lib/features/api/product/productApi'
import { useParams } from 'next/navigation'
import { useAddToWishListMutation } from '@/lib/features/api/product/wishListApi'
import { useAddCartItemMutation } from '@/lib/features/api/cart/cartApi'
import handleServerError from '@/utils/handleServerError'
import notify from '@/utils/notify'
import { toggleCart } from '@/lib/features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import useProtectedFunction from '@/hooks/useProtectedFunction'
import { useState } from 'react'

const ProductDetailPage = () => {
    const { id } = useParams()

    const { data } = useGetSingleProductQuery(id)

    const [addToWishList] = useAddToWishListMutation()
    const [addToCartItem] = useAddCartItemMutation()
    const dispatch = useDispatch()

    const authenticate = useProtectedFunction()

    const handleWishList = (id: number) => {
        authenticate(async () => {
            let payload = {
                product: id
            }
            try {
                await addToWishList(payload).unwrap()
                notify('Wishlist Updated')
            } catch (err) {
                handleServerError(err)
            }
        })
    }

    const [qty, setQty] = useState(1)
    // console.log("qty",qty);
    const handleQtyChange = (event: any) => {
        const newValue = parseInt(event.target.value)
        if (!isNaN(newValue) || newValue < 0) {
            setQty(parseInt(event.target.value)) // You might need to parse the value as an integer
        }
    }

    const handleIncrement = event => {
        setQty(qty + 1)
    }

    const handleDecrement = event => {
        if (qty != 1) {
            setQty(qty - 1)
        }
    }

    const title = 'All Products'
    const props = 'Products > Products Details'

    return (
        <div>
            <ParallexHeader pathname={props} title={title} />
            {/* BODY */}
            <div className='flex flex-col lg:grid lg:grid-cols-3'>
                {/* Sidebar */}
                <div className='order-2 lg:order-none lg:col-start-1 lg:col-end-2 '>
                    <Sidebar />
                </div>
                {/* PRODUCT body */}
                <div className=' ml-[17px] lg:col-start-2 lg:col-end-4 lg:ml-[10px]  '>
                    {/* BODY TITLE */}
                    {/* FEATURED */}
                    <Featured />
                    {/* PRODUCT DETAIL */}
                    <div className='mb-[40px] mt-[40px] lg:w-[60vw] '>
                        {/* {bookDetailData.map((data) => ( */}
                        {/* <div key={data.id} className="lg:ml-[30px] lg:grid lg:grid-cols-3 lg:gap-[40px] flex flex-col"> */}
                        <div className='flex flex-col lg:ml-[30px] lg:grid lg:grid-cols-3 lg:gap-[40px]'>
                            {/* GRID COL-1 */}
                            <div className='col-span-1 flex flex-col items-start justify-start gap-[20px]  '>
                                {/* Product image */}
                                <div className='space-y-[5px] '>
                                    <Image
                                        src={data?.cover_page}
                                        alt=''
                                        width={300}
                                        height={200}
                                        className='w-[90vw] border-[20px] border-[#f7f7f7] object-cover  lg:h-[18vh]   lg:w-[25vw] xl:h-[335px] xl:w-[270px]'
                                    />
                                    {/* Pricings */}
                                    <div className='flex items-center pl-[20px]'>
                                        {/* <p className="text-[30px] text-[#484848] font-medium">{data.currentPrice}</p>
                      <p className="text-[#666] text-[20px] pl-[10px] line-through" >{data.previousPrice}</p> */}
                                    </div>
                                    <p className='pl-[20px] text-[13px] text-[#666]'>You save $6.01</p>
                                </div>
                                {/* Company services */}
                                <div className='space-y-[20px]'>
                                    <p className='flex gap-x-3 pl-[20px] text-[14px] text-[#666]'>
                                        {' '}
                                        <GoRocket className='text-[24px]' /> Free delivery worldwide
                                    </p>
                                    <p className='flex gap-x-3 pl-[20px] text-[14px] text-[#666]'>
                                        {' '}
                                        <IoIosCheckmarkCircleOutline className='text-[34px]' /> Dispatch from the USA in
                                        2 working days
                                    </p>
                                    <p className='flex pl-[20px] text-[14px] text-[#666] '>
                                        <FaStore className='mr-[12px] text-[24px]' /> Status:{' '}
                                        <span className='ml-[3px] text-[#f16745]'>In Stock </span>{' '}
                                    </p>
                                    {/* Stock Count */}
                                    <div className='ml-[12px] lg:ml-0'>
                                        {/* <Numbers /> */}

                                        <div className='mb-50'>
                                            <div className='mb-[10px] mt-2 flex items-center'>
                                                <button
                                                    type='button'
                                                    className='group flex h-[30px] w-8 items-center justify-center border border-r-0 hover:bg-[#3bb77e]'
                                                    onClick={handleDecrement}
                                                >
                                                    <FaMinus className='group-hover:text-white' />
                                                </button>
                                                <input
                                                    type='number'
                                                    value={qty}
                                                    min='1'
                                                    max={data?.stock}
                                                    onChange={handleQtyChange}
                                                    className='h-[30px] w-[40px] border border-solid text-center focus:border-[#4d8c40] focus:outline-none'
                                                    readOnly
                                                />
                                                <button
                                                    type='button'
                                                    className='group flex h-[30px] w-8 items-center justify-center border border-r-0 hover:bg-[#3bb77e]'
                                                    onClick={handleIncrement}
                                                >
                                                    <FaPlus className='group-hover:text-white' />
                                                </button>
                                            </div>{' '}
                                            <br />
                                            {/* <div class="product-extra-link2">
                        <button
                          type="submit"
                          class="button button-add-to-cart"
                          onClick={() => handleAddToCart(data?.id, data?.id,)}
                        >
                          <i class="fi-rs-shopping-cart"></i>Add to cart
                        </button>
                        <a
                          aria-label="Add To Wishlist"
                          class="action-btn hover-up"
                          onClick={() => handleAddToWishlist(data?.id, data?.id,)}
                        ><i class="fi-rs-heart"></i ></a>
                      </div> */}
                                        </div>
                                    </div>
                                    {/* Wishlist and Basket Buttons */}
                                    <div className='ml-[12px] flex w-[83vw] flex-col gap-y-3 text-sm text-[#fff] sm:flex-row sm:gap-x-4 lg:ml-0 lg:w-[19vw] lg:flex-col lg:gap-x-0 '>
                                        <button
                                            className='  rounded  bg-[#6f9a37] py-[10px] sm:px-[35px]  '
                                            style={{
                                                boxShadow: 'inset 0 -2px 0 0 #517127'
                                            }}
                                            onClick={() => {
                                                authenticate(async () => {
                                                    let body = {
                                                        book_id: data?.id,
                                                        quantity: qty
                                                    }

                                                    try {
                                                        await addToCartItem(body).unwrap()

                                                        dispatch(toggleCart())

                                                        notify('Added to Cart')

                                                        // router.push(
                                                        //     `/collections/${el.category.slug}/products/${el.slug}`
                                                        // )
                                                        window.location.reload()
                                                    } catch (error) {
                                                        handleServerError(error)
                                                    }
                                                })
                                            }}
                                        >
                                            Add To Basket
                                        </button>
                                        <button
                                            className='rounded bg-[#f16745] py-[10px] sm:px-[35px]'
                                            onClick={() => {
                                                handleWishList(data?.id)
                                            }}
                                        >
                                            Add To Wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* GRID COL-2 */}
                            <div className='col-span-2 mt-[40px] flex flex-col space-y-3 lg:mt-0  '>
                                {/* Category */}
                                <p className='mr-[15px] border-b-[0.5px] border-[#bababa] py-[5px] text-[16px] leading-5 text-[#666] sm:mr-0'>
                                    {data?.category?.name}
                                </p>
                                {/* Name */}
                                <div>
                                    <div className='flex items-center'>
                                        <p className='inline-block rounded-l bg-[#f16945] px-[2px] py-[3px] text-[10px] text-white'>
                                            SALE
                                        </p>
                                        <span className='ml-[-3px] text-[21px] text-[#f16945]'>
                                            <FaPlay />
                                        </span>
                                    </div>
                                    <p className='text-[30px] font-medium text-[#484848] hover:text-[#337ab7]'>
                                        {data?.title}
                                    </p>
                                </div>
                                {/* Author */}
                                <div className='space-y-1'>
                                    <span className='text-[16px] text-[#666] '>By:</span>
                                    {/* {data?.authors?.map((data) (
                    <span className="text-[16px] text-[#666] ">{data?.name}</span>
                  ))} */}
                                    {/* Review */}
                                    <div className='flex items-center space-x-1'>
                                        <FaStar className='text-[13px] text-[#fcd01e]' />
                                        <FaStar className='text-[13px] text-[#fcd01e]' />
                                        <FaStar className='text-[13px] text-[#fcd01e]' />
                                        <FaStar className='text-[13px] text-[#fcd01e]' />
                                        <FaStar className='text-[13px] text-[#333]' />
                                        <span className=' text-[14px] text-[#55acee] '>Add Your Review</span>
                                    </div>
                                </div>
                                {/* Socials */}
                                <div className='space-y-2'>
                                    <p className='text-[16px] font-medium text-[#404040]'>Share:</p>
                                    <div className='flex space-x-3'>
                                        <Image
                                            src='/facebook.png'
                                            alt=''
                                            width={100}
                                            height={100}
                                            className='h-[25px] w-[25px] object-cover'
                                        />
                                        <Image
                                            src='/instagram.png'
                                            alt=''
                                            width={100}
                                            height={100}
                                            className='h-[25px] w-[25px] object-cover'
                                        />
                                        <Image
                                            src='/linkedin.png'
                                            alt=''
                                            width={100}
                                            height={100}
                                            className='h-[25px] w-[25px] object-cover'
                                        />
                                        <Image
                                            src='/pinterest.png'
                                            alt=''
                                            width={100}
                                            height={100}
                                            className='h-[25px] w-[25px] object-cover'
                                        />
                                    </div>
                                </div>
                                {/* Description */}
                                <div className='space-y-[15px] text-[15px] text-[#666]'>
                                    <p className='mt-[10px]'>{data?.description}</p>
                                    <p>{data?.description}</p>
                                </div>

                                <div className='pb-[20px] pt-[20px] sm:pt-0'>
                                    <h1 className='mr-[30px] border-b-[1px] pb-[15px] text-[22px] text-[#484848] sm:mr-0  '>
                                        Product Details
                                    </h1>
                                    <div className='mt-[25px]'>
                                        <ProDetailsTable product={data} />
                                    </div>
                                </div>

                                <div
                                    className=' w-[92vw] object-cover lg:w-[38vw] '
                                    style={{
                                        background:
                                            "url('https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                                    }}
                                >
                                    <div className='p-[30px]'>
                                        <h1 className='text-[20px] font-medium text-[#484848] '>Also Available In:</h1>
                                        <ul
                                            className='cursor-pointer px-[20px] text-[16px] text-[#666]'
                                            style={{ listStyle: 'disc' }}
                                        >
                                            <li className='hover:text-[#337ab7]'>CD-Audio $18.30</li>
                                            <li className='hover:text-[#337ab7]'>Paperback $20.10</li>
                                            <li className='hover:text-[#337ab7]'>E-Book $11.30</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* // ))} */}

                        {/* PRODUCT DESCRIPTION X REVIEWS */}

                        <div className='pt-[20px]'>
                            <h1 className='border-b-[1px] pb-[20px] text-[22px] text-[#484848] '>
                                Product Description
                            </h1>
                            <div className='mt-[25px]'>
                                <ProductDescription />
                            </div>
                        </div>

                        {/* AUTHOR DETAILS */}

                        <div className='pt-[20px]'>
                            <h1 className='border-b-[1px] pb-[20px] text-[22px] font-[500] text-[#484848] '>
                                About Author{' '}
                            </h1>
                            <div className='mt-[25px]'>
                                <AuthorDetails />
                            </div>
                        </div>

                        {/* RECOMMENDED PRODUCT SWIPER */}

                        <div className='pt-[60px]'>
                            <div className='mr-[15px] flex flex-col justify-between space-y-4  border-b-[1px] pb-[20px] sm:flex-row md:mr-0'>
                                <div className=' space-y-3'>
                                    <p className=' text-[14px] text-[#484848] sm:text-[16px] '>Related Products </p>
                                    <h1 className='text-[20px] leading-5 text-[#484848] sm:text-[30px]'>
                                        You May Also Like
                                    </h1>
                                </div>
                                <button className='mr-[10px] w-[30vw] rounded-[25px] border-[1px] px-[25px] py-[15px] text-sm text-[#666]  sm:w-[18vw] lg:w-[8vw] '>
                                    View All
                                </button>
                            </div>

                            <div className='mt-[25px]'>{/* <ProductSwiper /> */}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage
