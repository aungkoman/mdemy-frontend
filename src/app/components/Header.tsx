import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="https://yt3.googleusercontent.com/ytc/AIdro_lSzxs1_CPKjHoqUIc3HWU2U0HwVapayTuuk0OxUayG6zA=s160-c-k-c0x00ffffff-no-rj" 
            alt="Mdemy Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-xl font-bold text-gray-800">Mdemy</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-800 hover:text-blue-600">Home</Link>
          <Link href="/projects" className="text-gray-800 hover:text-blue-600">Projects</Link>
          <Link href="/about" className="text-gray-800 hover:text-blue-600">About</Link>
          <Link href="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link 
            href="https://github.com/mdemy" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600"
          >
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link 
            href="https://youtube.com/mdemy" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600"
          >
            <span className="sr-only">YouTube</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link 
            href="/login" 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}