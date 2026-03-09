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
            className='flex flex-col md:flex-row items-center justify-start px-6 md:px-[100px] mt-[100px] md:mt-[150px] w-full z-20'
        >
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start'>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromTop}
                    className='Welcome-box px-[8px] py-[4px] border border-[#7042f88b] opacity-[0.9]'
                >
                    <SparklesIcon className='text-[#b49fff] mr-[10px] h-5 w-5' />
                    <h1 className='Welcome-text text-[13px] '>Fullstack Developer Portfolio</h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 text-3xl md:text-5xl font-bold text-white max-w-[600px] w-auto h-auto'
                >
                    <span>
                        Providing <span className='text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500'> the best </span>
                        project exprience
                    </span>
                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-base md:text-lg text-gray-400 my-5 max-w-[600px]'
                >
                    I&apos;m a Full Stack Software Engineer with experience in Website, Mobile, and Software development. Check out my projects and skills.
                </motion.p>
                <motion.a
                    variants={slideInFromLeft(1.0)}
                    className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto md:mx-0'
                >
                    Learn More!
                </motion.a>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full h-full flex justify-center items-center'
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    width={650}
                    height={650}
                />
            </motion.div>
        </motion.div>
    )
}

export default HeroContent