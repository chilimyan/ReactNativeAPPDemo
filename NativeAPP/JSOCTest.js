/**
 * Created by apple on 2017/3/22.
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
    NativeModules
} from 'react-native';

var JSBridgeModel = NativeModules.JSBridgeModel;

var jsOCTest = React.createClass({
    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#e8e8e8'}}>
                {this.jsAndOC()}
                <Text style={{marginTop: 100}} onPress={()=>this.btnClickedCallBack()}>点击调原生+回调</Text>
                <Text onPress={()=>this.btnClicked()}>点击我获取原生数据</Text>
            </View>
        );
    },
    jsAndOC(){
        JSBridgeModel.addEventOne("我是JS");
    },
    btnClickedCallBack(){
        JSBridgeModel.testCallbackEventOne(('我是RN给原生的'),(error, events) => {
            if (error) {
                console.error(error);
            } else {
                alert(events)
            }
        })
    },
    btnClicked(){
        alert(JSBridgeModel.test)
    }
});

module.exports = jsOCTest;
