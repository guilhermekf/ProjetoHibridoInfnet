/**
 * @flow
 */
import React, { Component } from 'react';
import { Dimensions, TextInput, Image, StyleSheet, FlatList, ImageBackground } from 'react-native';
import {
	Container,
	Header,
	Content,
	Card,
	CardItem,
	Thumbnail,
	Text,
	Button,
	Icon,
	Left,
	Body,
	Right,
	View
} from 'native-base';
import ScalableImage from 'react-native-scalable-image';

export default class MovieDetails extends Component {
	OMDB_SEARCH_DETAILS = 'http://www.omdbapi.com/?apikey=16bfb934&i=';

	componentDidMount = async () => {
		const res = await fetch(this.OMDB_SEARCH_DETAILS + this.state.movieId, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});
		const movie = await res.json();
		this.setState({ movie: movie });
	};

	constructor(props) {
		super(props);

		this.state = {
			movieId: 'tt0094625',
			movie: {
				Title: ''
			}
		};
	}

	render() {
		return (
			<Container style={styles.container}>
				<Content>
					<View style={{ flex: 1 }}>
                        <Image source={{uri: this.state.movie.Poster}} style={{height: Dimensions.get('window').height / 2, width: null, flex: 1}}/>   
					</View>
					<View style={{ flex: 1 }}>
						<Text>{this.state.movie.Plot}</Text>
						<Text>Director(s): {this.state.movie.Director}</Text>
						<Text style={styles.description}>Actor(s): {this.state.movie.Actors}</Text>
						<Text style={styles.description}>
							Language: {this.state.movie.Language}
						</Text>
						<Text style={styles.description}>
							Production: {this.state.movie.Production}
						</Text>
					</View>
					{/* <Card style={{flex: 1}}>
                <CardItem cardBody>
                    <Image source={{uri: this.state.movie.Poster}} style={{height: 400, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Text>
                      {this.state.movie.Plot}
                    </Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>Director(s): {this.state.movie.Director}</Text>
                    <Text style={styles.description}>Actor(s): {this.state.movie.Actors}</Text>
                    <Text style={styles.description}>Language: {this.state.movie.Language}</Text>
                    <Text style={styles.description}>Production: {this.state.movie.Production}</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent textStyle={{color: '#87838B'}}>
                      <Icon name="ios-star-half" />
                      <Text>{this.state.movie.imdbRating}</Text>
                    </Button>
                  </Left>
                </CardItem>
              </Card> */}
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	description: {
		marginTop: 16
	}
});
