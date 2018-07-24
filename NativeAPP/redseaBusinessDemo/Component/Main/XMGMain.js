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
    Platform,
    Navigator
} from 'react-native';
//导入底部Tab
import TabNavigator from 'react-native-tab-navigator';
//导入页面
var HomePage = require('../Home/XMGHome');
var ShopPage = require('../Shop/XMGShop');
var MinePage = require('../Mine/XMGMine');
var MorePage = require('../More/XMGMore');

var XMGMain = React.createClass({
    //初始化函数（变量是可以改变的，充当状态机的角色）
    getInitialState(){
        return{
            selectedTab: 'home'
        };
    },
    render(){
        return (
            <TabNavigator>
                {this.renderTabBarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',HomePage)}
                {this.renderTabBarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','business','商家',ShopPage)}
                {this.renderTabBarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','mine','我的',MinePage)}
                {this.renderTabBarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','more','更多',MorePage)}
            </TabNavigator>
        );
    },
    //每一个TabbarItem
    renderTabBarItem(title, iconName, selectIconName,selectedTab, componentName, component,badgeText){
        return(
            <TabNavigator.Item
                title= {title}
                renderIcon={() => <Image source={{uri: iconName}} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri: selectIconName}} style={styles.iconStyle}/>}
                onPress={() => this.setState({ selectedTab: selectedTab })}
                selected={this.state.selectedTab == selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
                badgeText={badgeText}
            >
                <Navigator
                    initialRoute={{name: componentName,component: component}}
                    configureScene={()=>{return Navigator.SceneConfigs.PushFromRight}}
                    renderScene={(route, navigator)=>{
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>
                    }}
                >

                </Navigator>
            </TabNavigator.Item>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64,
        backgroundColor: 'red',
    },
    iconStyle: {
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25
    },
    selectedTitleStyle: {
        color: 'orange'
    }
});

module.exports = XMGMain;