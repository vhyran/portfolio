import { useEffect, useState } from 'react';

function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="bg-base text-text min-h-screen container mx-auto">
			<div className="navbar fixed top-0 left-0 w-full bg-base shadow-md flex flex-col z-50">
				<div className="flex justify-between items-center p-4">
					<div className="navbar-left flex items-center space-x-4">
						<div className="logo font-bold text-lg">Logo</div>
						<div className="name font-medium flex space-x-4">
							{scrolled ? (
								<>
									<a href="#home" className="hover:underline">
										Home
									</a>
									<a href="#contact" className="hover:underline">
										Contact
									</a>
									<a href="#projects" className="hover:underline">
										Projects
									</a>
								</>
							) : (
								'Vhyran'
							)}
						</div>
					</div>
					<div className="navbar-right flex items-center space-x-4">
						<div className="dev">Protfolio</div>
						<div className="search">
							<i className="fa-solid fa-house" />
						</div>
					</div>
				</div>
				<hr className="border-surface2" />
			</div>
		</div>
	);
}

export default Navbar;
