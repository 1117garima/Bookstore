'use client'

import { FaEye, FaPlus } from 'react-icons/fa6'
import { FaMinus } from 'react-icons/fa'
import { useDeleteCartMutation, useUpdateCartMutation } from '@/lib/features/api/order/getCart'
import { makeFullUrl } from '@/utils/makeFullUrl'
import { RxCross1 } from 'react-icons/rx'
import handleServerError from '@/utils/handleServerError'
import appendCurrencyPrefix from '@/utils/appendCurrencyPrefix'
import notify from '@/utils/notify'
import { useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

export function Card({ cartItem, small }: { cartItem: CartItem; small?: string }) {
    const [updateCart] = useUpdateCartMutation()
    const [deleteCart] = useDeleteCartMutation()

    const handleChnage = (payload: object, id: number) => {
        try {
            const res = updateCart({
                formdata: payload,
                id: id
            }).unwrap()

            console.log(res)
        } catch (err) {
            handleServerError(err)
        }
    }

    const increase = (current_quantity: number) => {
        let payload = {
            book_id: cartItem.book_id,
            quantity: current_quantity + 1
        }
        handleChnage(payload, cartItem.id)
    }

    const decrease = (current_quantity: number) => {
        let quantity = current_quantity - 1

        if (quantity >= 0) {
            let payload = {
                book_id: cartItem.book_id,
                quantity: quantity
            }
            handleChnage(payload, cartItem.id)
        }
    }

    const deleteCartitem = async (id: number) => {
        try {
            await deleteCart({
                id: id
            }).unwrap()

            notify()
        } catch (err) {
            handleServerError(err)
        }
    }

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={classNames(
                'relative mb-[10px] flex items-start border border-solid border-[box-border] p-4',
                {
                    'border-red-400': isHovered
                }
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Book Image */}
            <div className='self-center'>
                <div className='relative border'>
                    <img
                        src={cartItem.book.cover_page || ''}
                        alt='Book Cover'
                        className={` ${small ? 'h-[90px] w-[90px] md:w-[150px]' : 'h-[100px] w-[200px]'} object-cover`}
                    />
                    <div
                        className={classNames(
                            'absolute left-0 top-0 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-danger-light transition-opacity duration-300',
                            {
                                'opacity-100': isHovered,
                                'opacity-0': !isHovered
                            }
                        )}
                        onClick={() => deleteCartitem(cartItem.id)}
                    >
                        <RxCross1 className='text-white' />
                    </div>
                </div>
                <div className='mt-3 flex justify-center text-center'>
                    {/* Optional stock info */}
                </div>
            </div>

            {/* Book Information */}
            <div className={` ${small ? 'm-0 ml-4' : 'ml-4 mr-0'}  w-full`}>
                <p className='text-header text-[18px] font-semibold lg:text-[22px]'>{cartItem.book.title}</p>
                <div className='flex flex-col flex-wrap gap-2'>
                    <p className={`inline-block text-[#2d2c2c] ${small && 'text-[14px]'}`}>
                        {appendCurrencyPrefix(cartItem.book.price)} {`/ `}
                    </p>
                </div>
                <div className='mb-[10px] mt-2 flex items-center'>
                    <button
                        type='button'
                        className='group flex h-[30px] w-8 items-center justify-center border border-r-0 hover:bg-primary'
                        onClick={() => decrease(cartItem.quantity)}
                    >
                        <FaMinus className='group-hover:text-white' />
                    </button>
                    <input
                        type='number'
                        value={cartItem.quantity}
                        className='h-[30px] w-[40px] border border-solid text-center focus:border-primary focus:outline-none'
                    />
                    <button
                        type='button'
                        className='group flex h-[30px] w-8 items-center justify-center border border-r-0 hover:bg-primary'
                        onClick={() => increase(cartItem.quantity)}
                    >
                        <FaPlus className='group-hover:text-white' />
                    </button>
                </div>

                <p className='font-bold text-[#2d2c2c]'>
                    Total: {appendCurrencyPrefix(cartItem.quantity * parseFloat(cartItem.book.price))}
                </p>
            </div>
        </div>
    )
}
