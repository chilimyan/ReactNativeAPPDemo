/**
 * Created by apple on 2017/3/24.
 */
/**
 * Created by apple on 2017/3/24.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ListView,
    AlertIOS,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';

var XMGShop = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                <Text>主要框架</Text>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

module.exports = XMGShop;