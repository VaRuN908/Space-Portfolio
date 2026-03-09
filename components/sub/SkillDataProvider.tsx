'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
    certificate?: string;
    onCertificateClick?: (url: string) => void;
}
const SkillDataProvider = ({ src, width, height, index, certificate, onCertificateClick }: Props) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    const imageVariants = {
        hidden: {
            opacity: 0
        },
        visible: { opacity: 1 }
    }
    const animationDelay = 0.3
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
            onClick={() => certificate && onCertificateClick?.(certificate)}
            className={`flex items-center justify-center ${certificate ? 'cursor-pointer hover:scale-110 transition-transform active:scale-95' : ''}`}
        >
            <Image
                src={src}
                alt="skill Image"
                width={width}
                height={height}
                className="object-contain"
            />
        </motion.div>
    )
}

export default SkillDataProvider