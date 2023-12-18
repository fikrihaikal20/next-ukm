"use client"
import Image from 'next/image'
import linkedin from '../../public/linkedin.svg'
import tiktok from '../../public/tiktok.svg'
import instagram from '../../public/instagram.svg'
import map from '../../public/map.svg'
import logo from '../../public/logo.png'
import whatsapp from '../../public/whatsapp.svg'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className=' pt-20 pb-10 bg-[#D3DCE7] items-center h-full w-full px-4 sm:px-20 2xl:px-16 mt-20'>
      {/* Main footer */}
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='mx-auto'>
          <div className='flex'>
            <Image alt='image' src={logo}></Image>
            <p className='text-xl pl-3 pt-2'>UKMR UB</p>
          </div>
          <p className='pt-10'>kunjungi kami di aplikasi lain!</p>
          <div className='flex pt-5 gap-6'>
            <Image alt='image' src={linkedin}></Image>
            <Image alt='image' src={tiktok}></Image>
            <Image alt='image' src={instagram}></Image>
            <Image alt='image' src={map}></Image>
            <Image alt='image' src={whatsapp}></Image>
          </div>
        </div>

        <div>
          <div className='md:flex justify-center pt-5'>
            <div className='text-center md:pl-20'>
              <Link className='block pt-4' href={'/'}>Home</Link>
              <Link className='block pt-4' href={'/'}>About</Link>
              <Link className='block pt-4' href={'/'}>Activity</Link>
            </div>
            <div className='text-center md:pl-16'>
              <Link className='block pt-4' href={'/'}>Member</Link>
              <Link className='block pt-4' href={'/'}>Gallery</Link>
              <Link className='block pt-4' href={'/'}>Contact Us</Link>
            </div>
          </div>
        </div>

        <div className='pt-8 flex mx-auto md:invisible'>
          <p className='text-xs text-center'>©2022 Company Name. All rights reserved</p>
        </div>
      </div>

      <hr className='py-2 ' />

      {/* subfooter */}
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <p className='invisible md:visible text-xs text-center'>©2022 Company Name. All rights reserved</p>
        <div className='flex mx-auto'>
          <p className='invisible md:visible text-xs pl-20'> Privacy & Policy</p>
          <p className='invisible md:visible text-xs pl-20'> Terms & Condition</p>
        </div>
      </div>




    </footer>

  )
}
