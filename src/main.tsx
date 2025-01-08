import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Router } from 'wouter';

import './index.css';
import Navbar from './components/Navbar';
import About from './pages/About.tsx';
import Blogs from './pages/Blogs.tsx';
import Contact from './pages/Contact.tsx';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router base="/">
			<Navbar />
			<Route path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/blogs" component={Blogs} />
			<Route path="/contact" component={Contact} />
			<Route path="/projects" component={Projects} />
		</Router>
	</StrictMode>,
);
