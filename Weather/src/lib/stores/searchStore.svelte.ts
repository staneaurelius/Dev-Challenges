interface Result {
	id: number;
	name: string;
	latitude: number;
	longitude: number;
	country: string;
}

type GeoResponse = Result & { [key: string]: unknown };

class SearchStore {
	query: string = $state('');
	results: Result[] = $state([]);
	isOpen: boolean = $state(false);
	isLoading: boolean = $state(true);

	async search() {
		this.isLoading = true;

		const response = await fetch(
			`https://geocoding-api.open-meteo.com/v1/search?name=${this.query}&count=4&language=en&format=json`
		);

		if (response.ok) {
			const data = await response.json();
			const cleanData = data.results.map((item: GeoResponse) => {
				return {
					id: item.id,
					name: item.name,
					latitude: item.latitude,
					longitude: item.longitude,
					country: item.country
				};
			});

			this.results = cleanData;
		}

		this.isLoading = false;
	}
}

const searchStore = new SearchStore();
export default searchStore;
