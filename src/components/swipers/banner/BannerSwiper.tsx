import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const BannerSwiper = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                navigation={true}
                pagination={{
                    clickable: true
                }}
                modules={[Navigation, Pagination]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <img src='http://exprostudio.com/html/book_library/images/slider/img-01.jpg' alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='http://exprostudio.com/html/book_library/images/slider/img-01.jpg' alt='' />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default BannerSwiper
