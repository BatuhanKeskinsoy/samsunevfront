import React, { useState } from 'react'
import SweetAlert2 from 'react-sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Socials from '@/components/Others/Socials'

function Iletisim() {

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/contact/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'HTTP_VERIFY': process.env.NEXT_PUBLIC_SITE_HTTP_VERIFY
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();

            if (data.error == false) {
                Swal.fire({
                    title: 'Tebrikler',
                    text: data.message,
                    icon: 'success',
                    confirmButtonText: 'Tamam',
                    customClass: {
                        confirmButton: 'sweetButtonColor'
                    }
                });
            }
            else {
                Swal.fire({
                    title: 'Hata',
                    text: data.message,
                    icon: 'error',
                    confirmButtonText: 'Tamam',
                    customClass: {
                        confirmButton: 'sweetButtonColor'
                    }
                });
            }

            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            })

        } catch (error) {
            console.error('Form Kaydedilemedi:', error);
        }
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    return (
        <section id='Iletisim' className='lg:pb-16 lg:mt-20'>
            <div className="container mx-auto lg:px-0 px-4 flex flex-col gap-y-3">
                <div className="flex flex-col bg-white lg:mb-8 py-8 lg:px-8 px-4 shadow-sm rounded-lg lg:gap-x-12">
                    <h1 className='lg:text-3xl text-xl font-semibold tracking-widest lg:my-8 mb-4 block text-black'>İletişim</h1>
                    <div className="flex lg:flex-row flex-col gap-x-8">
                        <form onSubmit={handleSubmit} className='flex lg:flex-row flex-col flex-wrap flex-[1_1_75%]'>
                            <div className="flex flex-col w-full flex-[1_1_33.33%] p-3">
                                <label htmlFor="name" className="block text-lg">İsminiz</label>
                                <div className="mt-3">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        tabIndex={1}
                                        autoComplete="name"
                                        placeholder="Adınız ve Soyadınız"
                                        required
                                        className="block tracking-wider w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-site/30 focus:ring-site outline-none text-sm lg:text-lg sm:leading-6 transition-all px-4"

                                    />

                                </div>
                            </div>
                            <div className="flex flex-col w-full flex-[1_1_33.33%] p-3">
                                <label htmlFor='email' className="block text-lg">E-Mail Adresiniz</label>
                                <div className="mt-3">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        tabIndex={2}
                                        autoComplete="email"
                                        placeholder="E-Mail Adresiniz"
                                        required
                                        className="block tracking-wider w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-site/30 focus:ring-site outline-none text-sm lg:text-lg sm:leading-6 transition-all px-4"

                                    />

                                </div>
                            </div>
                            <div className="flex flex-col w-full flex-[1_1_33.33%] p-3">
                                <label htmlFor="phone" className="block text-lg">Telefon Numaranız</label>
                                <div className="mt-3">
                                    <input
                                        type="number"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                        tabIndex={3}
                                        autoComplete="phone"
                                        placeholder="Telefon Numaranız"
                                        required
                                        className="block tracking-wider w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-site/30 focus:ring-site outline-none text-sm lg:text-lg sm:leading-6 transition-all px-4"

                                    />

                                </div>
                            </div>
                            <div className="flex flex-col w-full flex-[1_1_100%] p-3">
                                <label htmlFor="phone" className="block text-lg">Mesajınız</label>
                                <div className="mt-3">
                                    <textarea
                                        cols="5"
                                        rows="5"
                                        type="number"
                                        id="phone"
                                        name="phone"
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        tabIndex={4}
                                        autoComplete="message"
                                        placeholder="Mesajınızı Giriniz"
                                        required
                                        className="block tracking-wider w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-site/30 focus:ring-site outline-none text-sm lg:text-lg sm:leading-6 transition-all px-4"

                                    >
                                    </textarea>

                                </div>
                            </div>
                            <div className="mt-2 w-full">
                                <button
                                    type="submit"
                                    tabIndex={5}
                                    className='ml-auto justify-center min-w-fit lg:w-fit w-full text-site transition-all rounded-md py-3 px-6 flex items-center gap-x-2 tracking-wider lg:my-0 my-4 bg-site/90 hover:bg-site text-white hover:shadow-lg lg:hover:scale-105 hover:shadow-site/30 text-lg'
                                >
                                    Gönder
                                </button>
                            </div>
                        </form>
                        <div className="flex-[1_1_25%] flex flex-col gap-y-4 items-center lg:justify-start justify-start">
                            <span className='text-2xl tracking-wide my-4 text-center'>Sosyal Medya Hesaplarımız</span>
                            <Socials />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Iletisim