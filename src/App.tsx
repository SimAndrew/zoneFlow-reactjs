import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThingsUseEffect from './pages/ThingsUseEffect';
import ThingsReactQuery from './pages/ThingsReactQuery';
import NavTabs from './components/NavTabs';

function App() {
	return (
		<BrowserRouter
			future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
		>
			<NavTabs />

			<Routes>
				<Route path="/use-effect" element={<ThingsUseEffect />} />
				<Route path="/react-query" element={<ThingsReactQuery />} />
				<Route path="*" element={<ThingsUseEffect />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
