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
	View,
	Title
} from 'native-base';
import ScalableImage from 'react-native-scalable-image';
import { IAppState, IAppProps } from '../../AppsProps';
import { COMMON_STYLES } from '../../styles/global';
import { IMovie } from '../../IStore';
import { NavigationActions } from 'react-navigation';

interface DetailScreenState extends IAppState {
	movie: IMovie;
	screenWidth: number;
}

export default class MovieDetails extends Component<IAppProps, DetailScreenState> {
	constructor(props: IAppProps) {
		super(props);
        
		this.state = {
			loading: false,
			movie: this.props.store.movieDetail,
			screenWidth: Dimensions.get('window').width
		};
	}

	goBack = () => {
		this.props.navigation.dispatch(NavigationActions.back());
	};

	render() {
		return (
			<Container>
				<Header androidStatusBarColor="black" searchBar style={COMMON_STYLES.container}>
					<Left>
						<Button transparent onPress={this.goBack}>
							<Icon name="arrow-back" />
						</Button>
					</Left>
					<Body>
						<Title>
							Detalhes
						</Title>
					</Body>
				</Header>
				<Content>
					<Card>
						<CardItem header>
							<Body>
								<Text>{this.state.movie.Title} - {this.state.movie.Year}</Text>
							</Body>
						</CardItem>
						<CardItem cardBody>
							<ScalableImage
								width={this.state.screenWidth}
								source={{ uri: this.state.movie.Poster }}
							/>
						</CardItem>
						<CardItem>
							<Text>{this.state.movie.Plot}</Text>
						</CardItem>
						<CardItem>
							<Body>
								<Text>Director(s): {this.state.movie.Director}</Text>
							</Body>
						</CardItem>
						<CardItem>
							<Body>
								<Text>Actor(s): {this.state.movie.Actors}</Text>
							</Body>
						</CardItem>
						<CardItem>
							<Body>
								<Text>Director(s): {this.state.movie.Director}</Text>
							</Body>
						</CardItem>
						<CardItem>
							<Body>
								<Text>Writer(s): {this.state.movie.Writer}</Text>
							</Body>
						</CardItem>
						<CardItem footer>
							<Left>
								<Button transparent textStyle={{ color: '#87838B' }}>
									<Icon name="ios-star-half" />
									<Text>{this.state.movie.imdbRating}</Text>
								</Button>
							</Left>
							<Right>
								<Text>{this.state.movie.Runtime}</Text>
							</Right>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}
