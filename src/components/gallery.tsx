
import Image from 'next/image'

export default function Gallery() {
    return (
        <div className='grid grid-cols-1 items-center h-full w-full px-4 sm:px-20 2xl:px-16 mt-20'>
            <div>
                <h1 className='text-3xl font-bold text-center'>Gallery</h1>
                <p className='mt-4 w-[80%] text-center mx-auto '>Galeri ini merupakan jendela virtual yang membuka pintu kepada Anda untuk melihat lebih dekat ke dalam kehidupan dan kegiatan kami di dalam dan di luar kolam renang.</p>

            </div>
            <div className='text-center'>
                <div className='border-black flex border'>
                    <div>ALL</div>
                    <div>WALL OF FAME</div>
                    <div>WEBINAR</div>
                    <div>KRAMSI</div>
                </div>
            </div>

        </div>
    )
}