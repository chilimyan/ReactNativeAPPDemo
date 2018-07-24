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
    Platform
} from 'react-native';

var CommonCell = require('../More/XMGCommonCell');

var XMGMore = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <ScrollView>
                    <View style={{marginTop:20}}>
                        <CommonCell
                            title="扫一扫"
                        />
                    </View>
                    <View style={{marginTop:20}}>
                        <CommonCell
                            title="省流量模式"
                            isSwitch = {true}
                        />
                        <CommonCell
                            title="消息提醒"
                        />
                        <CommonCell
                            title="邀请好友"
                        />
                        <CommonCell
                            title="清空缓存"
                            rightTitle = "1.99M"
                        />

                    </View>
                    <View style={{marginTop:20}}>
                        <CommonCell
                            title="问卷调查"
                        />
                        <CommonCell
                            title="支付帮助"
                        />
                        <CommonCell
                            title="网络诊断"
                        />
                        <CommonCell
                            title="关于码团"
                        />
                        <CommonCell
                            title="我要应聘"
                        />
                    </View>
                    <View style={{marginTop:20}}>
                        <CommonCell
                            title="精品应用"
                        />
                    </View>
                </ScrollView>
            </View>
        );
    },
    renderNavBar(){
        return(
            <View style={styles.outNavViewStyle}>
                <Text style={styles.titleStyle}>更多</Text>
                <TouchableOpacity onPress={()=>this.pushToSetting()} style={styles.rightViewStyle}>
                    <Image source={{uri: 'icon_mine_setting'}} style={styles.navIconStyle}></Image>
                </TouchableOpacity>
            </View>
        );
    },
    pushToSetting(){

    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#e8e8e8'
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
    }
});

module.exports = XMGMore;