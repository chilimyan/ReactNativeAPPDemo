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
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

var XMGHeadMineView = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                {this.renderTopView()}
                {this.renderBottomView()}
            </View>
        );
    },
    renderTopView(){
        return(
            <View style={styles.topViewStyle}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Image source={{uri: 'see'}} style={styles.leftIconStyle}></Image>
                    <Text style={{color: 'white', fontWeight:'bold', fontSize: 16}}>电商测试</Text>
                    <Image source={{uri: 'avatar_vip'}} style={{width:17, height:17}}></Image>
                </View>
                <View>
                    <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight: 8}}></Image>
                </View>
            </View>
        );
    },
    renderBottomView(){
        return(
            <View style={styles.bottomViewStyle}>
                {this.renderBottomItem()}
            </View>
        );
    },
    renderBottomItem(){
        var itemArr = [];
        var data = [{'number':'100','title':'消费卷'},{'number':'12','title':'评价'},{'number':'0','title':'收藏'}];
        for (var i = 0; i < data.length; i ++){
            var item = data[i];
            itemArr.push(
                <TouchableOpacity key = {i} onPress={()=>{this.itemClicked()}}>
                    <View style={styles.bottomInnerStyle}>
                        <Text style={styles.itemTextColor}>{item.number}</Text>
                        <Text style={styles.itemTextColor}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        return itemArr;
    },
    itemClicked(){

    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor:'rgba(255,96,0,1.0)',
        height: 150 + 200,
        justifyContent:'center'
    },
    leftIconStyle: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 3,
        borderColor: 'rgba(0,0,0,0.1)',
        marginLeft: 8,
        marginRight: 5
    },
    topViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 200
    },
    bottomViewStyle:{
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        backgroundColor:'rgba(255,255,255,0.4)'
    },
    bottomInnerStyle: {
        width: (width/3) + 1,
        height: 40,
        justifyContent:'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: 'white'
    },
    itemTextColor: {
        fontSize: 12,
        color: 'white',
        marginBottom: 3
    }
});

module.exports = XMGHeadMineView;