import { useQuery } from '@tanstack/react-query';
import { getThings, getAreas, type Thing, type Area } from '../services/api';
import ZoneSection from '../components/ZoneSection';

function ThingsReactQuery() {
	const {
		data: areas,
		isLoading: areasLoading,
		error: areasError,
	} = useQuery<Area[], Error>({
		queryKey: ['areas'],
		queryFn: getAreas,
	});

	const {
		data: things,
		isLoading: thingsLoading,
		error: thingsError,
	} = useQuery<Thing[], Error>({
		queryKey: ['things'],
		queryFn: getThings,
	});

	if (areasLoading || thingsLoading) {
		return (
			<main className="min-h-screen bg-[#07142B] px-6 py-10 font-[600] text-white">
				<div className="mx-auto flex max-w-6xl items-center justify-center">
					<div className="text-xl text-[#E6EEFF]">Loading...</div>
				</div>
			</main>
		);
	}

	if (areasError || thingsError) {
		return (
			<main className="min-h-screen bg-[#07142B] px-6 py-10 font-[600] text-white">
				<div className="mx-auto flex max-w-6xl items-center justify-center">
					<div className="text-xl text-red-400">
						Error: {areasError?.message || thingsError?.message}
					</div>
				</div>
			</main>
		);
	}

	return (
		<main className="min-h-screen bg-[#07142B] px-6 py-10 font-[600] text-white">
			<div className="mx-auto flex max-w-6xl flex-col gap-10">
				{areas?.map((area) => {
					const areaThings =
						things?.filter((t) => t.areaId === area.areaId) || [];
					return areaThings.length > 0 ? (
						<ZoneSection key={area.areaId} area={area} things={areaThings} />
					) : (
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

export default ThingsReactQuery;
