/**
 * Created by apple on 2017/3/28.
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

var MiddleCommonView = require('../Home/XMGMiddleCommonView');

var Home_D4 = require('../LocalData/XMG_Home_D4.json')

var XMGMiddleBottomView = React.createClass({

    getDefaultProps(){
       return{
          popTopHome: null
       }
    },

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.topViewStyle}>

                </View>
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    },
    renderBottomItem(){
        var itemArr = [];
        var dataArr = Home_D4.data;
        for (var i = 0; i< dataArr.length; i++){
            var itemData = dataArr[i];
            itemArr.push(
                <MiddleCommonView
                    key = {i}
                    title= {itemData.maintitle}
                    subTitle = {itemData.deputytitle}
                    rightIcon = {this.dealWithImageUrl(itemData.imageurl)}
                    titleColor = {itemData.typeface_color}
                    tplurl = {itemData.tplurl}
                    callBackClickCell={(data)=>this.popToTopView(data)}
                />
            );
        }
        return itemArr;
    },
    //处理图像尺寸
    dealWithImageUrl(url){
       if (url.search('w.h') == -1){
           return url;
       }else {
           return url.replace('w.h', '120.90');
       }
    },
    popToTopView(data){
        this.props.popTopHome(data);
    }
});

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    topViewStyle: {

    },
    bottomViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

module.exports = XMGMiddleBottomView;