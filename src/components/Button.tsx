import { motion } from 'framer-motion';
import { Link } from 'wouter';

interface ButtonProps {
  text: string;
  redirect: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  ariaLabel?: string;
}

const Button = ({
  text,
  redirect,
  variant = 'primary',
  size = 'medium',
  className = '',
  ariaLabel = text,
}: ButtonProps) => {
  // Define styles based on variant
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white shadow-md hover:shadow-lg',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
  };

  // Define styles based on size
  const sizeStyles = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };

  const handleRedirect = () => {
    window.location.href = redirect;
  };
  return (
    <Link to={redirect}>
      <motion.button
        onClick={handleRedirect}
        className={`
          inline-flex items-center justify-center rounded-lg font-bold transition-all duration-300
          ${variantStyles[variant]} 
          ${sizeStyles[size]} 
          ${className}
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        `}
        aria-label={ariaLabel}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {text}
      </motion.button>
    </Link>
  );
};

export default Button;