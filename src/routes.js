import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

import { Colors } from 'react-native/Libraries/NewAppScreen';

export default createStackNavigator ({
    Main,
    Product
},{
    navigationOptions: {
        headerStyle: {
            backgroundColor: "orange"
        },
        headerTintColor: "#FFF"
    }
});