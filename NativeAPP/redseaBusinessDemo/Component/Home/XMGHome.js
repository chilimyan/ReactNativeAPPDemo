/**
 * Created by apple on 2017/3/24.
 */
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
    AlertIOS,
    TabBarIOS,
    NavigatorIOS,
    NativeModules
} from 'react-native';

var HomeDetailPage = require('../Home/XMGHomeDetail');
var TopView = require('../Home/XMGTopView');
var HomeMiddleView = require('../Home/XMGHomeMiddleView');
var HomeMiddleBottomView = require('../Home/XMGMiddleBottomView');
var ShopCenter = require('../Home/XMGShopCenter');
var ShopCenterDetail = require('../Home/XMGShopCenterDetail');
var GuestYouLike = require('../Home/XMGGesutYouLike');

var JSBridgeModel = NativeModules.JSBridgeModel;

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

var XMGHome = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <ScrollView>
                    {/*头部View*/}
                    <TopView/>
                    {/*中间*/}
                    <HomeMiddleView/>
                    {/*中下*/}
                    <HomeMiddleBottomView
                        popTopHome={(data)=>this.pushToDetail(data)}
                    />
                    {/*购物中心*/}
                    <ShopCenter
                        popToHomeView = {(url) => this.pushToShopCenterDetail(url)}
                    />
                    {/*猜你喜欢*/}
                    <GuestYouLike/>
                </ScrollView>
            </View>
        );
    },
    pushToShopCenterDetail(url){
        this.props.navigator.push(
            {
                component: ShopCenterDetail,//要跳转到哪个页面
                title: '详情页',
                passProps: {'url': this.dealWithUrl(url)}
            }
        );
    },
    dealWithUrl(url){
        return url.replace('imeituan://www.meituan.com/web/?url=', '');
    },
    //首页导航条
    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>
                {/*左边*/}
                <TouchableOpacity onPress={()=> {this.changeCity()}}>
                    <Text style={styles.leftTextStyle}>广州</Text>
                </TouchableOpacity>
                {/*中间*/}
                <TextInput
                    placeholder="输入商家，品类，商圈"
                    style={styles.topInputStyle}
                >

                </TextInput>
                {/*右边*/}
                <View style={styles.rightNavViewStyle}>
                    <TouchableOpacity onPress={()=>{this.pushToMessage()}}>
                        <Image source={{uri: 'icon_homepage_message'}} style={styles.navRightImageStyle}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.pushToScan()}}>
                        <Image source={{uri: 'icon_homepage_scan'}} style={styles.navRightImageStyle}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        );
    },
    pushToDetail(data){
        this.props.navigator.push(
            {
                component: HomeDetailPage,//要跳转到哪个页面
                title: '详情页'
            }
        );
    },
    changeCity(){
        JSBridgeModel.addEventOne("我是JS返回到原生");
    },
    pushToMessage(){

    },
    pushToScan(){

    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    navBarStyle: {
        backgroundColor: 'rgba(255,96,0,1.0)',
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    topInputStyle: {
        width: width*0.65,
        height: 30,
        backgroundColor: 'white',
        marginTop: 22,
        borderRadius: 15,
        paddingLeft: 10,
        fontSize: 14
    },
    navRightImageStyle: {
        width: 25,
        height: 25,
        marginRight: 6,
        marginTop: 10
    },
    rightNavViewStyle: {
        flexDirection: 'row',
        height: 64,
        alignItems: 'center',
    },
    leftTextStyle: {
        color: 'white',
        marginTop: 10
    }
});

module.exports = XMGHome;