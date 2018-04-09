/**
 * @flow
 */

export interface IMovie {
    imdbID: ?string,
    Title: ?string,
    Year: ?string,
    Runtime: ?string,
    Genre: ?string,
    Director: ?string,
    Writer: ?string,
    Actors: ?string,
    Plot: ?string,
    Poster: ?string,
    imdbRating: ?string
}

export interface IStore {
    movieDetail: IMovie
}
