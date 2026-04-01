'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import Image from 'next/image'
import { XMarkIcon } from '@heroicons/react/24/solid'
import ProjectCard from '../sub/ProjectCard'

const cyberProjects = [
    {
        src: '/advanced-recon-analysis-tool.jpeg',
        title: 'Advanced Recon & Analysis Tool',
        description:
            'Developed a comprehensive network analysis suite that bridges the gap between basic data flow and advanced intelligence. Features include multi-threaded port scanning, service version detection, and a visual dashboard for global vulnerability tracking.',
        // link: 'https://github.com/VaRuN908',
    },
    {
        src: '/phishing-detect-ai-threat-intel.jpeg',
        title: 'Phishing Detect: AI Threat Intel',
        description:
            "A multi-channel security platform leveraging AI to detect Phishing and Vishing attempts in real-time. Features include automated SMS/Link analysis, caller ID spoofing detection, and a 'Vishing Probability Score' driven by neural audio fingerprinting.",
        // link: 'https://space-portfolio-lemon.vercel.app',
    },
    {
        src: '/honey-bee-cyber-deception-suite.jpeg',
        title: 'Honey Bee: Cyber Deception Suite',
        description:
            'A high-interaction honeypot system developed in Go, designed to trap and analyze attacker behavior in real-time. Features include virtualized terminal sessions (PTY), keystroke logging, and AI-driven behavioral profiling to transform raw exploit data into actionable threat intelligence.',
        // link: 'https://github.com/VaRuN908',
    },
]

const Encryption = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        if (!isModalOpen) {
            return
        }

        const originalOverflow = document.body.style.overflow

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsModalOpen(false)
            }
        }

        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleEsc)

        return () => {
            document.body.style.overflow = originalOverflow
            window.removeEventListener('keydown', handleEsc)
        }
    }, [isModalOpen])

    return (
        <>
            <div
                className='flex flex-row relative items-center justify-center min-h-[40vh] md:min-h-[60vh] lg:min-h-screen w-full h-full'
            >
                <div
                    className='absolute w-auto h-auto top-0 z-[5] px-4'
                >
                    <motion.div
                        variants={slideInFromTop}
                        className='text-3xl md:text-[40px] font-medium text-center text-gray-200 py-5'
                    >
                        Performance <span className='text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500'>
                            {' '}
                            &{' '}
                        </span>
                        Security
                    </motion.div>
                </div>

                <div className='flex flex-col items-center justify-center translate-y-[-20px] md:translate-y-[-50px] absolute z-[20] w-auto h-auto px-4'>
                    <button
                        type='button'
                        onClick={() => setIsModalOpen(true)}
                        aria-label='Open cyber security projects'
                        aria-haspopup='dialog'
                        aria-expanded={isModalOpen}
                        aria-controls='cyber-project-modal'
                        className='flex flex-col items-center group cursor-pointer w-auto h-auto rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030014]'
                    >
                        <Image
                            src='/LockTop.png'
                            alt='Lock top'
                            width={50}
                            height={50}
                            className='translate-y-5 transition-all duration-200 group-hover:translate-y-11 group-focus-visible:translate-y-11'
                        />
                        <Image
                            src='/LockMain.png'
                            alt='Lock main'
                            width={70}
                            height={70}
                            className='z-10'
                        />
                    </button>

                    <div
                        className='Welcome-box px-[15px] py-[4px] z-[20] border mt-[20px] border-[#7048f88b] opacity-[0.9]'
                    >
                        <h1 className='Welcome-text text-[12px]'>Encryption</h1>
                    </div>

                    <p className='text-[11px] md:text-[13px] text-cyan-200/80 mt-2 text-center'>
                        Tap the lock to view cyber projects
                    </p>
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
                        src='/encryption.webm'
                    />
                </div>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        id='cyber-project-modal'
                        role='dialog'
                        aria-modal='true'
                        aria-label='Cyber security projects'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                        className='fixed inset-0 z-[120] bg-black/80 backdrop-blur-md p-3 md:p-6'
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.94, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.94, y: 20 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            onClick={(event) => event.stopPropagation()}
                            className='relative mx-auto w-full max-w-[1400px] max-h-[94vh] overflow-y-auto rounded-2xl border border-[#7048f88b] bg-[#090224]/95 shadow-[0_0_40px_rgba(112,66,248,0.35)]'
                        >
                            <button
                                type='button'
                                onClick={() => setIsModalOpen(false)}
                                aria-label='Close cyber project modal'
                                className='absolute right-3 top-3 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20'
                            >
                                <XMarkIcon className='h-5 w-5 md:h-6 md:w-6' />
                            </button>

                            <div className='px-4 pb-6 pt-12 md:px-8 md:pb-8 md:pt-14'>
                                <h2 className='text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                                    Cyber Projects Showcase
                                </h2>
                                <p className='mt-2 text-sm md:text-base text-gray-300 max-w-3xl'>
                                    Click any card to open the project link. You can directly replace these titles, images, and descriptions with your own cyber security work.
                                </p>

                                <div className='mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                                    {cyberProjects.map((project) => (
                                        <ProjectCard
                                            key={project.title}
                                            src={project.src}
                                            title={project.title}
                                            description={project.description}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Encryption
