"use client"
import Image from 'next/image'
import logo from '../../public/logo.svg'
import background from '../../public/background.png'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineInstagram, AiOutlineMenu, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import { useState,useEffect  } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <div
    className="flex flex-col min-h-screen bg-slate-800 text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30"
    style={{ backgroundImage: `url(${background.src})` }}
    >
      <nav className={`fixed w-full h-24 shadow-x z-50 ${scrolling ? 'bg-black' : 'bg-transparent'}`}>
        <div className='flex justify-between items-center h-full w-full px-4 sm:px-20 2xl:px-16'>
          <Link href={''}>
            <Image
              src={logo}
              alt='Logo'
              className='cursor-pointer'
              priority
            />
          </Link>
          <div className='hidden md:flex'>
            <ul className='hidden md:flex'>
              <Link href={'/'}>
                <li className='ml-10 hover:boder-b text-xl'>Home</li>
              </Link>
              <Link href={'#about'}>
                <li className='ml-10 hover:boder-b text-xl'>About</li>
              </Link>
              <Link href={'#activity'}>
                <li className='ml-10 hover:boder-b text-xl'>Activity</li>
              </Link>
              <Link href={'#member'}>
                <li className='ml-10 hover:boder-b text-xl'>Member</li>
              </Link>
              <Link href={'#galery'}>
                <li className='ml-10 hover:boder-b text-xl'>Galery</li>
              </Link>
            </ul>
          </div>
          <div className='hidden md:flex'>
            <Link href={'#Contact'} className='text-xl'>Contact Us</Link>
          </div>
          <div onClick={handleNav} className='md:hidden cursor-pointer pl-24'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-black shadow-xl p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-0 ease-in duration-500"
        }>
          <div className='flex w-full items-center justify-end'>
            <div onClick={handleNav} className='cursor-pointer'>
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className='flex-col py-4'>
            <ul>
              <Link href={'/'}>
                <li onClick={() => setMenuOpen(false)}
                  className='py-4 cursor-pointer'
                >
                  Home
                </li>
              </Link>
              <Link href={'/'}>
                <li onClick={() => setMenuOpen(false)}
                  className='py-4 cursor-pointer'
                >
                  About
                </li>
              </Link>
              <Link href={'/'}>
                <li onClick={() => setMenuOpen(false)}
                  className='py-4 cursor-pointer'
                >
                  Activity
                </li>
              </Link>
              <Link href={'/'}>
                <li onClick={() => setMenuOpen(false)}
                  className='py-4 cursor-pointer'
                >
                  Member
                </li>
              </Link>
              <Link href={'/'}>
                <li onClick={() => setMenuOpen(false)}
                  className='py-4 cursor-pointer'
                >
                  Gallery
                </li>
              </Link>
              <Link href={'/'}>
                <li onClick={() => setMenuOpen(false)}
                  className='py-4 cursor-pointer '
                >
                  Contact Us
                </li>
              </Link>
              
            </ul>
          </div>
          <div className='flex flex-row justify-around pt-10 items-center'>
            <AiOutlineInstagram size={30} className="cursor-pointer" />
            <AiOutlineWhatsApp size={30} className="cursor-pointer" />
            <AiOutlineTwitter size={30} className="cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* content */}
      <div className="flex-1 flex items-center">
        <div className="text-center mx-auto">
          <h1 className="text-4xl sm:text-6xl font-semibold">UKM Renang <br /> Universitas Brawijaya</h1>
          <p className="font-light text-xs sm:text-xl mt-5">Selamat datang di halaman resmi Unit Kegiatan Mahasiswa <br /> (UKM) Renang Universitas Brawijaya! </p>
          <a className="px-10 sm:px-20 py-3 rounded-md inline-block bg-[#FE8623] text-white hover:bg-[#FE8623] transition-colors mt-10" href="">Join Us!</a>
        </div>
      </div>

    </div>
  )
}
