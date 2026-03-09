'use client'
import React from 'react'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
const SkillText = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={slideInFromTop}
                className='Welcome-box px-[8px] py-[4px] border border-[#7042f88b] opacity-[0.9]'
            >
                <SparklesIcon className='text-[#b49fff] mr-[10px] h-5 w-5' />
                <h1 className='Welcome-text text-[13px] '>Think better with ME</h1>
            </motion.div>
            <motion.div
                variants={slideInFromLeft(0.5)}
                className='text-[22px] md:text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
            >
                Making apps with modern technology
            </motion.div>
            <motion.div
                variants={slideInFromLeft(0.5)}
                className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
            >
                Never missed a task deadline or idea

            </motion.div>
        </div>
    )
}

export default SkillText