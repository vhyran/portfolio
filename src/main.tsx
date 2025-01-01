import { Theme, ThemePanel } from '@radix-ui/themes';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@radix-ui/themes/styles.css';
import 'index.css';
import App from './App.tsx';

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Theme accentColor="amber" grayColor="sand">
			<App />
			<ThemePanel />
		</Theme>
	</StrictMode>,
);
