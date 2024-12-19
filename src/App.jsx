import Button from "../components/Button";

export default function App() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-base">
			<div className="p-8 shadow-lg bg-surface1">
				<h1 className="text-4xl font-extrabold text-text mb-4 text-center">
					Hello, World!
				</h1>
				<p className="text-subtext1 text-lg text-center">
					Welcome to your TailwindCSS setup with Catppuccin vibes.
				</p>
				<Button
					className="custom-class"
					onClick={() => alert("Button clicked!")}
				>
					Click Me
				</Button>
			</div>
		</div>
	);
}
