import React from "react";
import Image from "next/image";
import Link from "next/link";

function Partnership() {
  return (
    <section id="PartnerShip">
      <div className="container mx-auto p-6 rounded-lg relative lg:min-h-[250px] h-fit lg:py-0 w-full overflow-hidden flex flex-col justify-center">
        <Image
          src={"/theme/partnership.png"}
          title={'Kurumsal Üyelik'}
          alt={'Kurumsal Üyelik'}
          sizes="(max-width: 768px) 30vw, 30vw"
          fill
          className="object-cover object-centber w-full -z-20"
        />
        <div className='absolute left-0 top-0 w-full h-full transition-all backdrop-blur-[3px] -z-10'></div>
        <div className="flex lg:flex-row flex-col h-full items-center lg:px-8">
          <span className="lg:text-4xl text-2xl text-white flex flex-col items-start h-full w-full justify-around gap-y-6 leading-snug drop-shadow-lg">
            <strong className="lg:text-6xl text-4xl leading-tight tracking-wider">SAMSUNEV ile</strong>
            kazanan emlak ofislerinden olmak ister misiniz?
          </span>

          <div className='flex lg:flex-col items-start justify-around h-full lg:p-4 lg:w-fit w-full flex-col-reverse gap-y-6 mt-6 lg:mt-0'>
            <Image
              src={"/logo/logo-white.svg"}
              title={process.env.NEXT_PUBLIC_SITE_NAME}
              alt={process.env.NEXT_PUBLIC_SITE_NAME}
              width={355}
              height={66}
              className="h-auto w-[600px]"
            />
            <Link
              href={'/kurumsal-uyelik'}
              className="w-full ml-auto transition-all justify-center rounded-md py-4 px-8 flex items-center gap-x-2 tracking-wider bg-white hover:bg-site hover:text-white hover:shadow-lg hover:shadow-site/30 text-xl lg:text-2xl"
            >
              Detaylı Bilgi Al
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partnership;
