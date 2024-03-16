import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../src/css/cardSlider.css'
import { CntxData } from '../Context/ContextData';

function EventSlider() {

    const data = useContext(CntxData)
    
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                loop={false}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    100: {
                        slidesPerView: 1
                    },
                    350: {
                        slidesPerView: 1.5
                    },
                    550: {
                        slidesPerView: 2.5,
                        spaceBetween: 30,
                    },
                    1150: {
                        slidesPerView: 3.5,
                        spaceBetween: 30,
                    },
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {
                    data.events?.map(item => (
                        <SwiperSlide key={item.id}>
                            <div className="swiperCard">
                                <img className='card-bg' src={item.bg} alt="" />
                                <div className="card-main">
                                    <img className='card-img' src={item.img} alt="" />
                                    <button className='xl:bottom-[5%] lg:bottom-[-4%] md:bottom-[2%] sm:bottom-[5%] bottom-[5%]'>{item.price} ₼-dan</button>
                                </div>
                                <div className="card-info">
                                    <div className="event-name">{item.date} {item.place}</div>
                                </div>
                            </div>
                            <div className='card-drop'>
                                <h2 className='event-name-drop font-bold'>{item.name}</h2>
                                <p className='event-det-drop text-[.9rem] text-[#666]'>{item.date} {item.place}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default EventSlider