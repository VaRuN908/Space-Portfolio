'use client'
import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/solid'

interface Props {
    certificateUrl: string;
    onClose: () => void;
}

const CertificateModal = ({ certificateUrl, onClose }: Props) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative max-w-4xl w-full max-h-[95vh] min-h-[500px] bg-transparent backdrop-blur-sm border border-[#7042f861] rounded-2xl overflow-y-auto shadow-[0_0_50px_rgba(112,66,248,0.3)] cursor-default flex flex-col items-center pt-20 px-8 pb-8"
                >
                    <button
                        onClick={onClose}
                        title="Close Modal"
                        className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors group"
                    >
                        <XMarkIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </button>

                    <div className="w-full flex justify-center items-center flex-1">
                        <Image
                            src={certificateUrl}
                            alt="Certificate"
                            width={1200}
                            height={800}
                            className="w-auto h-auto max-h-[80vh] rounded-xl object-contain border border-white/5"
                            priority
                        />
                    </div>

                    <div className="p-6 text-center">
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
                            Professional Certification
                        </h2>
                        <p className="text-gray-400 mt-2 text-sm italic">
                            Click anywhere outside or on the close button to return
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default CertificateModal
