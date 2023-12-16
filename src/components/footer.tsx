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
    <footer className='grid grid-cols-2 pt-20 pb-10 bg-[#D3DCE7] items-center h-full w-full px-4 sm:px-20 2xl:px-16 mt-20'>
      <div>
        <Image alt='image' src={logo}></Image>
        <p className='pt-10'>kunjungi kami di aplikasi lain!</p>
        <div className='flex pt-5 gap-6'>
          <Image alt='image' src={linkedin}></Image>
          <Image alt='image' src={tiktok}></Image>
          <Image alt='image' src={instagram}></Image>
          <Image alt='image' src={map}></Image>
          <Image alt='image' src={whatsapp}></Image>

        </div>
      </div>

      <div className='flex justify-center'>
        <div className='pl-20'>
          <Link className='block pt-2' href={'/'}>Home</Link>
          <Link className='block pt-2' href={'/'}>About</Link>
          <Link className='block pt-2' href={'/'}>Activity</Link>
        </div>
        <div className='pl-16'>
          <Link className='block pt-2' href={'/'}>Member</Link>
          <Link className='block pt-2' href={'/'}>Gallery</Link>
          <Link className='block pt-2' href={'/'}>Contact Us</Link>
        </div>
      </div>

      <hr className='' />


    </footer>

  )
}
