/**
 * @flow
 */

class OmdbServiceClass {
	KEY = 'bec2ff64';
	OMDB_SEARCH = 'http://www.omdbapi.com/?apikey=' + this.KEY + '&s=';
	OMDB_DETAILS = 'http://www.omdbapi.com/?apikey=' + this.KEY + '&i=';

	search = async (text: string): any => {
		try {
			const res = await fetch(this.OMDB_SEARCH + text);
			const movies = await res.json();
			return movies;
		} catch (error) {
			alert(error);
		}
	};

	detail = async (movieId: number): any => {
		try {
			const res = await fetch(this.OMDB_SEARCH_DETAILS + movieId);
			const movie = await res.json();
			return movie;
		} catch (error) {
			alert(error);
		}
	};
}

export const OmdbService = new OmdbServiceClass();
