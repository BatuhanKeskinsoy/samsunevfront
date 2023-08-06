import React from "react";
import Image from "next/image";

function Partnership() {
  return (
    <section id="PartnerShip">
      <div className="container mx-auto p-4 rounded-lg relative min-h-[300px] h-fit lg:py-0 py-12 w-full overflow-hidden flex flex-col justify-center">
        <Image
          src={"/theme/partnership.png"}
          title={'Kurumsal Üyelik'}
          alt={'Kurumsal Üyelik'}
          sizes="(max-width: 768px) 100vw, 100vw"
          fill
          className="object-cover object-center w-full -z-20"
        />
        <div className='absolute left-0 top-0 w-full h-full transition-all lg:backdrop-blur-[5px] backdrop-blur-[3px] -z-10'></div>
        <div className="flex lg:flex-row flex-col h-full items-center px-8">
          <span className="lg:text-4xl text-2xl text-white flex flex-col items-start h-full w-full justify-around gap-y-12 leading-snug">
            <strong className="lg:text-6xl text-3xl leading-tight">SAMSUNEV ile</strong>
            kazanan emlak ofislerinden olmak ister misiniz?
          </span>

          <div className='flex lg:flex-col items-start justify-around h-full p-4 w-fit flex-col-reverse gap-y-12'>
            <Image
              src={"/logo/logo-white.svg"}
              title={process.env.NEXT_PUBLIC_SITE_NAME}
              alt={process.env.NEXT_PUBLIC_SITE_NAME}
              width={355}
              height={66}
              className="h-auto w-[600px]"
            />
            <button 
              className="w-full ml-auto transition-all justify-center rounded-md py-4 px-8 flex items-center gap-x-2 tracking-wider lg:my-0 my-4 bg-white hover:bg-site hover:text-white hover:shadow-lg lg:hover:scale-105 hover:shadow-site/30 text-xl lg:text-2xl"
            >
              Detaylı Bilgi Al
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partnership;
