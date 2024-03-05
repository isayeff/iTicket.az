import React, { useState } from 'react'
import BurgerMenu from '../components/BurgerMenu'
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../assets/img/logo.png'
import { IoIosCart } from "react-icons/io";
import { FaConfluence, FaRegUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function Header() {

  const [burger, setBurger] = useState(false)
  function handleBurger() {
    setBurger(!burger)
  }

  return (
    <>
      <header className='relative'>
        <BurgerMenu burgerStatus={burger} setBurger={setBurger} />
        <nav>
          <div className='flex justify-between items-center p-[16px] xl:hidden'>
            <div>
              <RxHamburgerMenu onClick={handleBurger} className='text-[23px] text-[#BEBEBE]' />
            </div>
            <img className='max-h-[36px]' src={logo} alt="" />
            <div className='flex items-center gap-[10px]'>
              <IoIosCart className='text-[20px] text-[#BEBEBE]' />
              <div className='text-[15px] bg-[#FFDD00] rounded-[50%] p-[10px] text-bold ' >
                <FaRegUser />
              </div>
            </div >
          </div>

          <div className='absolute top-[20px] w-[100%] hidden xl:flex items-center justify-between py-[32px] px-[90px] bg-slate-900'>
            <div>
              <img className='max-w-[160px]' src={logo} alt="" />
            </div>
            <div className='flex items-center justify-between gap-[70px] text-white font-[600]'>
              <div className="lang-switcher text-[#ffffff] text-[12px]">
                <Link className='border-[1px] border-[#ffffff] rounded-l-[5px] p-[4px]'>EN</Link>
                <Link className='border-[1px] border-[#ffffff] rounded-r-[5px] p-[4px]'>RU</Link>
              </div>
              <ul className='flex items-center justify-between text-[20px] gap-[20px]'>
                <li><Link>Bütün Tədbirlər</Link></li>
                <li><Link>Konsert</Link></li>
                <li><Link>Tamaşa</Link></li>
                <li><Link>Uşaqlar</Link></li>
                <li><Link>Dream Fest 2024</Link></li>
                <li><BsThreeDots className='text-[20px]' /></li>
              </ul>
            </div>
            <div className='flex items-center justify-between gap-[20px] text-white text-[22px]'>
              <FaRegHeart />
              <IoSearch />
              <IoIosCart />
              <div className='text-[20px] w-[50px] h-[50px] flex justify-center items-center bg-[#FFDD00] rounded-[50%] p-[10px] text-bold text-black' >
                <FaRegUser />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header