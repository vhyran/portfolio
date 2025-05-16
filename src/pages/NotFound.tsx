import type React from 'react';
import { Link } from 'wouter';

const NotFound: React.FC = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
				textAlign: 'center',
				padding: '0 20px',
			}}
		>
			<h1 style={{ fontSize: '120px', margin: '0', color: '#333' }}>404</h1>
			<h2 style={{ fontSize: '32px', margin: '0 0 20px', color: '#555' }}>
				Page Not Found
			</h2>
			<p style={{ fontSize: '18px', marginBottom: '30px', color: '#666' }}>
				The page you are looking for doesn't exist or has been moved.
			</p>
			<Link
				to="/"
				style={{
					padding: '12px 24px',
					backgroundColor: '#3498db',
					color: 'white',
					textDecoration: 'none',
					borderRadius: '5px',
					fontSize: '16px',
					transition: 'background-color 0.3s',
				}}
			>
				Go Back Home
			</Link>
		</div>
	);
};

export default NotFound;
