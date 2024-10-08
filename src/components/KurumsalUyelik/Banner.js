import React, { useState } from 'react'
import SweetAlert2 from 'react-sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js'

function Banner() {
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/compare-register-contact/send`, {
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
            })

        } catch (error) {
            console.error('Form Kaydedilemedi:', error);
        }
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    return (
        <section id='KurumsalUyelik' className='bg-gradient-to-b from-blue-950 to-site/90 shadow-lg text-white lg:p-6 py-6'>
            <div className="container mx-auto lg:px-0 px-4 lg:py-8">
                <div className="flex lg:flex-row flex-col gap-x-60 w-full">
                    <div className='flex-[1_1_60%] w-full'>
                        <h1 className='lg:text-6xl text-4xl mb-4 !leading-snug text-center lg:text-left'>
                            SAMSUNEV KURUMSAL ÜYELİK AYRICALIKLARINI KEŞFEDİN
                        </h1>
                        <p className='text-2xl lg:leading-loose leading-normal text-center lg:text-left text-gray-200 hidden lg:block'>
                            Gayrimenkul dünyasında SAMSUNEV.COM iş ortaklarından biri olun. Ayrıcalıkların farkına varın.
                        </p>
                        <p className='text-4xl mt-4 leading-loose text-center lg:text-left'>Üstelik Şimdilik <span className='font-bold tracking-wider lg:text-4xl text-5xl'>TAMAMEN ÜCRETSİZ</span></p>
                    </div>
                    <div className="flex-[1_1_40%] relative w-full lg:my-0 my-8">
                        <div className="bg-white rounded-2xl shadow-2xl lg:absolute left-0 top-0 w-full text-black px-4 py-8">
                            <div className="lg:px-4 flex flex-col w-full gap-y-2">
                                <span className='lg:text-2xl font-bold text-xl tracking-wider block text-black'>Formu doldurun, size ulaşalım</span>
                                <p className='text-gray-500'>Formu doldurun, sizi Samsunev.com’un ayrıcalıkları hakkında bilgilendirelim.</p>
                            </div>
                            <form onSubmit={handleSubmit} className='flex flex-col w-full'>
                                <div className="flex flex-col w-full py-3 lg:px-3">
                                    <label htmlFor="name" className="block text-lg font-bold tracking-wider">İsminiz</label>
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
                                <div className="flex flex-col w-full py-3 lg:px-3">
                                    <label htmlFor="email" className="block text-lg font-bold tracking-wider">E-Mail Adresiniz</label>
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
                                <div className="flex flex-col w-full py-3 lg:px-3">
                                    <label htmlFor="phone" className="block text-lg font-bold tracking-wider">Telefon Numaranız</label>
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
                                <div className="mt-4 w-full">
                                    <button
                                        type="submit"
                                        tabIndex={5}
                                        className='ml-auto justify-center min-w-fit lg:w-fit w-full text-site transition-all rounded-md py-3 px-6 flex items-center gap-x-2 tracking-wider lg:my-0 bg-site/90 hover:bg-site text-white hover:shadow-lg lg:hover:scale-105 hover:shadow-site/30 text-lg'
                                    >
                                        Gönder
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner