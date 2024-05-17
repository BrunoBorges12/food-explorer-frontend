'use client'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { CardProduct } from './components/Card'

export const Products = () => {
    return (
        <div className="pt-72">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                className=" flex"
                slidesPerView={4}
                navigation
            >
                <SwiperSlide>
                    <CardProduct />
                </SwiperSlide>
                <SwiperSlide>
                    <CardProduct />
                </SwiperSlide>
                <SwiperSlide>
                    <CardProduct />
                </SwiperSlide>
                <SwiperSlide>
                    <CardProduct />
                </SwiperSlide>
            </Swiper>{' '}
        </div>
    )
}
