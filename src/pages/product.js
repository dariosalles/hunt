import React from "react";
import { WebView } from 'react-native-webview';

//const Product = () => <Text>Product</Text>;

const Product = ({ navigation }) => (
    
     <WebView source={{ uri: navigation.state.params.product.url }} style={{ flex: 1}}/>
    // <WebView source={{ uri: 'http://www.dsxweb.com' }} style={{ flex: 1}}/>
);

Product.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.product.title
})

export default Product;