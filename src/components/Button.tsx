import { motion } from 'framer-motion';
import { Link } from 'wouter';

interface ButtonProps {
	text: string;
	redirect: string;
}

const Button = ({ text, redirect }: ButtonProps) => {
	return (
		<motion.button className="bg-blue hover:bg-sapphire text-crust hover:text-crust font-bold py-2 px-4">
			<Link
				href={redirect}
				className="text-text hover:text-blue transition duration-300"
			>
				{text}
			</Link>
		</motion.button>
	);
};

export default Button;
