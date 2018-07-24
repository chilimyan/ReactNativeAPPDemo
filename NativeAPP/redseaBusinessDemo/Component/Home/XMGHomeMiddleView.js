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

var MiddleCommonView = require('../Home/XMGMiddleCommonView');

var TopMiddleData = require('../LocalData/HomeTopMiddleLeft.json');

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

var XMGHomeMiddleView = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                {/*左边*/}
                {this.renderLeftView()}
                {/*右边*/}
                <View>
                    {this.renderRightView()}
                </View>
            </View>
        );
    },
    renderLeftView(){
        var leftData = TopMiddleData.dataLeft[0];
        return(
            <TouchableOpacity onPress={()=>{this.itemClicked()}}>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri: leftData.img1}} style={styles.leftImageStyle}></Image>
                    <Image source={{uri: leftData.img2}} style={styles.leftImageStyle}></Image>
                    <Text style={{color:'gray'}}>{leftData.title}</Text>
                    <View style={{flexDirection:'row', marginTop:5}}>
                        <Text style={{color:'blue',marginRight:5}}>{leftData.price}</Text>
                        <Text style={{color:'orange',backgroundColor:'yellow',marginRight:5}}>{leftData.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },
    renderRightView(){
        var itemArr = [];
        var rightData = TopMiddleData.dataRight;
        for (var i = 0; i < rightData.length; i ++){
            itemArr.push(
                <MiddleCommonView
                    key = {i}
                    title= {rightData[i].title}
                    subTitle = {rightData[i].subTitle}
                    rightIcon = {rightData[i].rightImage}
                    titleColor = {rightData[i].titleColor}
                />
            );
        }
        return itemArr;
    },
    itemClicked(){

    }
});

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        flexDirection: 'row'
    },
    leftViewStyle: {
        width: width*0.5,
        height: 119,
        backgroundColor: 'white',
        marginRight: 1,
        alignItems:'center',
        justifyContent: 'center'
    },
    leftImageStyle:{
        width: 120,
        height: 30,
        resizeMode: 'contain'
    }
});

module.exports = XMGHomeMiddleView;
