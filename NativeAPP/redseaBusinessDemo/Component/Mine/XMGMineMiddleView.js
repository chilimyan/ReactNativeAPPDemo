/**
 * Created by apple on 2017/3/27.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

//导入外部json数据
var MiddleData = require('../Mine/MiddleData.json');
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

var XMGMineMiddleView = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    },
    renderAllItem(){
        var itemArr = [];
        for (var i = 0; i < MiddleData.length; i++){
            var data = MiddleData[i];
            itemArr.push(
               <InnerView key = {i} iconName = {data.iconName} title = {data.title}/>
            );
        }
        return itemArr;
    }
});

var InnerView = React.createClass({
    getDefaultProps(){
       return{
           iconName: '',
           title: ''
       }
    },

    render(){
        return(
            <View style={styles.innerViewStyle}>
                <Image source={{uri: this.props.iconName}} style={{width: 30, height: 20,marginBottom:5}}></Image>
                <Text style={{fontSize:14, color:'gray'}}>{this.props.title}</Text>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height:60,
        justifyContent: 'space-around',
        width:width
    },
    innerViewStyle:{
        backgroundColor:'white',
        width: 80,
        justifyContent:'center',
        alignItems:'center'
    }
});

module.exports = XMGMineMiddleView;