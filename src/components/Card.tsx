import { motion } from 'framer-motion';

interface CardProps {
	children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.div>
	);
};

export default Card;
