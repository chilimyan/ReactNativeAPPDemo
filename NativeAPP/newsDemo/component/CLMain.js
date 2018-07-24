/**
 * Created by apple on 2017/3/21.
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

//引入外部组件
var Home = require('../component/CLHome');
var Find = require('../component/CLFind');
var Message = require('../component/CLMessage');
var Mine = require('../component/CLMine');

var newsDemo = React.createClass({

    //初始化属性
    getInitialState(){
        return{
            //设置选中标示
            tabbarSelectedItem: 'home'
        }
    },

    render(){
        return(
            <TabBarIOS
                tintColor = 'orange'
            >
                <TabBarIOS.Item
                    title='首页'
                    icon={require('image!tabbar_home')}
                    selected={this.state.selectedTabbarItem == 'home'}
                    onPress={()=>{this.setState({selectedTabbarItem: 'home'})}}
                >
                    <NavigatorIOS
                        tintColor='orange'
                        style={{flex: 1}}
                        initialRoute={
                            {
                                component: Home,//具体的板块名称
                                title: '首页',
                                leftButtonIcon: require('image!navigationbar_friendattention'),
                                rightButtonIcon: require('image!navigationbar_pop')
                            }
                        }
                    >
                    </NavigatorIOS>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title='消息'
                    icon={require('image!tabbar_message_center')}
                    selected={this.state.selectedTabbarItem == 'message'}
                    onPress={()=>{this.setState({selectedTabbarItem: 'message'})}}
                >
                    <NavigatorIOS
                        style={{flex: 1}}
                        initialRoute={
                            {
                                component: Message,//具体的板块名称
                                title: '消息'
                            }
                        }
                    >
                    </NavigatorIOS>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title='发现'
                    icon={require('image!tabbar_discover')}
                    selected={this.state.selectedTabbarItem == 'find'}
                    onPress={()=>{this.setState({selectedTabbarItem: 'find'})}}
                >
                    <NavigatorIOS
                        style={{flex: 1}}
                        initialRoute={
                            {
                                component: Find,//具体的板块名称
                                title: '发现',

                            }
                        }
                    >
                    </NavigatorIOS>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title='我的'
                    icon={require('image!tabbar_profile')}
                    selected={this.state.selectedTabbarItem == 'mine'}
                    onPress={()=>{this.setState({selectedTabbarItem: 'mine'})}}
                >
                    <NavigatorIOS
                        style={{flex: 1}}
                        initialRoute={
                            {
                                component: Mine,//具体的板块名称
                                title: '我的'
                            }
                        }
                    >
                    </NavigatorIOS>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
});

const styles = StyleSheet.create({

});


module.exports = newsDemo;