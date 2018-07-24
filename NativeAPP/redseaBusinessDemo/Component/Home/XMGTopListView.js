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
    TouchableOpacity,
    ScrollView,
    ListView,
    Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

var cols = 5;
var cellw = Platform.OS == 'ios' ? 70: 60;
var cellh = Platform.OS == 'ios' ? 70: 70;
var vMargin = (width - cellw*cols)/(cols + 1);

var XMGTopListView = React.createClass({

    getDefaultProps(){
       return{
          dataArr: []
       } ;
    },

    getInitialState(){
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !==r2});
        return{
            dataSource: ds.cloneWithRows(this.props.dataArr)
        };
    },

    render(){
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            >

            </ListView>
        );
    },
    renderRow(rowData){
        return(
            <TouchableOpacity onPress={()=>{this.rowDidClikced()}}>
                <View style={styles.cellStyle}>
                    <Image source={{uri: rowData.image}} style={{width: 52, height:52}}></Image>
                    <Text style={{fontSize: 13}}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );
    },
    rowDidClikced(){

    }
});

const styles = StyleSheet.create({
    contentViewStyle: {
        //多个cell在同一行显示
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: width
    },
    cellStyle: {
        width: cellw,
        height: cellh,
        justifyContent:'center',
        alignItems:'center',
        marginTop: 10,
        marginLeft:vMargin
    }
});

module.exports = XMGTopListView;
