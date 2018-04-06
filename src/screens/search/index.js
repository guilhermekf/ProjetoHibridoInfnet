/**
 * @flow
 */

import React, { Component } from 'react';
import { Dimensions, StyleSheet, FlatList } from 'react-native';
import {
	Container,
	Header,
	Content,
	Card,
	CardItem,
	Item,
	Icon,
	Input,
	Left,
	Body,
	Text
} from 'native-base';
import { OmdbService } from '../../features';
import { COMMON_STYLES } from '../../styles/global';
import { searchStyle } from './style';
import ImageLoad from 'react-native-image-placeholder';
import Spinner from 'react-native-loading-spinner-overlay';

interface SearchScreenState extends IAppState {
	movieList: any;
	windowHeight: number;
	windowWidth: number;
}
export default class SearchScreen extends Component<IAppProps, SearchScreenState> {
	constructor(props) {
		super(props);
		this.state = {
			movieList: [],
			windowHeight: Dimensions.get('window').height,
			windowWidth: Dimensions.get('window').width
		};
	}

	_onSubmitEditing = async () => {
		this.handleToggleLoading(true);
		let movies = await OmdbService.search('akira');
		this.handleToggleLoading(false);
		this.setState({ movieList: movies.Search });
	};

	showDetails = item => {
		this.props.navigation.navigate('Detail');
	};

	_keyExtractor = (item, index) => {
		return item.imdbID;
	};

	handleToggleLoading = (loading: boolean) => {
		this.setState({ loading: loading });
	};

	_renderItem = ({ item }) => (
		<Card>
			<CardItem
				cardBody
				button
				onPress={() => {
					this.showDetails(item);
				}}
			>
				<Left>
					<ImageLoad
						placeholderSource={require('../../assets/images/empty-image.png')}
						style={searchStyle.image}
						source={{ uri: item.Poster }}
					/>
				</Left>
				<Body>
					<Text>{item.Title}</Text>
					<Text note>{item.Year}</Text>
				</Body>
			</CardItem>
		</Card>
	);

	render() {
		return (
			<Container>
				<Header androidStatusBarColor="black" searchBar style={COMMON_STYLES.container}>
					<Item>
						<Icon name="ios-search" />
						<Input
							autoFocus={true}
							onSubmitEditing={this._onSubmitEditing}
							onChangeText={text => this.setState({ text: text })}
							placeholder="Search"
						/>
					</Item>
				</Header>
				<Content>
					<Spinner
						visible={this.state.loading}
						style={{ height: this.state.windowHeight, width: this.state.windowWidth }}
					/>
					<FlatList
						data={this.state.movieList}
						keyExtractor={this._keyExtractor}
						renderItem={this._renderItem}
					/>
				</Content>
			</Container>
		);
	}
}
