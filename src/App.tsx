import MusicPlayer from './components/MusicPlayer';
import Navbar from './components/Navbar';

function Main() {
	return (
		<>
			<Navbar />
			<div className="relative min-h-screen p-5 m-5">
				<div className="container mx-auto p-4 text-center flex flex-col items-center justify-center text-text">
					<h1>Welcome to My Portfolio</h1>
					<p>This is an example template for my portfolio website.</p>
				</div>
				<div className="absolute bottom-0 left-0">
					<MusicPlayer />
				</div>
			</div>
		</>
	);
}

export default Main;
