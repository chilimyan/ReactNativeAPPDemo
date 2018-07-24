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
} from 'react-native';

var CommonBottomCell = require('../Home/XMGBottomCommonCell');

var XMGGuestYouLike = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                <CommonBottomCell/>

            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    }
});

module.exports = XMGGuestYouLike;
