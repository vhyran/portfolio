import { motion } from 'framer-motion';

export default function About() {
	return (
		<motion.div
			className="flex items-center justify-center min-h-screen bg-background"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<h1 className="text-6xl font-bold text-text">About</h1>
		</motion.div>
	);
}
