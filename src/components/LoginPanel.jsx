import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import SignUp from './SignUp';
import { login } from '../firebase';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { login as loginHandle } from '../store/auth';

export default function LoginPanel({ openLog, setOpenLog }) {

    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [openSign, setOpenSign] = useState(false)

    function goSign() {
        setOpenLog(false)
        setOpenSign(true)
    }

    function onloggedIn() {
        setTimeout(() => {
            setOpenLog(false)
        }, 1000)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const user = await login(email, password)
        user && dispatch(loginHandle(user))
        setEmail('')
        setPassword('')
    }

    return (
        <>
            <SignUp openSign={openSign} setOpenSign={setOpenSign} setOpenLog={setOpenLog} />
            <Toaster position='top-right' />
            <Transition.Root show={openLog} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenLog}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-[#353535ac] bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-visible">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="logPanel relative w-[440px] transform overflow-hidden rounded-[10px] bg-white p-[30px] md:p-[40px] shadow-xl transition-all">
                                    <div className='flex flex-col gap-[20px]'>
                                        <div className='flex justify-between items-center'>
                                            <h3 className='text-[30px] font-bold'>Daxil Ol</h3>
                                            <div className='flex items-center gap-[10px]'>
                                                <div className='bg-[#3b5a97] rounded-[50%] w-[50px] h-[50px] flex justify-center items-center'>
                                                    <FaFacebookF className='text-[1.1rem] text-[white]' />
                                                </div>
                                                <div className='bg-[#db4d41] rounded-[50%] w-[50px] h-[50px] flex justify-center items-center'>
                                                    <FaGoogle className='text-[1.1rem] text-[white]' />
                                                </div>
                                            </div>
                                        </div>
                                        <form onSubmit={handleSubmit} action="" className='flex flex-col gap-[20px]'>
                                            <div className='flex flex-col gap-[20px]'>
                                                <input value={email} onChange={(e) => setEmail(e.target.value)} className='max-[90%] h-[55px] py-[16px] px-[24px] text-[1.2rem] outline-0 border-[1px] rounded-[7px]' type="email" placeholder='E-poçt' />
                                                <input value={password} onChange={(e) => setPassword(e.target.value)} className='max-[90%] h-[55px] py-[16px] px-[24px] text-[1.2rem] outline-0 border-[1px] rounded-[7px]' type="password" placeholder='Şifrə' />
                                            </div>
                                            <button type='submit' onClick={onloggedIn} className='h-[60px] bg-[#ffdd00] text-[1.2rem] font-bold rounded-[7px]'>Daxil ol</button>
                                        </form>
                                        <div className='text-center text-[1.1rem] text-[#646464] w-[90%] m-auto'>
                                            iTicket.AZ-da yenisiniz?
                                            <span onClick={goSign} className='text-[#bb7bdf] ml-[5px] cursor-pointer hover:underline'>Qeydiyyatdan keçin</span>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
