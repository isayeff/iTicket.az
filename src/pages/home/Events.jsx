import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import banner1 from '../../assets/img/banner1.jpg'
import banner2 from '../../assets/img/banner2.gif'
import banner1res from '../../assets/img/banner1res.jpg'
import banner2res from '../../assets/img/banner2res.gif'
import EventSlider from '../../components/EventSlider';
import AppBlock from '../../components/AppBlock';


function Events() {

    return (
        <>
            <div className='mt-[70px] container m-auto px-[20px]'>
                <h2 className='text-[25px] md:text-[30px] font-[900]'>Populyar Tədbirlər</h2>
            </div>
            <div className="swiperSec1 mt-[20px] my-[0] lg:my-[40px]">
                <EventSlider />
            </div>
            <div className='banner container m-auto py-[3%] pb-[40px] lg:py-[5%] flex justify-center items-center px-[30px]'>
                <img className='hidden lg:block' src={banner2} alt="" />
                <img className='block lg:hidden' src={banner2res} alt="" />
            </div>
            <div className='container m-auto px-[20px]'>
                <h2 className='text-[25px] md:text-[30px] font-[900]'>Tamaşalar</h2>
            </div>
            <div className="swiperSec1 mt-[20px] my-[0] lg:my-[40px]">
                <EventSlider />
            </div>
            <div className='banner container m-auto py-[3%] pb-[40px] lg:py-[5%] flex justify-center items-center px-[30px]'>
                <img className='hidden lg:block' src={banner1} alt="" />
                <img className='block lg:hidden' src={banner1res} alt="" />
            </div>
            <div className='relative overflow-x-hidden'>
                <div className='container m-auto px-[20px] triangle pt-[30px]'>
                    <h2 className='text-[25px] md:text-[30px] font-[900]'>Uşaqlar</h2>
                </div>
                <div className="swiperSec1 mt-[20px] my-[0] lg:my-[40px]">
                    <EventSlider />
                </div>
            </div>
            <div className='relative mt-[70px] overflow-x-hidden'>
                <div className='container m-auto px-[20px] triangle pt-[30px]'>
                    <h2 className='text-[25px] md:text-[30px] font-[900]'>Həftəsonları</h2>
                </div>
                <div className="swiperSec1 mt-[20px] my-[0] lg:my-[40px]">
                    <EventSlider />
                </div>
            </div>
            <div className='relative mt-[70px] overflow-x-hidden'>
                <div className='container m-auto px-[20px] triangle pt-[30px]'>
                    <h2 className='text-[25px] md:text-[30px] font-[900]'>Yenilik</h2>
                </div>
                <div className="swiperSec1 mt-[20px] my-[0] lg:my-[40px]">
                    <EventSlider />
                </div>
            </div>
            <AppBlock />
        </>
    )
}

export default Events