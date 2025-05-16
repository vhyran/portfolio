import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Router, Switch } from 'wouter';

import './index.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

const AppRoutes = () => (
	<>
		<Navbar />
		<Switch>
			<Route path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/blogs" component={Blogs} />
			<Route path="/contact" component={Contact} />
			<Route path="/projects" component={Projects} />
			<Route component={NotFound} />
		</Switch>
	</>
);

const rootElement = document.getElementById('root');

if (!rootElement) {
	throw new Error('Failed to find the root element');
}

createRoot(rootElement).render(
	<StrictMode>
		<Router base="/">
			<AppRoutes />
		</Router>
	</StrictMode>,
);
