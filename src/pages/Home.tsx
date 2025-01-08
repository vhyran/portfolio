import { motion } from 'framer-motion';
import MusicPlayer from '../components/MusicPlayer';

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<h1 className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-text">
				Home
			</h1>
			<div className="absolute bottom-0 p-2 m-2">
				<MusicPlayer />
			</div>
		</motion.div>
	);
};

export default About;
