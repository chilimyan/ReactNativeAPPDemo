/**
 * Created by apple on 2017/3/17.
 * 登录界面demo
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class loginView extends Component {
    render() {
        return (
            <View style={styles1.container}>
                {/*头像*/}
                <Image source={require('./img/icon.png')} style={styles1.iconStyle} />
                {/*账号和密码*/}
                <TextInput placeholder={'请输入用户名'} style={styles1.textInputStyle}></TextInput>
                <TextInput placeholder={'请输入密码'} password={true} style={styles1.textInputStyle}></TextInput>
                {/*登录*/}
                <TouchableOpacity activeOpacity={0.6} onPress={this.renderPress()}>
                    <View style={styles1.loginBtnStyle}>
                        <Text style={{color: 'white'}}>登录</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles1.settingStyle}>
                    <Text>无法登录</Text>
                    <Text>新用户</Text>
                </View>
                <View style={styles1.otherLoginStyle}>
                    <Text >其他登录方式:</Text>
                    <Image source={require('./img/icon3.png')} style={styles1.otherImageStyle}></Image>
                    <Image source={require('./img/icon7.png')} style={styles1.otherImageStyle}></Image>
                    <Image source={require('./img/icon8.png')} style={styles1.otherImageStyle}></Image>
                </View>
            </View>
        );
    };
    //点击登录按钮
    renderPress(){
        alert(1111);
    };
}

module.exports = loginView;

const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
        marginTop: 64,
        //设置侧轴对齐方式
        alignItems: 'center'
    },
    iconStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 50,
        marginBottom: 30
    },
    textInputStyle: {
        height: 38,
        backgroundColor: 'white',
        marginBottom: 1,
        //内容居中
        textAlign: 'center'
    },
    loginBtnStyle: {
        height: 35,
        width: width*0.9,
        backgroundColor: 'blue',
        marginTop: 34,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    settingStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width*0.9,
        marginTop: 15
    },
    otherLoginStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 20
    },
    otherImageStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 8
    }

});

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  */
//
// import React, { Component } from 'react';
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     TextInput
// } from 'react-native';
//
// class loginView extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={{backgroundColor:'black'}}>Welcome to React Native!</Text>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'red',
//         // 设置侧轴的对齐方式
//         alignItems:'center'
//     }
// });
// //
// // 输出类
// module.exports = loginView;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

// import React, { Component } from 'react';
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     TextInput
// } from 'react-native';
//
// var Dimensions = require('Dimensions');
// var {width,height} = Dimensions.get('window');
//
// class loginView extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 {/*头像*/}
//                 <Image source={require('./img/icon.png')} style={styles.iconStyle}/>
//                 {/*账号和密码*/}
//                 <TextInput placeholder={'请输入用户名'} style={styles.textInputStyle} />
//                 <TextInput placeholder={'请输入密码'}  password={true}  style={styles.textInputStyle} />
//                 {/*登录*/}
//                 <View style={styles.loginBtnStyle}>
//                     <Text style={{color:'white'}}>登录</Text>
//                 </View>
//                 {/*设置*/}
//                 <View style={styles.settingStyle}>
//                     <Text>无法登录</Text>
//                     <Text>新用户</Text>
//                 </View>
//                 {/*其他的登录方式*/}
//                 <View style={styles.otherLoginStyle}>
//                     <Text>其他登录方式: </Text>
//                     <Image  source={require('./img/icon3.png')}  style={styles.otherImageStyle} />
//                     <Image  source={require('./img/icon7.png')}   style={styles.otherImageStyle} />
//                     <Image  source={require('./img/icon8.png')}   style={styles.otherImageStyle} />
//                 </View>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#dddddd',
//         // 设置侧轴的对齐方式
//         alignItems:'center'
//     },
//
//     iconStyle:{
//         marginTop:50,
//         marginBottom:30,
//         width:80,
//         height:80,
//         borderRadius:40,
//         borderWidth:2,
//         borderColor:'white'
//     },
//
//     textInputStyle:{
//         height:38,
//         backgroundColor:'white',
//         marginBottom:1,
//         // 内容居中
//         textAlign:'center'
//     },
//
//     loginBtnStyle:{
//         height:35,
//         width:width*0.9,
//         backgroundColor:'blue',
//         marginTop:30,
//         marginBottom:20,
//
//         justifyContent:'center',
//         alignItems:'center',
//
//         borderRadius:8
//     },
//
//     settingStyle:{
//         // 设置主轴的方向
//         flexDirection:'row',
//         // backgroundColor:'red',
//
//         // 主轴的对齐方式
//         width:width*0.9,
//         justifyContent:'space-between'
//     },
//
//     otherLoginStyle:{
//         // backgroundColor:'red',
//
//         // 设置主轴的方向
//         flexDirection:'row',
//
//         // 设置侧轴的对齐方式
//         alignItems:'center',
//
//         // 绝对定位
//         position:'absolute',
//         bottom:10,
//         left:20
//     },
//
//     otherImageStyle:{
//         width:50,
//         height:50,
//         borderRadius:25,
//         marginLeft:8
//     }
// });
//
// // 输出类
// module.exports = loginView;
