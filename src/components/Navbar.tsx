import { motion } from 'framer-motion';
import { Link, useLocation } from 'wouter';

function Navbar() {
	const [location] = useLocation();

	return (
		<motion.nav className="navbar fixed top-0 left-1/2 transform -translate-x-1/2 px-6 mx-4 p-4 m-2 bg-gray-100 dark:bg-gray-800 z-50">
			<ul className="flex space-x-4">
				{location !== '/' && (
					<li>
						<Link
							to="/"
							className="text-text hover:text-blue transition duration-300"
						>
							Home
						</Link>
					</li>
				)}
				{location !== '/about' && (
					<li>
						<Link
							to="/about"
							className="text-text hover:text-blue transition duration-300"
						>
							About
						</Link>
					</li>
				)}
				{location !== '/blogs' && (
					<li>
						<Link
							to="/blogs"
							className="text-text hover:text-blue transition duration-300"
						>
							Blogs
						</Link>
					</li>
				)}
				{location !== '/contact' && (
					<li>
						<Link
							to="/contact"
							className="text-text hover:text-blue transition duration-300"
						>
							Contact
						</Link>
					</li>
				)}
				{location !== '/projects' && (
					<li>
						<Link
							to="/projects"
							className="text-text hover:text-blue transition duration-300"
						>
							Projects
						</Link>
					</li>
				)}
			</ul>
		</motion.nav>
	);
}

export default Navbar;
