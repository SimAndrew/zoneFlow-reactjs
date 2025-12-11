export interface Thing {
	id: number;
	areaId: number;
	joinedWith: number | null;
	sku: string;
	defaultSku: string;
	status: 'open' | 'closed';
	countActive: number;
}

export interface Area {
	areaId: number;
	name: string;
}

/**
 * Function to validate Thing data
 */
function validateThing(data: unknown): data is Thing {
	if (typeof data !== 'object' || data === null) return false;

	const thing = data as Partial<Thing>;

	return (
		typeof thing.id === 'number' &&
		typeof thing.areaId === 'number' &&
		(thing.joinedWith === null || typeof thing.joinedWith === 'number') &&
		typeof thing.sku === 'string' &&
		typeof thing.defaultSku === 'string' &&
		(thing.status === 'open' || thing.status === 'closed') &&
		typeof thing.countActive === 'number'
	);
}

/**
 * Function to validate Area data
 */
function validateArea(data: unknown): data is Area {
	if (typeof data !== 'object' || data === null) return false;

	const area = data as Partial<Area>;

	return typeof area.areaId === 'number' && typeof area.name === 'string';
}

/**
 * Function to get the list of parking spots
 */
export async function getThings(): Promise<Thing[]> {
	try {
		const response = await fetch('/things.json');

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		if (!Array.isArray(data)) {
			throw new Error('Invalid data format: expected array');
		}

		// Валидация каждого элемента
		const validatedThings = data.filter((item, index) => {
			const isValid = validateThing(item);
			if (!isValid) {
				console.warn(`Invalid thing data at index ${index}:`, item);
			}
			return isValid;
		});

		if (validatedThings.length === 0) {
			throw new Error('No valid things data found');
		}

		return validatedThings;
	} catch (error) {
		console.error('Error fetching things:', error);
		throw error;
	}
}

/**
 * Function to get the list of parking areas
 */
export async function getAreas(): Promise<Area[]> {
	try {
		const response = await fetch('/areas.json');

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		if (!Array.isArray(data)) {
			throw new Error('Invalid data format: expected array');
		}

		// Валидация каждого элемента
		const validatedAreas = data.filter((item, index) => {
			const isValid = validateArea(item);
			if (!isValid) {
				console.warn(`Invalid area data at index ${index}:`, item);
			}
			return isValid;
		});

		if (validatedAreas.length === 0) {
			throw new Error('No valid areas data found');
		}

		return validatedAreas;
	} catch (error) {
		console.error('Error fetching areas:', error);
		throw error;
	}
}
