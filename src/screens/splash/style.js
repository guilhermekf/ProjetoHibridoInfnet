import { StyleSheet } from 'react-native';
import { FOOTER_HEIGHT } from '../../styles/global';

export const splashStyle = StyleSheet.create({
    content: {
        flex: 1,
	},
    view1: { 
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end'
    },
    view2: { 
        flex: 1,
        backgroundColor: 'black'
    },
    footer: {
		height: FOOTER_HEIGHT
	}
});
