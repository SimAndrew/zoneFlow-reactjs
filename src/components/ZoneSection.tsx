import React from 'react';

import type { Thing, Area } from '../services/api';
import SpotCard from './SpotCard';

interface ZoneSectionProps {
	area: Area;
	things: Thing[];
}

const ZoneSection: React.FC<ZoneSectionProps> = React.memo(
	({ area, things }) => {
		if (area.areaId === 1791) {
			const row1Skus = ['3', '1', '4', '12', '6', '13', '8', '10', '11'];
			const row2Skus = ['9', '7', '5', '15', '16'];
			const row1 = row1Skus
				.map((sku) => things.find((t) => t.sku === sku))
				.filter(Boolean) as Thing[];
			const row2 = row2Skus
				.map((sku) => things.find((t) => t.sku === sku))
				.filter(Boolean) as Thing[];
			if (row1.length === 0 && row2.length === 0) return null;
			return (
				<section>
					<h2 className="mb-4 text-xl font-semibold text-[#E6EEFF]">
						{area.name}
					</h2>
					<div className="flex flex-col gap-4">
						{row1.length > 0 && (
							<div className="flex flex-wrap gap-4">
								{row1.map((thing) => (
									<SpotCard key={thing.id} thing={thing} />
								))}
							</div>
						)}
						{row2.length > 0 && (
							<div className="flex flex-wrap gap-4">
								{row2.map((thing) => (
									<SpotCard key={thing.id} thing={thing} />
								))}
							</div>
						)}
					</div>
				</section>
			);
		}
		const sortedThings = [...things].sort((a, b) => {
			const aNum = parseInt(a.sku, 10);
			const bNum = parseInt(b.sku, 10);
			if (!isNaN(aNum) && !isNaN(bNum)) return aNum - bNum;
			if (!isNaN(aNum)) return -1;
			if (!isNaN(bNum)) return 1;
			return a.sku.localeCompare(b.sku, undefined, {
				numeric: true,
				sensitivity: 'base',
			});
		});
		if (sortedThings.length === 0) return null;
		return (
			<section>
				<h2 className="mb-4 text-xl font-semibold text-[#E6EEFF]">
					{area.name}
				</h2>
				<div className="flex flex-wrap gap-4">
					{sortedThings.map((thing) => (
						<SpotCard key={thing.id} thing={thing} />
					))}
				</div>
			</section>
		);
	},
);

export default ZoneSection;
