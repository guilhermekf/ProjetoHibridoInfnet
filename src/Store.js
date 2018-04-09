/**
 * @flow
 */

import { IStore, IMovie } from './IStore';
import { observable } from 'mobx';

const movieDetail : IMovie = {
    imdbID: undefined,
    Title: undefined,
    Year: undefined,
    Runtime: undefined,
    Genre: undefined,
    Director: undefined,
    Writer: undefined,
    Actors: undefined,
    Plot: undefined,
    Poster: undefined,
    imdbRating: undefined
}
const storeObject: IStore = {
    movieDetail: movieDetail 
};

export default observable(storeObject);
