/**
 * Created by apple on 2017/3/24.
 */安卓启动图片
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var Main = require('../Main/XMGMain');

var LuanchImage = React.createClass({
    render(){
        return (
            <Image source={{uri:'11111'}} style={styles.lunchImagestyle}>

            </Image>
        );
    },
    componentDidMount(){
        //定时，隔2s跳转
        setTimeout(()=>{
            this.props.navigator.replace({
                component: Main
            });
        },2000)
    }
});

const styles = StyleSheet.create({
    lunchImagestyle: {
        flex: 1
    }
});

module.exports = LuanchImage;