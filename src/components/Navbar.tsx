import { AnimatePresence, motion } from 'framer-motion';
import {
	FileText,
	GitPullRequest,
	Github,
	Home,
	Info,
	Linkedin,
	Mail,
	Menu,
	X,
} from 'lucide-react';
import { memo, useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';

const Navbar = () => {
	const [location] = useLocation();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const [isDesktop, setIsDesktop] = useState(true); // Track if it's desktop mode
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		setIsMounted(true);

		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 768); // Update based on screen size
		};

		// Check system theme on mount
		const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
		setIsDarkMode(matchMedia.matches);

		// Watch for system theme changes
		matchMedia.addEventListener('change', e => setIsDarkMode(e.matches));

		window.addEventListener('resize', handleResize);
		handleResize(); // Initialize screen size on mount

		return () => {
			window.removeEventListener('resize', handleResize);
			matchMedia.removeEventListener('change', e => setIsDarkMode(e.matches));
		};
	}, []);

	const toggleMobileMenu = useCallback(() => {
		setIsMobileMenuOpen(prev => !prev);
	}, []);

	const navLinks = [
		{ path: '/', label: 'Home', icon: <Home /> },
		{ path: '/about', label: 'About', icon: <Info /> },
		{ path: '/blogs', label: 'Blogs', icon: <FileText /> },
		{ path: '/contact', label: 'Contact', icon: <Mail /> },
		{ path: '/projects', label: 'Projects', icon: <GitPullRequest /> },
	];

	const socialLinks = [
		{
			href: 'https://github.com/vhyran',
			icon: <Github size={24} />,
			label: 'GitHub',
		},
		{
			href: 'https://linkedin.com',
			icon: <Linkedin size={24} />,
			label: 'LinkedIn',
		},
	];

	const navVariants = {
		hidden: { opacity: 0, y: -12 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: 'spring', stiffness: 80, damping: 12 },
		},
	};

	const linkVariants = {
		hidden: { opacity: 0, y: 24 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.07, type: 'spring', stiffness: 60 },
		}),
	};

	const socialVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: (i: number) => ({
			opacity: 1,
			scale: 1,
			transition: { delay: i * 0.1, type: 'spring', stiffness: 100 },
		}),
	};

	const mobileMenuVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: 'spring', stiffness: 80, damping: 10 },
		},
		exit: {
			opacity: 0,
			y: -20,
			transition: { duration: 0.3 },
		},
	};

	if (!isMounted) return null;

	// Determine background based on theme
	const bgColor = isDarkMode ? 'bg-black/80' : 'bg-white/80'; // 80% opacity for transparency

	return (
		<motion.nav
			className={`fixed top-4 left-4 right-4 mx-auto px-6 py-4 ${bgColor} backdrop-blur-lg shadow-xl z-50 max-w-5xl rounded-xl border border-neutral-700`}
			variants={navVariants}
			initial="hidden"
			animate="visible"
		>
			{/* Desktop */}
			{isDesktop && (
				<div className="flex justify-between items-center">
					<ul className="flex space-x-6">
						{navLinks.map((link, index) => (
							<motion.li
								key={link.path}
								custom={index}
								variants={linkVariants}
								initial="hidden"
								animate="visible"
							>
								<Link
									to={link.path}
									className={`flex items-center gap-2 text-gray-300 hover:text-purple-400 transition duration-200 ${
										location === link.path
											? 'font-semibold text-purple-400'
											: ''
									}`}
								>
									{link.icon}
									<span>{link.label}</span>
								</Link>
							</motion.li>
						))}
					</ul>
					<div className="flex gap-4">
						{socialLinks.map((link, index) => (
							<motion.a
								key={link.href}
								href={link.href}
								custom={index}
								variants={socialVariants}
								initial="hidden"
								animate="visible"
								className="text-gray-400 hover:text-purple-400 transition duration-200"
								target="_blank"
								rel="noopener noreferrer"
							>
								{link.icon}
							</motion.a>
						))}
					</div>
				</div>
			)}

			{/* Mobile Toggle */}
			<div className="md:hidden flex justify-between items-center">
				<motion.button
					onClick={toggleMobileMenu}
					className="text-gray-200"
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</motion.button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && !isDesktop && (
					<motion.div
						className={`absolute left-0 right-0 top-full ${bgColor} backdrop-blur-md py-8 rounded-b-xl z-40 flex flex-col items-center space-y-6`}
						variants={mobileMenuVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						<ul className="flex flex-col items-center space-y-6">
							{navLinks.map((link, index) => (
								<motion.li
									key={link.path}
									custom={index}
									variants={linkVariants}
									initial="hidden"
									animate="visible"
								>
									<Link
										to={link.path}
										onClick={toggleMobileMenu}
										className={`flex items-center gap-3 text-gray-300 hover:text-purple-400 transition duration-200 ${
											location === link.path
												? 'font-semibold text-purple-400'
												: ''
										}`}
									>
										{link.icon}
										<span>{link.label}</span>
									</Link>
								</motion.li>
							))}
						</ul>
						<div className="flex justify-center gap-8 pt-8">
							{socialLinks.map((link, index) => (
								<motion.a
									key={link.href}
									href={link.href}
									className="text-gray-400 hover:text-purple-400 transition duration-200"
									target="_blank"
									rel="noopener noreferrer"
									custom={index}
									variants={socialVariants}
									initial="hidden"
									animate="visible"
								>
									{link.icon}
								</motion.a>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
};

export default memo(Navbar);
