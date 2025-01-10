import { motion } from 'framer-motion';
import Button from '../components/Button';
import MusicPlayer from '../components/MusicPlayer';

const Home = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<h1 className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-text">
				Home
			</h1>
			<div className="">
				<div className="absolute bottom-0 left-0 p-2 m-2">
					<MusicPlayer />
				</div>
				<div className="absolute bottom-0 right-0 p-2 m-2">
					<Button text="About" redirect="/about" />
				</div>
			</div>
		</motion.div>
	);
};

export default Home;
