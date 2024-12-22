import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="min-h-screen bg-base text-text flex flex-col justify-center items-center">
			<main className="text-center px-4">
				<h1 className="text-5xl font-extrabold text-pink mb-8 animate__animated animate__fadeIn">
					Welcome to Vite + React!
				</h1>
				<p className="text-xl text-text mb-12 animate__animated animate__fadeIn">
					Build fast and modern web applications with Vite and React.
				</p>
				<div className="card p-8 bg-surface0 rounded-lg shadow-xl transition-transform transform hover:scale-105">
					<button
						type="button"
						className="bg-surface1 text-white px-6 py-3 rounded-full hover:bg-surface2 transition-all duration-300 ease-in-out"
						onClick={() => setCount(count => count + 1)}
					>
						Count: {count}
					</button>
					<p className="mt-4 text-subtext1">
						Edit{' '}
						<code className="bg-surface1 px-2 py-1 rounded">src/App.tsx</code>{' '}
						and save to test Hot Module Replacement (HMR).
					</p>
				</div>
			</main>
		</div>
	);
}

export default App;
