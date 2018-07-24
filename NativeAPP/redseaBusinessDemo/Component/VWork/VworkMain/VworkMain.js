/**
 * Created by apple on 2017/4/10.
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

var ProcessListView = require('../ProcessPage/CLProcessListView');

var VworkMain = React.createClass({
    getDefaultProps(){
        return{
            type: ""
        }
    },
    render(){
        return (
            this.getTypepage()
        );
    },
    getTypepage(){
        if (this.props.type == "work"){
            return <ProcessListView/>
        }else {
            return <View></View>
        }
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

module.exports = VworkMain;