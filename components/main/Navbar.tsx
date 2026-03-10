'use client'
import { Socials } from '@/constants';
import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10'>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
                <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
                    <Image
                        src='/NavLogo-removebg-preview.png'
                        alt='logo'
                        width={70}
                        height={70}
                        className='cursor-pointer hover:animate-slowspin h-[50px] w-auto object-contain'
                    />
                    <span className='font-bold ml-[10px] block text-gray-300'>
                        <span className='text-transparent pl-12 bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500'>Cyber</span><span>synapse</span>
                    </span>
                </a>

                {/* Desktop nav links */}
                <div className='hidden md:flex w-full max-w-[300px] lg:max-w-[500px] h-full flex-row items-center justify-between md:mr-4 lg:mr-20'>
                    <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[15px] lg:px-[20px] py-[8px] lg:py-[10px] rounded-full text-gray-200 text-[14px] lg:text-[16px]'>
                        <a href="#about-me" className='cursor-pointer hover:text-purple-400 transition-colors'>About</a>
                        <a href="#skills" className='cursor-pointer hover:text-purple-400 transition-colors'>Skills</a>
                        <a href="#projects" className='cursor-pointer hover:text-purple-400 transition-colors'>Projects</a>
                    </div>
                </div>

                {/* Desktop social icons */}
                <div className='hidden md:flex flex-row gap-3 lg:gap-5'>
                    {Socials.map((social) => (
                        <a
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={social.name}
                            title={social.name}
                            className='hover:scale-110 transition-transform'
                        >
                            <Image
                                src={social.src}
                                alt={social.name}
                                width={24}
                                height={24}
                                className='w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]'
                            />
                        </a>
                    ))}
                </div>

                {/* Mobile hamburger button */}
                <button
                    className='md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 cursor-pointer z-50'
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label='Toggle menu'
                >
                    <span className={`block w-6 h-[2px] bg-gray-300 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                    <span className={`block w-6 h-[2px] bg-gray-300 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-[2px] bg-gray-300 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </button>
            </div>

            {/* Mobile menu overlay */}
            <div className={`md:hidden fixed top-[65px] left-0 w-full bg-[#030014]/95 backdrop-blur-md border-t border-[#7042f861] transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className='flex flex-col items-center gap-6 py-8 text-gray-200'>
                    <a href="#about-me" className='text-lg cursor-pointer hover:text-purple-400 transition-colors' onClick={() => setIsOpen(false)}>About me</a>
                    <a href="#skills" className='text-lg cursor-pointer hover:text-purple-400 transition-colors' onClick={() => setIsOpen(false)}>Skills</a>
                    <a href="#projects" className='text-lg cursor-pointer hover:text-purple-400 transition-colors' onClick={() => setIsOpen(false)}>Projects</a>
                    <div className='flex flex-row gap-5 mt-4'>
                        {Socials.map((social) => (
                            <a
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={social.name}
                                title={social.name}
                            >
                                <Image
                                    src={social.src}
                                    alt={social.name}
                                    width={24}
                                    height={24}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
