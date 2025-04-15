import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { memo } from 'react';
import { FaBars, FaBlog, FaEnvelope, FaGithub, FaHome, FaInfoCircle, FaLinkedin, FaProjectDiagram, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'wouter';

const Navbar = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Navigation links
  const navLinks = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/about', label: 'About', icon: <FaInfoCircle /> },
    { path: '/blogs', label: 'Blogs', icon: <FaBlog /> },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope /> },
    { path: '/projects', label: 'Projects', icon: <FaProjectDiagram /> },
  ];

  // Social links
  const socialLinks = [
    { href: 'https://github.com/vhyran', icon: <FaGithub size={28} />, label: 'GitHub' },
    { href: 'https://linkedin.com', icon: <FaLinkedin size={28} />, label: 'LinkedIn' },
  ];

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3, ease: 'easeOut' },
    }),
  };

  const socialVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.3, ease: 'easeOut' },
    }),
  };

  const mobileMenuVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: {
      x: '-100%',
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    hover: {
      scale: 1.2,
      color: '#fbbf24', // Brighter amber
      transition: { duration: 0.2 },
    },
  };

  if (!isMounted) return null;

  return (
    <motion.nav
      className="fixed top-4 left-4 right-4 mx-auto px-6 py-3 bg-void bg-opacity-90 shadow-md z-50 max-w-5xl backdrop-blur-sm"
      style={{
        boxShadow: '0 8px 32px rgba(30, 64, 175, 0.2), 0 0 15px rgba(245, 158, 11, 0.1)', // Sapphire and amber glow
      }}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center justify-between">
        <ul className="flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.path}
              custom={index}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
            >
              <Link to={link.path}>
                <motion.a
                  className={`flex items-center space-x-2 text-pearl hover:text-sapphire transition-colors duration-300 ${
                    location === link.path ? 'font-semibold text-sapphire border-b-2 border-sapphire' : ''
                  }`}
                  whileHover={{ y: -3, filter: 'brightness(1.2)' }}
                  whileTap={{ scale: 0.95 }}
                  href={link.path}
                  aria-current={location === link.path ? 'page' : undefined}
                  onFocus={(e) => e.target.classList.add('ring-2', 'ring-sapphire', 'ring-offset-2')}
                  onBlur={(e) => e.target.classList.remove('ring-2', 'ring-sapphire', 'ring-offset-2')}
                >
                  <motion.span
                    className="text-amber"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    {link.icon}
                  </motion.span>
                  <span>{link.label}</span>
                </motion.a>
              </Link>
            </motion.li>
          ))}
        </ul>
        <div className="flex space-x-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              custom={index}
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              className="text-amber hover:text-sapphire transition-colors duration-300 p-2"
              whileHover={{ scale: 1.1, boxShadow: '0 0 8px rgba(30, 64, 175, 0.4)' }}
              whileTap={{ scale: 0.9 }}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center justify-between">
        <motion.button
          onClick={toggleMobileMenu}
          className="text-pearl focus:outline-none"
          whileHover={{ rotate: 90, color: '#fbbf24' }}
          whileTap={{ scale: 0.9 }}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-14 left-0 right-0 bg-void bg-opacity-90 shadow-md backdrop-blur-sm"
            style={{
              boxShadow: '0 8px 32px rgba(30, 64, 175, 0.2), 0 0 15px rgba(245, 158, 11, 0.1)', // Sapphire and amber glow
            }}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col items-center space-y-6 py-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link to={link.path} onClick={toggleMobileMenu}>
                    <motion.a
                      className={`flex items-center space-x-2 text-pearl hover:text-sapphire transition-colors duration-300 ${
                        location === link.path ? 'font-semibold text-sapphire border-b-2 border-sapphire' : ''
                      }`}
                      whileHover={{ x: 5, filter: 'brightness(1.2)' }}
                      whileTap={{ scale: 0.95 }}
                      href={link.path}
                      aria-current={location === link.path ? 'page' : undefined}
                      onFocus={(e) => e.target.classList.add('ring-2', 'ring-sapphire', 'ring-offset-2')}
                      onBlur={(e) => e.target.classList.remove('ring-2', 'ring-sapphire', 'ring-offset-2')}
                    >
                      <motion.span
                        className="text-amber"
                        variants={iconVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                      >
                        {link.icon}
                      </motion.span>
                      <span>{link.label}</span>
                    </motion.a>
                  </Link>
                </motion.li>
              ))}
              <motion.div
                className="flex space-x-6 pt-4"
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                custom={navLinks.length}
              >
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-amber hover:text-sapphire transition-colors duration-300 p-1"
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default memo(Navbar);