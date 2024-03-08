import React, { useContext, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { CntxData } from '../../Context/ContextData';
import '../../css/cardSlider.css'
import banner1 from '../../assets/img/banner1.jpg'
import banner1res from '../../assets/img/banner1res.jpg'


function Events() {
    const data = useContext(CntxData)

    return (
        <>
            <div className='mt-[70px] container m-auto'>
                <h2 className='text-[30px] font-[900]'>Populyar Tədbirlər</h2>
            </div>
            {
                <div className="swiperSec1 mt-[20px] my-[0] lg:my-[40px]">
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
                            140: {
                                slidesPerView: 1
                            },
                            550: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1150: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                    >
                        {
                            data.map(item => (
                                <SwiperSlide key={item.id}>
                                    <div className="swiperCard">
                                        <img className='card-bg' src={item.bg} alt="" />
                                        <div className="card-main">
                                            <img className='card-img' src={item.img} alt="" />
                                            <button>{item.price} ₼-dan</button>
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
                </div>
            }
            <div className='banner container m-auto my-[10px] mb-[40px] lg:my-[80px] flex justify-center items-center px-[30px]'>
                <img className='hidden lg:block' src={banner1} alt="" /> :
                <img className='block lg:hidden' src={banner1res} alt="" />
            </div>
        </>
    )
}

export default Events