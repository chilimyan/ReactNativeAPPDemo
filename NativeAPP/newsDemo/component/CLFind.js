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

var newsFind = React.createClass({
    render(){
        return(
            <View style={{backgroundColor:'red', flex:1}}>
                <Text>发现</Text>
            </View>
        );
    }
});

const styles = StyleSheet.create({

});


module.exports = newsFind;