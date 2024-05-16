import { Linkedin, Twitter, Github } from "lucide-react";
import Link from "next/link"

 export default function Footer() {
  return (
    <footer className="text-gray-800 py-8 dark:bg-gray-800 dark:text-gray-200 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Aadil's Portfolio</h3>
          <p className="text-gray-600 mt-2 font-bold dark:text-gray-400">Experience & Projects</p>
        </div>
        <nav className="flex items-center space-x-6">
          <Link
            className="text-gray-600 hover:text-gray-800 font-semibold transition-colors dark:text-gray-400 dark:hover:text-gray-200"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-800 font-semibold transition-colors dark:text-gray-400 dark:hover:text-gray-200"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-800 font-semibold transition-colors dark:text-gray-400 dark:hover:text-gray-200"
            href="#"
          >
            Projects
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-800 font-semibold transition-colors dark:text-gray-400 dark:hover:text-gray-200"
            href="#"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Link
            className="text-gray-600 hover:text-gray-800 font-semibold transition-colors dark:text-gray-400 dark:hover:text-gray-200"
            href="#"
            target="_blank"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-800 font-semibold transition-colors dark:text-gray-400 dark:hover:text-gray-200"
            href="#"
            target="_blank"
          >
            <Twitter className="h-6 w-6" />
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-800 font-semibold transition-colors dark:text-gray-400 dark:hover:text-gray-200"
            href="#"
            target="_blank"
          >
            <Github className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
 }
 