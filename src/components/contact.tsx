"use client"
import Image from 'next/image'
import about from '../../public/about.png'
import Location from '../../public/Location.svg'
import Phone from '../../public/Phone.svg'
import Mail from '../../public/Mail.svg'

export default function Contact() {
  return (
    <section className='h-full w-full px-4 sm:px-20 2xl:px-16 mt-20 lg:mt-5' id='Contact'>
      <div className='pb-10'>
        <h1 className='text-3xl text-center font-bold'>Contact Us</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center '>
        <div className='text-center mx-auto'>
          <div style={{ width: '100%' }}>
            <iframe
              className=' md:w-[400px] md:h-[240px] w-[300px] h-[140px]'
              width="200%"
              height="1000"
              src="https://maps.google.com/maps?width=100%25&amp;height=1200&amp;hl=en&amp;q=universitas%20brawijaya+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
            </iframe>

          </div>
        </div>
        <div className='lg:pl-10 pl-5 pt-10 md:pt-0'>
          <div className='mt-4'>
            <p className=' text-xl font-semibold'>Visit Us</p>
            <p className='pt-3'>Kami mengundang Anda untuk menjelajahi lebih dalam ke dalam dunia UKM Renang Universitas Brawijaya.</p>
          </div>
          <div className='flex mt-4'>
            <Image alt='image' src={Location}></Image>
            <p className='pl-4'>Universitas Brawijaya Malang</p>
          </div>
          <div className='flex mt-4'>
            <Image alt='image' src={Mail}></Image>
            <p className='pl-4'>ukmrenang@student.ub.ac.id</p>
          </div>
          <div className='flex mt-4'>
            <Image alt='image' src={Phone}></Image>
            <p className='pl-4'>081239826123</p>
          </div>
        </div>
      </div>
    </section>
  );
}
