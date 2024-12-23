import Navbar from './components/Navbar';

function Main() {
	return (
		<>
			<Navbar />
			<div className="text-text fake-content p-6 pt-20">
				<h1 className="text-2xl font-bold mb-4">Welcome to the Page</h1>
				<p className="mb-4 ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et arcu
					vitae turpis malesuada elementum. Praesent auctor, nulla vel dictum
					ultricies, nisi magna sollicitudin purus, sed sagittis eros magna nec
					augue. Proin vehicula libero nec metus efficitur, at dignissim velit
					sollicitudin.
				</p>
				{[...Array(200)].map((_, index) => {
					const uniqueKey = `item-${index}-${Math.random().toString(36).substr(2, 9)}`;
					return (
						<p key={uniqueKey} className="mb-4">
							This is some placeholder content for scrolling. Item {index + 1}.
						</p>
					);
				})}
			</div>
		</>
	);
}

export default Main;
