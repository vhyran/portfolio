import { motion } from 'framer-motion';

interface BannerProps {
	title: string;
	width: string;
	height: string;
	image?: string;
	color?: string;
}

export default function Banner({
	title,
	width,
	height,
	image,
	color,
}: BannerProps) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className=""
			style={{
				width,
				height,
				backgroundImage: `url(${image})`,
				backgroundColor: color,
			}}
		>
			{title}
		</motion.div>
	);
}
