/**
 * Created by apple on 2017/3/24.
 */
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

var XMGHomeDetail = React.createClass({
    getDefaultProps(){
       return {
           tplUrl: ''
       }
    },
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.popToHome()}}>
                    <Text>{this.props.tplUrl}</Text>
                </TouchableOpacity>
            </View>
        );
    },
    popToHome(){
        this.props.navigator.pop();
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

module.exports = XMGHomeDetail;