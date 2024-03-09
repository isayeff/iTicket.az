import React from 'react'
import logo from '../../src/assets/img/logo.png'
import cards from '../../src/assets/img/cards.svg'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className='mt-[10vh] lg:my-[10vh] container m-auto flex flex-col lg:flex-row lg:justify-between gap-[25px] px-[32px]'>
                <div className='flex lg:flex-col justify-between lg:justify-start lg:items-start lg:gap-[40px] items-center'>
                    <div>
                        <img className='w-[112px] lg:w-[160px]' src={logo} alt="" />
                    </div>
                    <div>
                        <p className='text-[#646464] text-[18px]'>Dəstək xidməti</p>
                        <p className='font-bold lg:text-[24px]'>+994 12 424 24 24</p>
                    </div>
                </div>
                <hr className='lg:hidden' />
                <div className='flex justify-between lg:gap-[5vw]'>
                    <div>
                        <h3 className='text-[18px] font-bold mb-[10px] lg:text-[24px]'>Məlumat</h3>
                        <ul className='flex flex-col gap-[10px] lg:text-[18px]'>
                            <li><Link>Ən çox verilən suallar</Link></li>
                            <li><Link>Dəstək</Link></li>
                            <li><Link>Şərtlər və Qaydalar</Link></li>
                            <li><Link>Elektron bilet</Link></li>
                            <li><Link>Biletin qaytarılması və dəyişdirilməsi</Link></li>
                            <li><Link>Məfilik</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[18px] font-bold mb-[10px] lg:text-[24px]'>iTicket</h3>
                        <ul className='flex flex-col gap-[10px] lg:text-[18px]'>
                            <li><Link>Haqqımızda</Link></li>
                            <li><Link>Məkanlar</Link></li>
                            <li><Link>Biletlərin satış məntəqələri</Link></li>
                            <li><Link>Qarabağ dirçəliş fondu</Link></li>
                            <li><Link>Əlaqə</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='max-w-[270px]'>
                    <h3 className='text-[18px] font-bold mb-[10px] lg:text-[24px]'>Təhlükəsizlik</h3>
                    <p className='text-[#646464] text-[18px]'>Bütün ödənişlər Visa, Visa Electron, Maestro və MasterCard-dan 3D Secure ilə qorunur.</p>
                    <img className='h-[27px] mt-[15px]' src={cards} alt="" />
                </div>
                <hr className='lg:hidden mb-[25px]' />
            </div>
            <div className="footer-bottom container m-auto px-[32px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[15px]">
                <div class="copyright px-5 lg:px-0 text-center text-[#646464] lg:text-[18px]">
                    ITICKET®, «İTİCKET» MMC-nin qeydə alınmış əmtəə nişanıdır.
                </div>
                <div className="f-icons h-[70px] lg:w-[350px] flex justify-around items-center bg-[#FFDD00] text-[25px]">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTiktok />
                    <FaTwitter />
                    <FaLinkedinIn />
                </div>
            </div>
        </footer>
    )
}

export default Footer