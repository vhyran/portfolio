import { motion } from 'framer-motion';

const Blogs = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<h1>Blogs</h1>
		</motion.div>
	);
};

export default Blogs;
