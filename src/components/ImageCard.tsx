import { motion, useReducedMotion } from 'framer-motion';

interface Props {
	images: string;
	title: string;
	description: string;
	width: string;
	hight: string;
}

const ImageCard = ({ images, title, description, width, hight }: Props) => {
	const shouldReduceMotion = useReducedMotion();

	return (
		<div
			className="relative p-4 border rounded shadow-md overflow-hidden group"
			style={{ width, height: hight }}
		>
			<div
				style={{ backgroundImage: `url(${images})`, backgroundSize: 'cover' }}
				className="absolute inset-0 bg-center"
				aria-label={title}
			/>
			<motion.div className="absolute inset-0 bg-crust bg-opacity-50 flex flex-col justify-end items-center text-center text-text p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
				<motion.h2
					className="text-xl font-bold mb-2"
					initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
				>
					{title}
				</motion.h2>
				<motion.p
					className="text-subtext1"
					initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
				>
					{description}
				</motion.p>
			</motion.div>
		</div>
	);
};

export default ImageCard;
