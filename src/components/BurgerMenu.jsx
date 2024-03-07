import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'

export default function BurgerMenu({burgerStatus, setBurger}) {
    // const [open, setOpen] = useState(false)

    return (
        <Transition.Root show={burgerStatus} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setBurger}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 left-[-40px] flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-[-110%]"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-[-100%]"
                            >
                                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-[85vw]">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute right-[-50px] top-0 -ml-8 flex pr-2 pt-4 mr-[10px]">
                                            <button
                                                type="button"
                                                className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                onClick={() => setBurger(false)}
                                            >
                                                <span className="absolute -inset-2.5" />
                                                <span className="sr-only">Close panel</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-5 shadow-xl">
                                        <div className="px-4">
                                            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                                <div className='burger-title flex justify-between items-center'>
                                                    <img className='max-w-[112px]' src={logo} alt="" />
                                                    <div className="lang-switcher text-[#BEBEBE] text-[12px]">
                                                        <Link className='border-[1px] border-[#cacaca] rounded-l-[5px] p-[4px]'>EN</Link>
                                                        <Link className='border-[1px] border-[#cacaca] rounded-r-[5px] p-[4px]'>RU</Link>
                                                    </div>
                                                </div>
                                                <div className="burgerInp mt-[25px]">
                                                    <form>
                                                        <div className="relative">
                                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                                </svg>
                                                            </div>
                                                            <input type="search" id="search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg outline-none" placeholder="Axtar" required />
                                                        </div>
                                                    </form>
                                                </div>
                                            </Dialog.Title>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4">
                                            <ul className='flex flex-col gap-[15px] font-[900] text-[20px]'>
                                                <li><Link>Bütün tədbirlər</Link></li>
                                                <li><Link>Konsert</Link></li>
                                                <li><Link>Tamaşa</Link></li>
                                                <li><Link>Uşaqlar</Link></li>
                                                <li><Link>Dream Fest 2024</Link></li>
                                                <li><Link>Hayal Kahvesi</Link></li>
                                                <li><Link>İdman</Link></li>
                                                <li><Link>Muzey</Link></li>
                                                <li><Link>Sirk</Link></li>
                                                <li><Link>Turizm</Link></li>
                                                <li><Link>Seminar</Link></li>
                                                <li><Link>Master Klass</Link></li>
                                                <li><Link>Digər</Link></li>
                                                <li><Link>Məhsullar</Link></li>
                                                <li><Link>360°/VR</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
