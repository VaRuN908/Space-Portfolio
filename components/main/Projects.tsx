import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className='relative z-30 flex flex-col items-center justify-center py-20'>
      <h1 className='text-[28px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-20'>
        ----:My Projects:----
      </h1>
      <div className='h-full w-full flex flex-col lg:flex-row gap-10 px-10'>
        <ProjectCard
          src="/cards-project1.png"
          title="VibeLinkr: Founder Networking"
          description="A professional networking platform designed for founders and creators. Built with a focus on intent-based connections, featuring a custom authentication system and a high-performance landing page developed in React."
          link="https://github.com/VaRuN908"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Cosmic Portfolio Framework"
          description="A high-performance, responsive web application built with React and Tailwind CSS. Featuring custom GLSL shaders for celestial backgrounds and a focus on secure front-end architecture."
          link="https://space-portfolio-lemon.vercel.app"
        />
        <ProjectCard
          src="/cards-project3.png"
          title="NavitechSecure: Enterprise Auth"
          description="A robust authentication service built for enterprise environments, featuring multi-factor authentication, role-based access control, and secure session management."
          link="https://github.com/VaRuN908"
        />

      </div>

    </div>
  )
}

export default Projects