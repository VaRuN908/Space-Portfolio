import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] relative z-[30]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">


                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        <a href="https://youtube.com/@varunbharadwaj3265?si=VOaXXF0m-0QdoPwU" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">Youtube</span>
                        </a>
                        <a href="https://github.com/VaRuN908" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </a>
                        <a href="https://discord.gg/S5EYhZgc" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </a>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <a href="https://www.instagram.com/the_varun_019?igsh=b3JscjB3bjF6aWUy" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                            <RxInstagramLogo />
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </a>
                        <a href="https://x.com/the_varun_019" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                            <RxTwitterLogo />
                            <span className="text-[15px] ml-[6px]">Twitter</span>
                        </a>
                        <a href="https://www.linkedin.com/in/varun-bharadwaj-646805291" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </a>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]"> Experience </span>
                        </p>
                        <a href="#about-me" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                            <span className="text-[15px] ml-[6px]">Learning about me</span>
                        </a>
                        <a href="mailto:thevaru019@gmail.com" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                            <span className="text-[15px] ml-[6px]">thevaru019@gmail.com</span>
                        </a>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Varun Bharadwaj 2025. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer 