import ProjectCard from "./components/ProjectCard";


export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: 'School Management System',
      description: 'Complete system for managing students, teachers, classes, and grades',
      image: 'https://vecardigitalprogramming.com/wp-content/uploads/2024/07/school_mamagemeng_system_features.png',
      demoUrl: 'https://demo.mdemy.org/school',
      youtubeUrl: 'https://youtube.com/mdemy/school-management',
      githubUrl: 'https://github.com/mdemy/school-management'
    },
    {
      id: 2,
      title: 'Hospital Management System',
      description: 'End-to-end solution for patient records, appointments, and billing',
      image: 'https://sellbery.com/wp-content/uploads/2024/12/how-to-build-a-comprehensive-hospital-management.png',
      demoUrl: 'https://demo.mdemy.org/hospital',
      youtubeUrl: 'https://youtube.com/mdemy/hospital-management',
      githubUrl: 'https://github.com/mdemy/hospital-management'
    },
    // Add more projects as needed
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Learn by Building <span className="text-blue-600">Complete Projects</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Step-by-step tutorials from empty folder to full project. Perfect for students, 
          junior developers, and business owners.
        </p>
        <div className="mt-8">
          <a 
            href="#projects" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg mr-4 hover:bg-blue-700 transition"
          >
            Browse Projects
          </a>
          <a 
            href="https://youtube.com/mdemy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Watch on YouTube
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">How Mdemy Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="text-blue-600 text-4xl mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Watch Full Tutorial</h3>
            <p className="text-gray-600">
              Free complete project tutorial on YouTube from start to finish
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="text-blue-600 text-4xl mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Follow Along</h3>
            <p className="text-gray-600">
              Code along with the tutorial to build your own version
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="text-blue-600 text-4xl mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Get Source Code</h3>
            <p className="text-gray-600">
              Download complete source code for free or premium versions
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 rounded-lg text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of developers learning practical skills through complete project tutorials
        </p>
        <a 
          href="https://mdemy.org/projects" 
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          View All Projects
        </a>
      </section>
    </div>
  )
}