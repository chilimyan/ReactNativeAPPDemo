/**
 * Created by apple on 2017/3/30.
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
    Platform,
    WebView
} from 'react-native';

var XMGShopCenterDetail = React.createClass({
    getInitialState(){
        return{
            detailUrl: this.props.url + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
        }
    },

    render(){
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate= "normal"
                    startInLoadingState={true}
                >
                </WebView>
            </View>
        );
    },
    renderNavBar(){
        return(
            <View style={styles.outNavViewStyle}>
                <TouchableOpacity onPress={()=>this.props.navigator.pop()} style={styles.leftViewStyle}>
                    <Image source={{uri: 'navigationbar_arrow_up'}} style={styles.leftImageStyle}></Image>
                </TouchableOpacity>
                <Text style={styles.titleStyle}>购物中心</Text>
                <TouchableOpacity onPress={()=>this.pushToSetting()} style={styles.rightViewStyle}>
                    <Image source={{uri: 'icon_mine_setting'}} style={styles.navIconStyle}></Image>
                </TouchableOpacity>
            </View>
        );
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navIconStyle: {
        width: Platform.OS == 'ios' ? 28:24,
        height: Platform.OS == 'ios' ? 28:24
    },
    outNavViewStyle: {
        backgroundColor: 'rgba(255,96,0,1.0)',
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightViewStyle: {
        position: 'absolute',
        right: 10,
        bottom: 12
    },
    titleStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 16
    },
    leftViewStyle: {
        position: 'absolute',
        left: 10,
        bottom: 12
    },
    leftImageStyle: {
        width: 7,
        height: 13,
    }
});

module.exports = XMGShopCenterDetail;