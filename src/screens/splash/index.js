/**
 * @flow
 */

import React, { Component } from 'react';
import { Dimensions, Animated, StatusBar, View } from 'react-native';
import { Container, Content, Button, Text, Footer, FooterTab } from 'native-base';
import { IAppState, IAppProps } from '../../AppsProps';
import ScalableImage from 'react-native-scalable-image';
import resolveAssetSource from 'resolveAssetSource';
import { splashStyle } from './style';
import { FOOTER_HEIGHT, COMMON_STYLES } from '../../styles/global';


interface imagesObject {
	source: number;
	name: string;
	width: number;
}

interface SplashScreenState extends IAppState {
	screenHeight: number;
	screenWidth: number;
}

export default class SplashScreen extends Component<IAppProps, SplashScreenState> {
	_images: Array<imagesObject>;
	_animation: any;
	_willBlurSubscription: any;
    _willFocusSubscription: any;
    _runAnimation: boolean;

	constructor(props: IAppProps) {
		super(props);

		this.state = {
			screenHeight: Dimensions.get('window').height - FOOTER_HEIGHT,
			screenWidth: Dimensions.get('window').width,
			loading: false,
		};

		this._images = this.initImages();
    }

	initImages = (): Array<imagesObject> => {
		let imageArray: Array<imagesObject> = [];

		imageArray.push(
			this.pushNewImage('splash1', require('../../assets/images/splash1.jpg'))
		);
		imageArray.push(
			this.pushNewImage('splash2', require('../../assets/images/splash2.jpg'))
		);

		return imageArray;
	};

	pushNewImage = (name: string, source: number): imagesObject => {
		let obj: imagesObject = {
			name: name,
			source: source,
			width: 0
		};
		return obj;
	};

	onPressSearchButton = async () => {
		this.props.navigation.navigate('Search');
	};

	render() {
		return (
			<Container style={COMMON_STYLES.container}>
                <StatusBar backgroundColor={'black'} translucent={false}/>
				<Content contentContainerStyle={splashStyle.content}>
                    {this._images.map((image, index) => (
                        <View key={'view' + image.name} style={index == 0? splashStyle.view1 : splashStyle.view2}>
                            <ScalableImage
                                style={splashStyle.image}
                                key={image.name}
                                width={this.state.screenWidth}
                                source={image.source}
                            />
                        </View>
                    ))}
				</Content>
				<Footer style={splashStyle.footer}>
					<FooterTab>
						<Button
							large
                            dark
                            onPress={this.onPressSearchButton}
						>
							<Text>Buscar</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}
