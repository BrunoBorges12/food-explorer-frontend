'use client'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { CardProduct } from './components/Card'
import { data } from './components/mock/data'

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
                {data.map((product, idx) => {
                    return (
                        <SwiperSlide key={idx}>
                            <CardProduct {...product} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>{' '}
        </div>
    )
}
