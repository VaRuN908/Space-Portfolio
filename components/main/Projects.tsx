import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className='relative z-30 flex flex-col items-center justify-center py-20'>
      <h1 className='text-[28px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-20'>
        ----:My Projects:----
      </h1>
      <div className='h-full w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-6 md:px-10'>
        {/* link disabled: https://github.com/VaRuN908 */}
        <ProjectCard
          src="/cards-project1.png"
          title="Founder Networking"
          description="A professional networking platform designed for founders and creators. Built with a focus on intent-based connections, featuring a custom authentication system and a high-performance landing page developed in React."
        />
        {/* link disabled: https://space-portfolio-lemon.vercel.app */}
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Cosmic Portfolio Framework"
          description="A high-performance, responsive web application built with React and Tailwind CSS. Featuring custom GLSL shaders for celestial backgrounds and a focus on secure front-end architecture."
        />
        {/* link disabled: https://github.com/VaRuN908 */}
        <ProjectCard
          src="/cards-project3.png"
          title="NavitechSecure: Enterprise Auth"
          description="A robust authentication service built for enterprise environments, featuring multi-factor authentication, role-based access control, and secure session management."
        />
        {/* link disabled: https://github.com/VaRuN908 */}
        <ProjectCard
          src="/vibe-react.png"
          title="VibeLinkr: Find Your Vibe"
          description="The best way to connect founders, creators, and professionals through mindset, intent, and goals. Built to turn networking into real alignment and meaningful momentum."
        />
        <ProjectCard
          src="/background2.png"
          title="Indiano Cafe: Celebrate Your Break"
          description="A responsive cafe website experience designed around rich visual storytelling, clear navigation, and strong call-to-actions for better customer engagement and menu discovery."
        />
        <ProjectCard
          src="/smart-city-operations-hub.png"
          title="Smart City Operations Hub"
          description="An IoT command dashboard for mobility intelligence, real-time throughput tracking, incident monitoring, and city-service health insights through live operational analytics."
        />
        <ProjectCard
          src="/name-entity-recognition.png"
          title="Name Entity Recognition"
          description="An NLP-powered entity extraction interface that lets users upload PDF, DOCX, CSV, or text inputs and instantly analyze, classify, and highlight named entities for faster document intelligence."
        />
        <ProjectCard
          src="/suraksha-smart-surveillance.png"
          title="Suraksha Deskboard: Smart Surveillance"
          description="A smart surveillance control platform built to help reduce crime through centralized camera management. It supports RTSP camera onboarding, indoor/outdoor camera tagging, request tracking, and real-time monitoring workflows for faster incident response."
        />

      </div>

    </div>
  )
}

export default Projects
