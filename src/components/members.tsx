"use client"
import Image from 'next/image'
import dicky from '../../public/dicky.svg'
import Ketua from '../../public/ketua.svg'
import wakil from '../../public/wakil.svg'
import Bendahara2 from '../../public/bendahara2.svg'
import Bendahara1 from '../../public/bendahara1.svg'
import Sekertaris1 from '../../public/sekertaris1.svg'
import Sekertaris2 from '../../public/sekertaris2.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Members() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 640, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablet breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='grid grid-cols-1 items-center  h-full w-full px-4 sm:px-20 2xl:px-16 mt-20' id='member'>
      <div>
        <h1 className="text-3xl font-bold text-center mb-10">Our Members</h1>
        <div>
          <button type="button" className="slick-prev">Previous</button>
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.nama} className=" h-[450px] rounded-xl">
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <Image alt='image' src={d.img}></Image>
                  <p className="text-xl font-semibold">{d.nama}</p>
                  <p className="text-center">{d.jabatan}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>

  )
}

const data = [
  {
    nama: `Raihan Salsabila`,
    img: Ketua,
    jabatan: `ketua`
  },
  {
    nama: `Naufal Nur Islami`,
    img: wakil,
    jabatan: `Wakil Ketua`
  },
  {
    nama: `Putri Shaina S`,
    img: Sekertaris1,
    jabatan: `Sekertaris I`
  },
  {
    nama: `Hagyana Allysa S`,
    img: Sekertaris2,
    jabatan: `Sekertaris II`
  },
  {
    nama: `Nabila Karimah`,
    img: Bendahara1,
    jabatan: `Bendahara I`
  },
  {
    nama: `Adellia Febbyanti P`,
    img: Bendahara2,
    jabatan: `Bendahara II`
  },

];
