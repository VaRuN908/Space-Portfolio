"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className='flex flex-col lg:flex-row items-center justify-center px-5 md:px-[100px] mt-20 md:mt-[150px] w-full z-20 gap-10'
        >
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-center lg:text-start items-center lg:items-start bg-[#030014]/60 lg:bg-transparent p-6 lg:p-0 rounded-3xl lg:rounded-none'>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromTop}
                    className='Welcome-box px-[8px] py-[4px] border border-[#7042f88b] opacity-[0.9] flex items-center justify-center lg:justify-start'
                >
                    <SparklesIcon className='text-[#b49fff] mr-[10px] h-5 w-5' />
                    <h1 className='Welcome-text text-[13px] '>Application Security Engineer</h1>
                </motion.div>
                <div
                    className='flex flex-col gap-6 mt-6 text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto animate-slide-in-left'
                >
                    <span className='leading-tight text-5xl'>
                        Architecting resilient <span className='text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500'>applications and </span>
                        securing the App.
                    </span>
                </div>
                <motion.p
                    variants={slideInFromLeft(0.1)}
                    className='text-base md:text-lg text-gray-400 my-5 max-w-[600px]'
                >
                    I engineer high-performance software with a security-first mindset. From robust backend infrastructure to hardened frontend interfaces, I build digital ecosystems that are designed to withstand modern threats.
                </motion.p>
                <motion.a
                    variants={slideInFromLeft(0.2)}
                    className='py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
                >
                    Access The Core!
                </motion.a>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full h-full flex justify-center items-center opacity-50 md:opacity-100 mt-5 md:mt-0'
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    width={650}
                    height={650}
                    priority
                    className='w-full max-w-[400px] md:max-w-full'
                />
            </motion.div>
        </motion.div>
    )
}

export default HeroContent