import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { RxExit } from "react-icons/rx";

function Profile() {

    let pathname = useLocation()
    console.log(pathname);

    return (
        <>
            <div className='profilSec lg:flex bg-white w-[95%] lg:w-[82%] mx-auto mt-[30px] rounded-[15px] mb-[110px]'>
                <div className='flex flex-col lg:basis-[78%] gap-[25px] lg:gap-[28px] py-[40px] px-[20px] '>
                    <h2 className='text-[24px] lg:text-[30px] font-bold'>Şəxsi Məlumatlar</h2>
                    <div className='flex flex-col lg:flex-row lg:justify-between gap-[15px]'>
                        <div className='lg:basis-[33.3%]'>
                            <label className='text-[#6B7280]' htmlFor="email">E-poçt</label>
                            <input className='py-[12px] px-[16px] w-[100%] outline-0 border-[#E1E1E1] border-[1px] focus:bg-[#EEE] rounded-[7px]' id='email' type="text" />
                        </div>
                        <div className='lg:basis-[33.3%]'>
                            <label className='text-[#6B7280]' htmlFor="ad">Ad</label>
                            <input className='py-[12px] px-[16px] w-[100%] outline-0 border-[#E1E1E1] border-[1px] focus:bg-[#EEE] rounded-[7px]' id='ad' type="text" />
                        </div>
                        <div className='lg:basis-[33.3%]'>
                            <label className='text-[#6B7280]' htmlFor="soyad">Soyad</label>
                            <input className='py-[12px] px-[16px] w-[100%] outline-0 border-[#E1E1E1] border-[1px] focus:bg-[#EEE] rounded-[7px]' id='soyad' type="text" />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:justify-center gap-[15px]'>
                        <div className='lg:basis-[33.3%]'>
                            <label className='text-[#6B7280]' htmlFor="number">Telefon nömrəsi</label>
                            <input className='py-[12px] px-[16px] w-[100%] outline-0 border-[#E1E1E1] border-[1px] focus:bg-[#EEE] rounded-[7px]' id='number' type="text" />
                        </div>
                        <div className='lg:basis-[33.3%]'>
                            <label className='text-[#6B7280]' htmlFor="brithday">Doğum günü</label>
                            <input className='py-[12px] px-[16px] w-[100%] outline-0 border-[#E1E1E1] border-[1px] focus:bg-[#EEE] rounded-[7px]' id='brithday' type="text" />
                        </div>
                        <div className='lg:basis-[33.3%]'>
                            <label className='te#6B7280xt-[]' htmlFor="">Cins</label>
                            <div className='w-[100%]'>
                                <button className='w-[50%] bg-[#FFDD00] rounded-l-[10px] h-[48px] border-[1px] border-[#e1e1e1]'>Kişi</button>
                                <button className='w-[50%] rounded-r-[10px] h-[48px] border-[1px] border-[#e1e1e1]'>Qadın</button>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[32.3%]'>
                        <label className='text-[#6B7280]' htmlFor="countries">Ölkə</label>
                        <select className='py-[12px] px-[16px] w-[100%] outline-0 border-[#E1E1E1] border-[1px] focus:bg-[#EEE] rounded-[7px]' name="" id="countries">
                            <option value="aze">Azərbaycan</option>
                            <option value="geo">Gürcüstan</option>
                            <option value="hun">Macarıstan</option>
                            <option value="tr">Türkiyə</option>
                            <option value="abd">ABD</option>
                        </select>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:justify-between gap-[20px]'>
                        <button className='h-[52px] lg:basis-[50%] font-[900] text-[1.1rem] bg-[#FFDD00] text-black rounded-[10px]'>Dəyişiklikləri yadda saxla</button>
                        <button className='h-[52px] lg:basis-[25%] font-[900] text-[1.1rem] bg-[#9CA3AF] hover:bg-[#ED4343] text-white rounded-[10px]'>Hesabı sil</button>
                    </div>
                </div>
                <div className='hidden lg:flex flex-col p-[16px] justify-between border-l-[1px] border-[#ECECEC]'> 
                    <ul className='flex flex-col gap-[20px]'>
                        <li className='px-[20px]'><NavLink to='/profile'>Profil</NavLink></li>
                        <li className='px-[20px]'><NavLink>Mənim sifarişlərim</NavLink></li>
                        <li className='px-[20px]'><NavLink>Çatdırılma ünvanları</NavLink></li>
                        <li className='px-[20px]'><NavLink>Mənim kartlarım</NavLink></li>
                        <li className='px-[20px]'><NavLink>Tərəfdaşlıq Proqramı</NavLink></li>
                        <li className='px-[20px]'><NavLink>Cüzdan</NavLink></li>
                        <li className='px-[20px]'><NavLink>Şifrəni yenilə</NavLink></li>
                    </ul>
                    <div className='w-[100%] border-t-[0px] border-[#ECECEC]'>
                        <Link className='flex items-center justify-between pl-[20px]'>Çıxış<RxExit /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile