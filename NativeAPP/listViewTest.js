/**
 * Created by apple on 2017/3/20.
 * ListView练习
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
    AlertIOS
} from 'react-native';

var Wine = require('./Wine.json');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var listViewTest = React.createClass({
    //设置初始值
    getInitialState(){
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2)=>r1 !== r2});
        return{
            dataSource: ds.cloneWithRows(Wine)
        };
    },
    render() {
        return (
            <ListView dataSource = {this.state.dataSource}
                      renderRow={this.renderRow}
            >

            </ListView>
        );
    },
    //返回具体的Cell
    renderRow(rowData,sectionID,rowID,highlightRow){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{AlertIOS.alert('点击了'+'第'+rowID)}}>
           <View style={styles.cellViewStyle}>

               <Image source={{uri: rowData.icon}} style={styles.leftImageStyle}/>

               <View style={styles.rightViewStyle}>
                   <Text style={styles.topTitleStyle}>{rowData.name}</Text>
                   <Text style={styles.bottomTitleStyle}>{rowData.money}元</Text>
               </View>
           </View>
            </TouchableOpacity>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    cellViewStyle: {
        backgroundColor: 'white',
        borderColor: '#e8e8e8',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        padding: 10
    },
    leftImageStyle: {
        width: 60,
        height: 60,
        marginRight: 15
    },
    topTitleStyle: {
        color: 'black',
        fontSize: 15,
        width: width*0.75,
        marginBottom: 8
    },
    bottomTitleStyle: {
        color: 'red',
    },
    rightViewStyle: {
        justifyContent: 'center'
    }
});


module.exports = listViewTest;