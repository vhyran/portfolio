import { motion } from 'framer-motion';

const Projects = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<h1 className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-text">
				Projects
			</h1>
		</motion.div>
	);
};

export default Projects;