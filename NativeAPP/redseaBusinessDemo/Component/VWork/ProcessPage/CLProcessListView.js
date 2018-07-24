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
    NavigatorIOS,
    Platform,
    NativeModules,
    TextInput
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
var JSBridgeModel = NativeModules.JSBridgeModel;
var MyApplyListView = require('../ProcessPage/CLMyApplyListView');

var CLProcessListView = React.createClass({
    getInitialState(){
       return{
           topBarSelect: 0
       }
    },
    render(){
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <View style={styles.topBarViewStyle}>
                    {this.renderTopBar()}
                </View>
                <View style={styles.searchViewStyle}>
                    <TextInput
                        placeholder="请输入关键字"
                        style={styles.topInputStyle}
                        returnKeyType="search"
                    >

                    </TextInput>
                </View>
                {/*内容*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd = {this.onScrollAnimationEnd}
                    contentContainerStyle={styles.scrollViewStyle}
                >
                    {this.renderScrollItem()}
                </ScrollView>
                {/*<MyApplyListView/>*/}
                {/*{this.fetchDataList()}*/}

            </View>
        );
    },
    renderNavBar(){
        return(
            <View style={styles.outNavViewStyle}>
                <Text style={styles.titleStyle}>更多</Text>
                <TouchableOpacity onPress={()=>this.pushToSetting()} style={styles.leftViewStyle}>
                    <Image source={{uri: 'nav_back_icon'}} style={styles.navIconStyle}></Image>
                    <Text style={styles.leftTitleStyle}>办公</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.addNewPage()} style={styles.rightViewStyle}>
                    <Text style={styles.rightTitleStyle}>+</Text>
                </TouchableOpacity>
            </View>
        );
    },
    renderTopBar(){
        var itemArr = [];
        var topTitleStyle,lineViewStyle;
        var dataItem = ['我的申请','我的待办','我的已办','我的抄送'];
        for (var i = 0; i < dataItem.length; i ++) {
            topTitleStyle = (i == this.state.topBarSelect) ? {color: 'green',
                    fontSize: 16} : {color: 'black',
                    fontSize: 16};
            lineViewStyle = (i == this.state.topBarSelect) ? {backgroundColor: 'green',
                    height:2} : {backgroundColor: 'white',
                    height:2};
            itemArr.push(
                <TouchableOpacity key={i} id = {i} onPress={()=>this.clickItem()}>
                    <View style={{height: 42, justifyContent: 'center'}}>
                        <Text style={topTitleStyle}>{dataItem[i]}</Text>
                    </View>
                    <View style={lineViewStyle}></View>
                </TouchableOpacity>
            );
        }
        return itemArr;
    },
    renderScrollItem(){
        var itemArr = [];
        for (var i = 0; i < 4; i ++){
            itemArr.push(
                <MyApplyListView
                    key = {i}
                    style={{width: width,height: height}}
                />
            );
        }
        return itemArr;
    },
    onScrollAnimationEnd(e){
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x/width);
        this.setState({
            topBarSelect: currentPage
        });

    },
    pushToSetting(){
        JSBridgeModel.addEventOne("我是JS返回到原生");
    },
    addNewPage(){
        alert(1111);
    },
    clickItem(i){
        alert(i);
    },
    fetchDataList(){
        fetch('http://vw.51hrc.com/RedseaPlatform/MobileInterface/ios.mb?method=login&params=%7B%22wx%22:%22%22,%22userCode%22:%22严济林%22,%22pw%22:%2220150626%22,%22mobileModel%22:%22iPhone%20Simulator,10.2%22%7D')
            .then((response) => response.json())
            .then((responseJson) => {

                alert(responseJson.meg);

            })
            .catch((error) => {
                console.error(error);
            });
    }

});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    navIconStyle: {
        width: Platform.OS == 'ios' ? 28:20,
        height: Platform.OS == 'ios' ? 28:20,
        marginTop: 34
    },
    outNavViewStyle: {
        backgroundColor: 'rgba(62,62,62,1.0)',
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftViewStyle: {
        flexDirection: 'row',
        position: 'absolute',
        left: 2,
        bottom: 8
    },
    titleStyle: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 17
    },
    leftTitleStyle:{
        color: 'white',
        fontSize: 18,
        marginTop: 40,
    },
    rightTitleStyle: {
        color: 'white',
        fontSize: 30,
    },
    rightViewStyle: {
        position: 'absolute',
        right: 10,
        bottom: 10,
    },
    topBarViewStyle: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 44,
        justifyContent:'space-around',
        alignItems:'center'
    },
    topTitleStyle: {
        color: 'black',
        fontSize: 16,
    },
    topViewItemStyle:{

    },
    searchViewStyle: {
        backgroundColor: '#ebf0f2',
        height: 44,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topInputStyle: {
        width: width*0.95,
        height: 30,
        backgroundColor: 'white',
        marginTop: 6,
        borderRadius: 15,
        fontSize: 14,
        paddingLeft: 10
    },
    scrollViewStyle: {
        height: height - 88 - 64
    }
});

module.exports = CLProcessListView;