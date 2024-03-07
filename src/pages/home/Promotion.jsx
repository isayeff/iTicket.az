import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../css/promotion.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import prom1 from '../../assets/img/promotion1.jpg'
import prom2 from '../../assets/img/promotion2.jpg'
import prom3 from '../../assets/img/promotion3.jpg'
import prom4 from '../../assets/img/promotion4.jpg'
import prom5 from '../../assets/img/promotion5.jpg'

import { Autoplay, Navigation } from 'swiper/modules';

export default function Promotion() {
    return (
        <>
            <div className="promotionSec lg:px-[20px]">
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper1"
                >
                    <SwiperSlide><img src={prom1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={prom2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={prom3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={prom4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={prom5} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
