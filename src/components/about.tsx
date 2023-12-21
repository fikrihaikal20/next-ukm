"use client"
import Image from 'next/image'
import about from '../../public/about.svg'


export default function About() {
  return (
    <section className='h-full w-full px-4 sm:px-20 2xl:px-16 mt-20 mb-20 lg:mt-5' id='about'>
      <div className='pb-10 lg:invisible'>
        <h1 className='text-3xl text-center font-bold'>About Us</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center '>
        <div className='text-center mx-auto'>
          <Image src={about} alt='image' width={521} height={388}></Image>
        </div>
        <div className='lg:pl-10'>
          <h1 className='text-3xl invisible lg:visible font-bold'>About Us</h1>
          <p className='mt-4 text-center lg:text-left'>UKM Renang UB adalah wadah bagi mahasiswa yang memiliki minat dan bakat dalam olahraga renang untuk mengembangkan potensi mereka. Dengan semangat kompetitif dan semangat kebersamaan, kami berkomitmen untuk menciptakan lingkungan yang mendukung pertumbuhan individu sambil merayakan keberagaman di antara anggota kami.</p>
        </div>
      </div>
    </section>

  )
}
