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
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../firebase';
import { logout as storeLogout } from '../store/auth';
import { RxExit } from "react-icons/rx";

function Header() {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  console.log('user: ' + user);

  const [burger, setBurger] = useState(false)
  const [drop, setDrop] = useState(false)
  const [userDrop, setUserDrop] = useState(false)
  const [openLog, setOpenLog] = useState(false)

  function handleBurger() { setBurger(!burger) }

  function handleDrop() { setDrop(!drop) }

  function handleLogPanel() { setOpenLog(!openLog) }

  function handleUserDrop() { setUserDrop(!userDrop) }

  async function handleLogOut() {
    setUserDrop(false)
    await logout()
    dispatch(storeLogout())
  }


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
            <Link to='/'>
              <img className='max-h-[36px]' src={logo} alt="" />
            </Link>
            <div className='flex items-center gap-[17px]'>
              <FaRegHeart className='md:text-[25px] md:block hidden text-[#BEBEBE]' />
              <IoIosCart className='md:text-[25px] text-[20px] text-[#BEBEBE]' />
              <div onClick={user ? handleUserDrop : handleLogPanel} className='md:text-[20px] bg-[#FFDD00] rounded-[50%] md:p-[15px] p-[10px] font-bold ' >
                <FaRegUser className=' font-bold' />
              </div>
              <ul className={`authDrop ${userDrop ? 'flex' : 'hidden'} absolute top-[80px] md:top-[95px] right-[15px] bg-[#fff] text-[16px] text-black font-[600] p-[10px] px-[15px] flex-col gap-[10px] rounded-[10px] z-[100]`}>
                  <li className='font-[600] font-sans text-zinc-600'>{user && user.email}</li>
                  <hr />
                  <li><Link to='/profile'>Profil</Link></li>
                  <li><Link>Mənim sifarişlərim</Link></li>
                  <li><Link>Çatdırılma ünvanları</Link></li>
                  <li><Link>Mənim kartlarım</Link></li>
                  <li><Link>Tərəfdaşlıq Proqramı</Link></li>
                  <li><Link>Cüzdan</Link></li>
                  <li><Link>Şifrəni yenilə</Link></li>
                  <hr />
                  <li onClick={handleLogOut}><Link>Çıxış</Link></li>
                </ul>
            </div >
          </div>

          <div className='absolute z-10 top-[10px] w-[100%] hidden xl:flex items-center justify-between py-[32px] px-[90px]'>
            <Link to='/'>
              <img className='max-h-[36px] brightness-[10000%]' src={logo} alt="" />
            </Link>
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
            <div className='relative flex items-center justify-between gap-[20px] text-white text-[22px]'>
              <FaRegHeart />
              <IoSearch />
              <IoIosCart />
              <div className='dropWrapper'>
                <div onClick={user ? handleUserDrop : handleLogPanel} className='userIcon text-[20px] w-[50px] h-[50px] flex justify-center items-center bg-[#FFDD00] rounded-[50%] p-[10px] text-bold text-black' >
                  <FaRegUser />
                </div>
                <ul className={`authDrop ${userDrop ? 'flex' : 'hidden'} absolute top-[60px] right-0 bg-[#fff] text-[20px] text-black font-[600] py-[20px] px-[15px] flex-col gap-[15px] rounded-[10px] text-nowrap`}>
                  <li className='font-[600] font-sans text-zinc-600'>{user && user.email}</li>
                  <hr />
                  <li><Link to='/profile'>Profil</Link></li>
                  <li><Link>Mənim sifarişlərim</Link></li>
                  <li><Link>Çatdırılma ünvanları</Link></li>
                  <li><Link>Mənim kartlarım</Link></li>
                  <li><Link>Tərəfdaşlıq Proqramı</Link></li>
                  <li><Link>Cüzdan</Link></li>
                  <li><Link>Şifrəni yenilə</Link></li>
                  <hr />
                  <li onClick={handleLogOut}><Link className='flex items-center justify-between'>Çıxış<RxExit /></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header