import React from 'react'
import Image from 'next/image'

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  const CardWrapper = link ? 'a' : 'div';
  const wrapperProps = link
    ? { href: link, target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className='group block relative overflow-hidden rounded-xl border border-[#2A0E61] bg-white/3 backdrop-blur-sm
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(112,66,248,0.3)]'
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}

        className='w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]'
      />
      <div className='relative p-4'>
        <h1 className='text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-purple-400'>
          {title}
        </h1>
        <p className='mt-2 text-gray-400 text-sm leading-relaxed'>{description}</p>
      </div>
    </CardWrapper>
  );
}

export default ProjectCard