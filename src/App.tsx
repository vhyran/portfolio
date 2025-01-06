import ImageCard from './components/ImageCard';
function Main() {
	return (
		<>
			<ImageCard
				images="https://s2.onimanga.com/scans/60a5c716f2d3df2b3280cb6e/31/8.webp"
				title="Title"
				description="Description"
				width="200px"
				hight="300px"
				isOpen={false}
			/>
			<div className="container mx-auto p-4 text-text text-center">
				<h1>Welcome to My Portfolio</h1>
				<p>This is an example template for my portfolio website.</p>
			</div>
		</>
	);
}

export default Main;
