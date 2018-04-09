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
import { COMMON_STYLES } from '../../styles/global';
import { searchStyle } from './style';
import ImageLoad from 'react-native-image-placeholder';
import Spinner from 'react-native-loading-spinner-overlay';
import { IAppState, IAppProps } from '../../AppsProps';
import { OmdbService } from '../../features';

interface SearchScreenState extends IAppState {
	movieList: any;
	windowHeight: number;
    windowWidth: number;
    text: string;
}
export default class SearchScreen extends Component<IAppProps, SearchScreenState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
            text: '',
            loading: false,
			movieList: [],
			windowHeight: Dimensions.get('window').height,
			windowWidth: Dimensions.get('window').width
		};
	}

	_onSubmitEditing = async () => {
        if(this.state.text) {
            this.handleToggleLoading(true);
            let movies = await OmdbService.search(this.state.text);
            this.handleToggleLoading(false);
            this.setState({ movieList: movies.Search });
        } else {
            alert('Enter a title')
        }
	};

	showDetails = async (item: any) => {
        this.handleToggleLoading(true);
		let movie = await OmdbService.detail(item.imdbID);
		this.handleToggleLoading(false);
        this.props.store.movieDetail = movie
		this.props.navigation.navigate('Detail');
	};

	_keyExtractor = (item : any, index : number) => {
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
                    {
                        (!this.state.movieList || this.state.movieList.length == 0) &&
                        <Text>
                            No results
                        </Text>
                    }
                    {
                        this.state.movieList && this.state.movieList.length > 0 &&
                        <FlatList
                            data={this.state.movieList}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderItem}
                        />
                    }
				</Content>
			</Container>
		);
	}
}
