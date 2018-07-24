/**
 * Created by apple on 2017/4/10.
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
var ApplyListDate = require('../LocateData/vworkApplyList.json');
var MyApplyListCell = require('../ProcessPage/CLMyApplyListCell');

var CLMyApplyListView = React.createClass({

    getInitialState(){
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !==r2});
        return{
            dataSource: ds.cloneWithRows(ApplyListDate.result)
        };
    },

    render(){
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={true}
            >

            </ListView>
        );
    },
    renderRow(rowData){
        return(
            <TouchableOpacity onPress={()=>{this.rowDidClikced()}}>
                <MyApplyListCell
                    applyTitle = {rowData.title}
                    applyTime = {rowData.startTime}
                    applyState = "已完成"
                    applyTip = {rowData.char1}
                >
                </MyApplyListCell>
            </TouchableOpacity>
        );
    },
    rowDidClikced(){

    }
});

const styles = StyleSheet.create({
    contentViewStyle: {
        //多个cell在同一行显示
        backgroundColor: 'white',
    }
});

module.exports = CLMyApplyListView;
