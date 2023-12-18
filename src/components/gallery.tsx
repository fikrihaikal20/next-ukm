"use client";
import Image from 'next/image';
import about from '../../public/about.png'
import { useState } from 'react';

export default function Gallery() {
    const [activeTab, setActiveTab] = useState(null);

    const handleBtn = (tab: string) => {
        setActiveTab(tab);
    }

    return (
        <div className='grid grid-cols-1 items-center h-full mb-20 w-full px-4 sm:px-20 2xl:px-16 mt-20'>
            <div>
                <h1 className='text-3xl font-bold text-center'>Gallery</h1>
                <p className='mt-4 w-[80%] text-center mx-auto '>Galeri ini merupakan jendela virtual yang membuka pintu kepada Anda untuk melihat lebih dekat ke dalam kehidupan dan kegiatan kami di dalam dan di luar kolam renang.</p>
            </div>
            <div className='text-center mt-4 w-full md:w-[70%] mx-auto'>
                <div className='border-[#C2D1D9] py-1 grid grid-cols-4 border rounded-md'>
                    <div
                        onClick={() => handleBtn('all')}
                        className={`text-sm cursor-pointer py-4 rounded-md ${activeTab === 'all' ? 'bg-[#0075B3] text-white' : ''}`}
                    >
                        ALL
                    </div>
                    <div
                        onClick={() => handleBtn('wallOfFame')}
                        className={`text-sm cursor-pointer py-4 rounded-md  ${activeTab === 'wallOfFame' ? 'bg-[#0075B3] text-white' : ''}`}
                    >
                        WALL OF FAME
                    </div>
                    <div
                        onClick={() => handleBtn('webinar')}
                        className={`text-sm cursor-pointer py-4 rounded-md ${activeTab === 'webinar' ? 'bg-[#0075B3] text-white' : ''}`}
                    >
                        WEBINAR
                    </div>
                    <div
                        onClick={() => handleBtn('kramsi')}
                        className={`text-sm cursor-pointer py-4 rounded-md ${activeTab === 'kramsi' ? 'bg-[#0075B3] text-white' : ''}`}
                    >
                        KRAMSI
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                <div>
                    <Image alt='image' src={about}></Image>
                </div>
                <div>
                    <Image alt='image' src={about}></Image>
                </div>
                <div>
                    <Image alt='image' src={about}></Image>
                </div>
                <div>
                    <Image alt='image' src={about}></Image>
                </div>
                <div>
                    <Image alt='image' src={about}></Image>
                </div>
                <div>
                    <Image alt='image' src={about}></Image>
                </div>
            </div>
        </div>
    );
}
