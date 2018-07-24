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
    Navigator
} from 'react-native';
//先启动启动图然后再跳转
var LuanchImagePage = require('./redseaBusinessDemo/Component/Main/XMGLuanchImage');

class AwesomeProject1 extends Component {
    render(){
        return (
            <Navigator
                initialRoute={{name: '启动页',component: LuanchImagePage}}
                configureScene={()=>{return Navigator.SceneConfigs.PushFromRight}}
                renderScene={(route, navigator)=>{
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>
                }}
            >

            </Navigator>
        );
    };
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject1);
