import { motion } from 'framer-motion';
import { Link } from 'wouter';

function Navbar() {
	return (
		<motion.nav className="navbar fixed top-0 left-1/2 transform -translate-x-1/2 p-4 m-2">
			<ul className="flex space-x-4">
				<li>
					<Link to="/contact" className="text-text">
						Contact
					</Link>
				</li>
				<li>
					<Link to="/projects" className="text-text">
						Projects
					</Link>
				</li>
				<li>
					<Link to="/blogs" className="text-text">
						Blogs
					</Link>
				</li>
			</ul>
		</motion.nav>
	);
}

export default Navbar;
