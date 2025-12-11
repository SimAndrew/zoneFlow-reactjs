import React from 'react';
import type { Thing } from '../services/api';

type AccentColor = 'yellow' | 'orange' | 'red' | 'none';

const accentColors: Record<Exclude<AccentColor, 'none'>, string> = {
	yellow: '#F0D35A',
	orange: '#FF982D',
	red: '#F25A5A',
};

interface SpotCardProps {
	thing: Thing;
}

const SpotCard: React.FC<SpotCardProps> = React.memo(({ thing }) => {
	const getAccent = (): AccentColor => {
		if (thing.countActive > 0) return 'orange';
		if (thing.countActive === 0 && thing.status === 'open') return 'yellow';
		if (thing.countActive === 0 && thing.status === 'closed') return 'red';
		return 'none';
	};

	const accent = getAccent();
	const width = '96px';
	const height = '72px';
	const bgColor = '#214884';

	return (
		<div
			className="relative flex items-center justify-center rounded-2xl text-[#E1E8FF] shadow-[0_15px_35px_rgba(4,12,36,0.6)]"
			style={{
				width,
				minWidth: width,
				maxWidth: width,
				height,
				backgroundColor: bgColor,
			}}
		>
			{accent !== 'none' && (
				<span
					className="absolute left-0 top-2 bottom-2 w-[6px] rounded-l-2xl"
					style={{ backgroundColor: accentColors[accent] }}
				/>
			)}
			<span className="text-3xl font-semibold leading-none tracking-wide">
				{thing.sku}
			</span>
			<span className="absolute right-3 top-2 text-xs font-medium uppercase tracking-wide text-[#F2F6FF]/80">
				{thing.defaultSku}
			</span>
		</div>
	);
});

export default SpotCard;
