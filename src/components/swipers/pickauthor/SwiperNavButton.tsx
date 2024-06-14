import { useSwiper } from 'swiper/react'
import { IoChevronForward, IoChevronBack } from 'react-icons/io5'

const SwiperNavButton = () => {
    const swiper = useSwiper()
    return (
        <div className='space-x-2 text-[#999] sm:mt-[20px] '>
            <button
                className='rounded-full border-[1px] p-[10px] hover:border-[#6fa937] hover:bg-[#6f9a37] hover:text-white'
                onClick={() => swiper.slidePrev()}
            >
                <IoChevronBack />
            </button>
            <button
                className='rounded-full border-[1px] p-[10px] hover:border-[#6fa937] hover:bg-[#6f9a37] hover:text-white'
                onClick={() => swiper.slideNext()}
            >
                <IoChevronForward />
            </button>
        </div>
    )
}

export default SwiperNavButton
