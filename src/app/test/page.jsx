import OrderStatusSteps from '../orders/OrderStatusSteps'

export default function page() {
    return (
        <div>
            <OrderStatusSteps orderStatus='PENDING' />
        </div>
    )
}
