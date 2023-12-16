"use client"
import Image from 'next/image'
import about from '../../public/about.png'


export default function About() {
  return (
    <div className='grid grid-cols-2 items-center h-full w-full px-4 sm:px-20 2xl:px-16 mt-20'>
      <div className='text-center'>
        <Image src={about} alt='image' width={521} height={388}></Image>
      </div>

      <div>
        <h1 className='text-3xl font-bold'>About Us</h1>
        <p className='mt-4'>UKM Renang UB adalah wadah bagi mahasiswa yang memiliki minat dan bakat dalam olahraga renang untuk mengembangkan potensi mereka. Dengan semangat kompetitif dan semangat kebersamaan, kami berkomitmen untuk menciptakan lingkungan yang mendukung pertumbuhan individu sambil merayakan keberagaman di antara anggota kami.</p>
      </div>
    </div>
  )
}
