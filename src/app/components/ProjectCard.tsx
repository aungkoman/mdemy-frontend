import Image from 'next/image'
import Link from 'next/link'

interface Project {
  id: number
  title: string
  description: string
  image: string
  demoUrl: string
  youtubeUrl: string
  githubUrl: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="h-48 relative">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          <Link 
            href={project.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Watch Tutorial
          </Link>
          <Link 
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Live Demo
          </Link>
          <Link 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Source Code
          </Link>
        </div>
      </div>
    </div>
  )
}