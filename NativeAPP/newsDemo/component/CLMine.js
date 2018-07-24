/**
 * Created by apple on 2017/3/21.
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
} from 'react-native';

var newsMine = React.createClass({
    render(){
        return(
            <View style={{backgroundColor:'red', flex:1}}>
                <Text>我的</Text>
            </View>
        );
    }
});

const styles = StyleSheet.create({

});


module.exports = newsMine;