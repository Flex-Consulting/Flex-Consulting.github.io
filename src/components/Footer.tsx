import { Link } from 'react-router-dom';
import { Cloud, Linkedin, Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link to="/about/" className="hover:text-cyan-400 transition-colors">
              About Us
            </Link>
            <Link to="/services/" className="hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link to="/our-work/" className="hover:text-cyan-400 transition-colors">
              Our Work
            </Link>
            <Link to="/contact/" className="hover:text-cyan-400 transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Divider */}
          <div className="w-full max-w-md border-t border-slate-800"></div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/company/flex-consulting-services"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/flex-consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:info@flexconsulting.ca"
              className="hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md border-t border-slate-800"></div>

          {/* Copyright */}
          <p className="text-sm text-slate-400">
            &copy; {currentYear} Flex Consulting Solutions Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
