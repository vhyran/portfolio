import MusicPlayer from './components/MusicPlayer';

function Main() {
	return (
		<div style={{ position: 'relative', minHeight: '100vh' }}>
			<div className="container mx-auto p-4 text-text text-center">
				<h1>Welcome to My Portfolio</h1>
				<p>This is an example template for my portfolio website.</p>
			</div>
			<div style={{ position: 'absolute', bottom: 0, left: 0 }}>
				<MusicPlayer />
			</div>
		</div>
	);
}

export default Main;
