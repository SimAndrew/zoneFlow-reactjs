import { useEffect, useState } from 'react';

import { getThings, getAreas, type Thing, type Area } from './services/api';

import ZoneSection from './components/ZoneSection';

function App() {
	const [areas, setAreas] = useState<Area[]>([]);
	const [things, setThings] = useState<Thing[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				setError(null);
				const [areasData, thingsData] = await Promise.all([
					getAreas(),
					getThings(),
				]);
				setAreas(areasData);
				setThings(thingsData);
			} catch (err) {
				const errorMessage =
					err instanceof Error ? err.message : 'Failed to load data';
				setError(errorMessage);
				console.error('Error loading data:', err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return (
			<main className="min-h-screen bg-[#07142B] px-6 py-10 font-[600] text-white">
				<div className="mx-auto flex max-w-6xl items-center justify-center">
					<div className="text-xl text-[#E6EEFF]">Loading...</div>
				</div>
			</main>
		);
	}

	if (error) {
		return (
			<main className="min-h-screen bg-[#07142B] px-6 py-10 font-[600] text-white">
				<div className="mx-auto flex max-w-6xl items-center justify-center">
					<div className="text-xl text-red-400">Error: {error}</div>
				</div>
			</main>
		);
	}

	return (
		<main className="min-h-screen bg-[#07142B] px-6 py-10 font-[600] text-white">
			<div className="mx-auto flex max-w-6xl flex-col gap-10">
				{areas.map((area) => {
					const areaThings = things.filter((t) => t.areaId === area.areaId);
					return areaThings.length > 0 ? (
						<ZoneSection key={area.areaId} area={area} things={areaThings} />
					) : (
						// Показать только заголовок зоны, если нет вещей
						<section key={area.areaId}>
							<h2 className="mb-4 text-xl font-semibold text-[#E6EEFF]">
								{area.name}
							</h2>
						</section>
					);
				})}
			</div>
		</main>
	);
}

export default App;
