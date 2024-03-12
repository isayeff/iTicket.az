import React, { useState } from 'react'
import BurgerMenu from '../components/BurgerMenu'
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../assets/img/logo.png'
import { IoIosCart } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import LoginPanel from '../components/LoginPanel';

function Header() {

  const [burger, setBurger] = useState(false)
  const [drop, setDrop] = useState(false)
  const [openLog, setOpenLog] = useState(false)

  function handleBurger() {setBurger(!burger)}

  function handleDrop() {setDrop(!drop)}

  function handleLogPanel() {setOpenLog(!openLog)}

  return (
    <>
      <LoginPanel openLog={openLog} setOpenLog={setOpenLog} />
      <header className='relative'>
        <BurgerMenu burgerStatus={burger} setBurger={setBurger} />
        <nav>
          <div className='resNav flex justify-between items-center px-[16px] py-[20px] xl:hidden bg-white'>
            <div>
              <RxHamburgerMenu onClick={handleBurger} className='text-[23px] text-[#BEBEBE]' />
            </div>
            <img className='max-h-[36px]' src={logo} alt="" />
            <div className='flex items-center gap-[17px]'>
              <FaRegHeart className='md:text-[25px] md:block hidden text-[#BEBEBE]' />
              <IoIosCart className='md:text-[25px] text-[20px] text-[#BEBEBE]' />
              <div onClick={handleLogPanel} className='md:text-[20px] bg-[#FFDD00] rounded-[50%] md:p-[15px] p-[10px] font-bold ' >
                <FaRegUser className=' font-bold' />
              </div>
            </div >
          </div>

          <div className='absolute z-50 top-[10px] w-[100%] hidden xl:flex items-center justify-between py-[32px] px-[90px]'>
            <div>
              <img className='max-h-[36px] brightness-[10000%]' src={logo} alt="" />
            </div>
            <div className='flex items-center justify-between gap-[70px] text-white font-[600]'>
              <div className="lang-switcher text-[#ffffff] text-[12px]">
                <Link className='border-[1px] border-[#ffffff] rounded-l-[5px] p-[4px]'>EN</Link>
                <Link className='border-[1px] border-[#ffffff] rounded-r-[5px] p-[4px]'>RU</Link>
              </div>
              <ul className='hoverLink flex relative items-center justify-between text-[20px] gap-[25px]'>
                <li><NavLink className='lHover'>Bütün Tədbirlər</NavLink></li>
                <li><NavLink>Konsert</NavLink></li>
                <li><NavLink>Tamaşa</NavLink></li>
                <li><NavLink>Uşaqlar</NavLink></li>
                <li><NavLink className='lHover'>Dream Fest 2024</NavLink></li>
                <li><BsThreeDots onClick={handleDrop} className='text-[20px]' />
                  <ul className={`${drop ? 'block' : 'hidden'} absolute right-0 top-[40px] flex flex-col gap-[15px] bg-white rounded-[15px] text-black p-[20px] text-[18px]`}>
                    <li><Link>Hayal Kahvesi</Link></li>
                    <li><Link>İdman</Link></li>
                    <li><Link>Muzey</Link></li>
                    <li><Link>Sirk</Link></li>
                    <li><Link>Turizm</Link></li>
                    <li><Link>Seminar</Link></li>
                    <li><Link>Master Klass</Link></li>
                    <li><Link>Digər</Link></li>
                    <li><Link>Məhsullar</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='flex items-center justify-between gap-[20px] text-white text-[22px]'>
              <FaRegHeart />
              <IoSearch />
              <IoIosCart />
              <div onClick={handleLogPanel} className='text-[20px] w-[50px] h-[50px] flex justify-center items-center bg-[#FFDD00] rounded-[50%] p-[10px] text-bold text-black' >
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