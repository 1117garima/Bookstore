'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Rating from '../common/Rating'
import { CiHeart } from 'react-icons/ci'
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useAddToWishListMutation, useWishListQuery } from '@/lib/features/api/product/wishListApi'
import { useAddCartItemMutation } from '@/lib/features/api/cart/cartApi'
import useProtectedFunction from '@/hooks/useProtectedFunction'
import { useDispatch, useSelector } from 'react-redux'
import notify from '@/utils/notify'
import handleServerError from '@/utils/handleServerError'
import { toggleCart } from '@/lib/features/cart/cartSlice'
import { useRouter } from 'next/navigation'
import usePrependCurrency from '@/hooks/usePrependCurrency'
import { FaPlay, FaRegHeart } from 'react-icons/fa'
import { FaBasketShopping } from 'react-icons/fa6'
import { Router } from 'next/router'

function SingleProduct({ product }: { product: Product }) {
    const [addToWishList] = useAddToWishListMutation()
    const [addToCartItem] = useAddCartItemMutation()
    const dispatch = useDispatch()

    // let router = Router

    const authenticate = useProtectedFunction()

    let { data: wishLists, isLoading: isLoadingWishLists, refetch, error: wishListFetchError } = useWishListQuery()

    // const token = useSelector((store: ReduxStore) => store.user.value.token)
    if (wishListFetchError) {
        wishLists = undefined
    }
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

    // const uniquePrices = product.sizes
    //     .map(product => product.price)
    //     .filter((price, index, self) => self.findIndex(t => t === price) === index)

    // const uniqueProductTypes = product.sizes
    //     .map(product => product.product_type)
    //     .filter((productType, index, self) => self.findIndex(t => t.id === productType.id) === index)

    const prependCurrency = usePrependCurrency()

    return (
        <>
            <div className='flex flex-col items-start gap-y-5'>
                <div className='flex flex-col gap-y-[10px]'>
                    <div>
                        {/* <Image src={data.photo} alt="" width={200} height={200} className="object-cover lg:h-[257px] lg:w-[171px] sm:h-[410px] sm:w-[40vw] w-[88vw]" /> */}
                        <Image
                            className='h-[246px] w-full object-cover'
                            // src={`${product.images[0]?.image || ''}`}
                            // src={`${product?.cover_page[0]?.image || ''}`}
                            src={`${product?.cover_page || ''}`}
                            alt={`${product?.title} product`}
                            width={500}
                            height={500}
                        />
                    </div>
                    <p className=' w-[82%] border-b-[0.5px] border-[#bfbdbd] text-[13px] leading-8 text-[#666] hover:text-[#337ab7]'>
                        {product?.category?.name}
                    </p>
                </div>

                <div className=' space-y-[9px]'>
                    <div className='flex items-center'>
                        <p className='inline-block rounded-l bg-[#f16945] px-[2px] py-[2px] text-xs text-white'>SALE</p>

                        <span className='ml-[-2px] text-[20px] text-[#f16945]'>
                            <FaPlay />
                        </span>
                    </div>

                    <Link
                        href={`/books/${product?.id}`}
                        className='text-[16px] font-medium leading-[19px] text-[#484848] hover:text-[#6f9a37] '
                    >
                        {product?.title}
                    </Link>
                </div>

                <div className=''>
                    {/* <div className=" text-[#666] leading-[13px]">
                            <span className="text-[14px]">By: </span>
                            <span className="text-[13px] hover:text-[#337ab7]">{product?.authors?.name}</span>
                        </div> */}

                    {/* <div className="mt-[6px] flex gap-1 text-sm">
                            <FaStar className="text-[#fcd01e]" />
                            <FaStar className="text-[#fcd01e]" />
                            <FaStar className="text-[#fcd01e]" />
                            <FaStar className="text-[#fcd01e]" />
                            <FaStar className="text-[#666]"
                            />
                        </div> */}

                    <p className='mb-[10px]'>
                        <Rating rating={product.avg_rating} />
                    </p>

                    <div className='flex items-center'>
                        <p className='text-[18px] font-medium text-[#77b748]'>{product?.price}</p>
                        {/* <p className="text-[#666] text-[13px] pl-[10px] line-through" >{product?.price}</p> */}
                    </div>
                </div>
                <div className='flex gap-2'>
                    <button
                        className='flex items-center gap-x-2 rounded-full border-[1px] border-gray-200 px-[12px] py-[9px] text-[13px] text-[#666] hover:bg-[#77b748] hover:text-[#fff]'
                        onClick={() => {
                            authenticate(async () => {
                                let body = {
                                    book_id: product?.id,
                                    quantity: 1
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
                        {' '}
                        <FaBasketShopping /> Add to Basket
                    </button>
                    <button
                        onClick={() => {
                            handleWishList(product?.id)
                        }}
                    >
                        <FaRegHeart />
                    </button>
                </div>
            </div>
        </>
    )
}

export default SingleProduct
