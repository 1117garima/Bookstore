import ORDER_STATUSES from '@/constants/orderStatuses'
import { useCurrenciesQuery } from '@/lib/features/api/currency/currencyApi'
import { useCancealOrderMutation } from '@/lib/features/api/order/orderApi'
import handleServerError from '@/utils/handleServerError'
import notify from '@/utils/notify'
import Link from 'next/link'
import React from 'react'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

export default function Order({
    order,
    singleOrder,
    children
}: {
    order: Order
    singleOrder?: boolean
    children: any
}) {
    // let { city, country_code, postal_code, residential, state_or_province_code } = order.shipping_address
    const [cancelAllOrder] = useCancealOrderMutation()

    const cancelAllOrders = async () => {
        try {
            await cancelAllOrder(order.id).unwrap()
            notify('orders cancealled')
        } catch (err) {
            handleServerError(err)
        }
    }

    const { data: currenciesData } = useCurrenciesQuery()
    let currencies: any = []
    if (currenciesData) {
        currencies = currenciesData
        // debugger
    }

    function prependCurrency(amount: number | string) {
        // let orderedCurrency = currencies.find((el: any) => el.id == order.currency)
        // debugger
        return `${order.currency}${amount} `
    }

    /*  
    STATUS_CHOICES = [
        (PENDING_CHOICE, "PENDING"),
        (CONFIRM_CHOICE, "CONFIRM"),
        (INDELIVERY_CHOICE, "INDELIVERY"),
        (CANCEL_CHOICE, "CANCELLED"),
        (RECEIVE_CHOICE, "RECEIVED"),
        (COMPLETED_CHOICE, "COMPLETE"),
      ]
    */

    const SUCCESS_ORDER_STATUS_STEPS = {
        '1': 'PENDING',
        '2': 'CONFIRM', // checked-reviewed by the buyer
        '3': 'RECEIVED', // order received by seller
        '4': 'INDELIVERY',
        '5': 'COMPLETE'
    }

    return (
        <>
            <div className='mb-8 rounded bg-gray-200 p-6'>
                <div className='flex flex-col md:flex-row md:justify-between'>
                    <div>
                        <p className='text-lg font-bold'>
                            Order{' '}
                            <Link className='text-primary hover:underline' href={`/orders/${order.id}`}>
                                #{order.id}
                            </Link>
                        </p>
                        <table>
                            <thead>
                                <tr className='text-left'>
                                    <th className='invisible'></th>
                                    <th className='invisible'></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='font-bold capitalize'>status</td>
                                    <td>
                                        : {order.status}
                                        {order.status == ORDER_STATUSES.PENDING && (
                                            <>
                                                &nbsp;
                                                <br className='md:hidden' />
                                                <Link
                                                    href={`/orders/${order.id}#payment`}
                                                    className='btn-sm mt-1 inline-block capitalize'
                                                >
                                                    make payment
                                                </Link>
                                            </>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td className='font-bold capitalize'>shipping address</td>
                                    <td>
                                        {/* :{' '} */}
                                        {/* {`${city}-${state_or_province_code}-${country_code}, ${postal_code} (${residential ? 'residential' : 'non-residential'})`} */}
                                        : {order?.delivery_address}
                                    </td>
                                </tr>

                                {/* <tr>
                                    <td className='font-bold capitalize'>Placed on</td> */}
                                {/* <td>: {order.place_at}</td> */}
                                {/* <td>: {order.delivery_address}</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table>
                            <thead>
                                <tr className='text-left'>
                                    <th className='invisible'></th>
                                    <th className='invisible'></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='font-bold capitalize'>Sub Total</td>
                                    {/* <td>: {prependCurrency(order.sub_total)}</td> */}
                                    <td>: {order.total_price}</td>
                                </tr>
                                {/* <tr>
                                    <td className='font-bold capitalize'>shipping Price</td>
                                    <td>: {prependCurrency(order.shipping_cost)}</td>
                                </tr> */}
                                <tr>
                                    <td className='font-bold capitalize'>Total Price</td>
                                    {/* <td>: {prependCurrency(order.total_price)}</td> */}
                                    <td>: {order.total_price}</td>
                                </tr>
                            </tbody>
                        </table>

                        {singleOrder ? (
                            <>
                                <button
                                    disabled={order.status != ORDER_STATUSES.PENDING}
                                    data-tooltip-id='cancel-order-tooltip'
                                    onClick={cancelAllOrders}
                                    type='button'
                                    className='text-danger hover:text-danger-light hover:underline'
                                >
                                    cancel all orders
                                </button>

                                {order.status != ORDER_STATUSES.PENDING && (
                                    <Tooltip id='cancel-order-tooltip'>
                                        <div>
                                            <p>Sorry order cant be cancelled anymore.</p>
                                            <p>It is confirmed and in delivery</p>
                                        </div>
                                    </Tooltip>
                                )}
                            </>
                        ) : (
                            <>
                                <Link className='text-primary hover:underline' href={`/orders/${order.id}`}>
                                    Manage
                                </Link>
                            </>
                        )}
                    </div>
                </div>
                <hr className='my-4 border border-gray-500' />
                {children}
            </div>
        </>
    )
}
