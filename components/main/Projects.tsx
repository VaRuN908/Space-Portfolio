import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className='relative z-30 flex flex-col items-center justify-center py-20'>
      <h1 className='text-[28px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-20'>
        ----:My Projects:----
      </h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="A sleek, server-side rendered portfolio leveraging Next.js App Router, dynamic routing, and optimized image delivery for a blazing-fast user experience."
          link="https://github.com/VaRuN908"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="A collection of reusable, animated card components built with Framer Motion and glassmorphism effects, designed for modern web interfaces."
          link="https://github.com/VaRuN908"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Cosmic Portfolio Framework"
          description="A high-performance, responsive web application built with React and Tailwind CSS. Featuring custom GLSL shaders for celestial backgrounds and a focus on secure front-end architecture."
          link="https://space-portfolio-lemon.vercel.app"
        />

      </div>

    </div>
  )
}

export default Projects