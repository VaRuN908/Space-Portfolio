'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import Image from 'next/image'
const encryption = () => {
    return (
        <div
            className='flex flex-row relative items-center justify-center min-h-[40vh] md:min-h-[60vh] lg:min-h-screen w-full h-full'
        >
            <div
                className='absolute w-auto h-auto top-0 z-[5]'
            >
                <motion.div
                    variants={slideInFromTop}
                    className='text-3xl md:text-[40px] font-medium text-center text-gray-200 py-5'
                >
                    Performance <span className='text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500'>
                        {" "}
                        &{" "}
                    </span>
                    Security
                </motion.div>
            </div>
            <div className='flex flex-col items-center justify-center translate-y-[-20px] md:translate-y-[-50px] absolute z-[20] w-auto h-auto px-4'>
                <div
                    className='flex flex-col items-center group cursor-pointer w-auto h-auto'
                >
                    <Image
                        src="/LockTop.png"
                        alt="Lock top"
                        width={50}
                        height={50}
                        className=" translate-y-5 transition-all duration-200 group-hover:translate-y-11"
                    />
                    <Image
                        src="/LockMain.png"
                        alt="Lock main"
                        width={70}
                        height={70}
                        className=" z-10"
                    />
                </div>

                <div
                    className='Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7048f88b] opacity-[0.9]'
                >
                    <h1 className='Welcome-text text-[12px]'>Encryption</h1>
                </div>
            </div>
            <div className='absolute z-[20] bottom-[10px] px-[5px] w-full flex justify-center'>
                <div
                    className='cursive text-base md:text-[20px] font-medium text-center text-gray-300 max-w-[90vw]'
                >
                    Secure your data with end - to - end encryption

                </div>
            </div>
            <div
                className='w-full flex items-start justify-center absolute pointer-events-none'
            >
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload='false'
                    className='w-full h-full'
                    src="/encryption.webm"
                />
            </div>

        </div>
    )
}

export default encryption