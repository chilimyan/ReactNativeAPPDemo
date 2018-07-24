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
    ScrollView,
    ListView,
} from 'react-native';

var TopListView = require('../Home/XMGTopListView');

var TopMenuData = require('../LocalData/TopMenu.json');
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

var XMGTopView = React.createClass({
    getInitialState(){
       return {
          activePage: 0
       }
    },
    render(){
        return (
            <View style={styles.container}>
                {/*内容*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd = {this.onScrollAnimationEnd}
                >
                    {this.renderScrollItem()}
                </ScrollView>
                {/*页码*/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },
    renderScrollItem(){
        var itemArr = [];
        var dataArr = TopMenuData.data;
        for (var i = 0; i < dataArr.length; i ++){
            itemArr.push(
               <TopListView
                   dataArr= {dataArr[i]}
                   key = {i}
               />
            );
        }
        return itemArr;
    },
    renderIndicator(){
        var indicatorArr = [],style;
        for (var i = 0; i < 2;i ++){
            style = (i === this.state.activePage) ? {color: 'orange'} : {color: 'gray'}
            indicatorArr.push(
                <Text key = {i} style={[{fontSize: 25},style]}>&bull;</Text>
            );
        }
        return indicatorArr;
    },
    onScrollAnimationEnd(e){
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x/width);
        this.setState({
            activePage: currentPage
        });

    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white'
    },
    indicatorViewStyle: {
        flexDirection:'row',
        justifyContent: 'center'
    }
});

module.exports = XMGTopView;