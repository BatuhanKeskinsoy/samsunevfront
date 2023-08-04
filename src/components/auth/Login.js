import React, { useState, useEffect } from 'react'
import { TfiClose } from 'react-icons/tfi'
import { toast } from 'react-hot-toast'

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        /* const user = await login(email, password)
        if (user) {
            router.push('/panel/anasayfa')
        }
        setEmail('')
        setPassword('') */
    }

    const isAuthActive = props.isAuthActive
    const setIsAuthActive = props.setIsAuthActive

    const handleCloseAuth = () => {
        setIsAuthActive(false);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.AuthContain')) {
                setIsAuthActive(false);
            }
        };

        if (isAuthActive) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isAuthActive]);

    const handleLogin = () => {
        toast.success('Giriş Yapılıyor..')
    }

    if (isAuthActive) {
        return (
            <div className='absolute flex left-0 top-0 w-full h-full justify-center items-center backdrop-blur-sm z-20 px-4'>
                <div className="AuthContain flex flex-col max-w-lg w-full shadow-xl shadow-gray-200 justify-center items-center rounded-lg bg-white lg:animate-loginComing animate-loginComingMobile">
                    <div className="flex justify-between w-full items-center px-8 py-4">
                        <span className='font-bold text-lg'>Giriş Yap</span>
                        <button
                            onClick={handleCloseAuth}
                            className='hover:text-site hover:scale-125 transition-all'
                        >
                            <TfiClose size={22} />
                        </button>

                    </div>
                    <hr className='w-full' />
                    <div className="flex flex-col py-8 px-8 gap-6 w-full">
                        <form className="lg:space-y-8 space-y-4" onSubmit={handleSubmit}>
                            <div className='w-full'>
                                <label htmlFor="email" className="block text-lg">E-Mail Adresiniz</label>
                                <div className="mt-3">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        tabIndex={1}
                                        onChange={e => setEmail(e.target.value)}
                                        autoComplete="email"
                                        placeholder='E-Mail Adresiniz'
                                        required
                                        className="block font-gemunu tracking-wider w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-site/30 focus:ring-site outline-none text-sm lg:text-lg sm:leading-6 transition-all px-4"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-lg">Şifreniz</label>
                                </div>
                                <div className="mt-3">
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        tabIndex={2}
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder='******'
                                        required
                                        className="block font-gemunu tracking-wider w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-site/30 focus:ring-site outline-none text-sm lg:text-lg sm:leading-6 transition-all px-4"
                                    />
                                </div>
                            </div>
                            <div className='flex'>
                                <button
                                    onClick={handleLogin}
                                    type='submit'
                                    className='min-w-fit ml-auto lg:w-fit w-full text-center justify-center text-site transition-all lg:rounded-md py-3 px-4 flex items-center gap-x-2 tracking-wider lg:my-0 my-4 bg-site/10 hover:bg-site hover:text-white hover:shadow-lg lg:hover:scale-105 hover:shadow-site/30 text-sm'
                                >
                                    Giriş Yap
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    return null; // isActive false ise hiçbir şey gösterme
}

export default Login