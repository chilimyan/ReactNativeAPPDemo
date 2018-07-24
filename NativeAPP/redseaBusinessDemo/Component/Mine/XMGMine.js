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
    NavigatorIOS
} from 'react-native';

var MineCommonCell = require('../Mine/XMGCommonMineCell');
var MineMiddleView = require('../Mine/XMGMineMiddleView');
var HeadMineView = require('../Mine/XMGHeadMineView');

var XMGMine = React.createClass({
    render(){
        return (
           <ScrollView
               style={styles.scrollViewStyle}
               contentInset={{top: -200}}
               contentOffset={{y: 200}}
           >
               <View>
                   <HeadMineView/>
                   <MineCommonCell
                       leftIconNmae = "collect"
                       leftTitle="我的订单"
                       rightIconName="查看全部订单"
                       rightTitle=""
                   />
                   <MineMiddleView/>
               </View>
               <View style={{marginTop: 20}}>
                   <MineCommonCell
                       leftIconNmae = "draft"
                       leftTitle="红海钱包"
                       rightIconName=""
                       rightTitle="账户余额：100元"

                   />
                   <MineCommonCell
                       leftIconNmae = "like"
                       leftTitle="抵用卷"
                       rightIconName=""
                       rightTitle="10张"

                   />
               </View>
               <View style={{marginTop: 20}}>
                   <MineCommonCell
                       leftIconNmae = "card"
                       leftTitle="积分商城"
                       rightIconName=""
                       rightTitle=""

                   />
               </View>
               <View style={{marginTop: 20}}>
                   <MineCommonCell
                       leftIconNmae = "new_friend"
                       leftTitle="今日推荐"
                       rightIconName="me_new"
                       rightTitle=""
                   />
               </View>
               <View style={{marginTop: 20}}>
                   <MineCommonCell
                       leftIconNmae = "card"
                       leftTitle="我要合作"
                       rightIconName=""
                       rightTitle="轻松开店，招财进宝"

                   />
               </View>
           </ScrollView>
        );
    }

});

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollViewStyle: {
        backgroundColor: '#e8e8e8'
    }
});

module.exports = XMGMine;