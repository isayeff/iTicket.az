import React from 'react'
import ios from '../assets/img/ios.png'
import android from '../assets/img/android.png'
import app from '../assets/img/app.png'

function AppBlock() {
    return (
        <>
            <div className='px-[20px] my-[50px]'>
                <div className="app-block relative max-w-[728px] min-h-[220px] xl:max-w-[1210px] lg:max-w-[984px] lg:h-[385px] mx-auto bg-[#FFDD00] rounded-[18px] flex justify-between p-[30px] lg:px-[100px] items-center">
                    <div className="app-content flex flex-col gap-[20px] lg:gap-[30px] z-10">
                        <div class="text-[30px] lg:text-[42px] font-bold lg:w-[70%]">NÖVBƏTİ VİZUAL SƏYAHƏTİNİZİ TAPIN</div>
                        <div class="text lg:w-[70%]">
                            iTicket.AZ tətbiqi bütün növ tədbirlərə (teatr, idman, konsertlər, sərgilər və s.) biletləri əldə etməyi asan və sürətli edir.
                        </div>
                        <div className="apps max-w-[320px] flex items-center justify-between bg-black px-[10px] py-[4px] sm:px-[20px] sm:py-[8px] rounded-[15px] z-10">
                            <img src={ios} alt="" />
                            <span className='w-[1px] h-[30px] bg-[#333]'></span>
                            <img src={android} alt="" />
                        </div>
                    </div>
                    <div className='hidden lg:block z-[10] absolute bottom-[0] right-[90px]'>
                        <img className='' src={app} alt="" />
                    </div>
                    <div class="hidden lg:block lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 lg:rounded-2xl overflow-hidden">
                        <div class="download-text">
                            İNDİ YÜKLƏ İNDİ YÜKLƏ İNDİ YÜKLƏ İNDİ YÜKLƏ İNDİ YÜKLƏ
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppBlock