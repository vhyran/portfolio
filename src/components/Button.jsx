export default function Button({ children, className, ...props }) {
	return (
		<button
			type="button"
			className={`px-6 py-2 bg-blue-500 text-base font-medium shadow hover:bg-blue-400 transition-all ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
