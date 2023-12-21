"use client"
import Image from 'next/image'
import about from '../../public/about.png'
import foto1 from '../../public/foto1.png'
import foto2 from '../../public/foto2.png'
import foto3 from '../../public/foto3.png'
import foto4 from '../../public/foto4.png'
import foto5 from '../../public/foto5.png'
import foto6 from '../../public/foto6.png'
import foto7 from '../../public/foto7.png'
import foto8 from '../../public/foto8.png'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default function Activity() {
  return (
    <section className='h-full w-full px-4 sm:px-20 2xl:px-16 mt-20 lg:mt-5' id='activity'>
      <div className="container">
        <h1 className="text-3xl font-bold text-center mb-10">Our Activity</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 350,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container px-20"
        >
          <SwiperSlide className='w-5'>
            <Image alt='image' className='mx-auto' width={400} src={foto1}></Image>
          </SwiperSlide>
          <SwiperSlide className='w-5'>
            <Image alt='image' className='mx-auto' width={400} src={foto2}></Image>
          </SwiperSlide>
          <SwiperSlide className='w-5'>
            <Image alt='image' className='mx-auto' width={400} src={foto3}></Image>
          </SwiperSlide>
          <SwiperSlide className='w-5'>
            <Image alt='image' className='mx-auto' width={400} src={foto4}></Image>
          </SwiperSlide>
          <SwiperSlide className='w-5'>
            <Image alt='image' className='mx-auto' width={400} src={foto5}></Image>
          </SwiperSlide>
          <SwiperSlide className='w-5'>
            <Image alt='image' className='mx-auto' width={400} src={foto6}></Image>
          </SwiperSlide>
          <SwiperSlide className='w-5'>
            <Image alt='image' className='mx-auto' width={400} src={foto7}></Image>
          </SwiperSlide>
          <SwiperSlide className='w-5'>
            <Image alt='image' className='mx-auto' width={400} src={foto8}></Image>
          </SwiperSlide>

          <div className="slider-controler mt-14">
            <div className="swiper-button-prev slider-arrow">
              {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
            </div>
            <div className="swiper-button-next slider-arrow">
              {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
            </div>
            <div className="swiper-pagination mt-[180px]"></div>
          </div>
        </Swiper>
      </div>
    </section>
  )
}
