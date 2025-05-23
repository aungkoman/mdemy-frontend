import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mdemy</h3>
            <p className="text-gray-400">
              Learn by building complete projects with step-by-step tutorials.
            </p>
          </div>
          <div>
              
            <ul className="space-y-2">
                <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              {/* <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li> */}
              <li><a href="/projects" className="text-gray-400 hover:text-white">Projects</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://youtube.com/mdemy" className="text-gray-400 hover:text-white">YouTube</a></li>
              <li><a href="https://github.com/mdemy" className="text-gray-400 hover:text-white">GitHub</a></li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li><a href="/docs" className="text-gray-400 hover:text-white">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="/refund" className="text-gray-400 hover:text-white">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mdemy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}