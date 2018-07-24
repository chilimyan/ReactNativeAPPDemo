/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

// //导入json数据
// var badgeData = require('./BadgeData.json');
//
// //定义一些全局变量
// var Dimensions = require('Dimensions');
// var {width} = Dimensions.get('window');
// var cols = 3;
// var boxWidth = 100;
// var vMargin = (width - cols*boxWidth)/(cols + 1);
// var hMargin = 25;

// class AwesomeProject1 extends Component {
//     render() {
//         return (
//             <View style={styles1.container}>
//                 {this.renderAllBadge()}
//             </View>
//         );
//     }
//
//     renderAllBadge(){
//         var allBadge = [];
//         // 遍历json数据
//         for (var i = 0; i < badgeData.data.length; i ++){
//             var badge = badgeData.data[i];
//             allBadge.push(
//                 <View key={i} style={styles1.outViewStyle}>
//                     <Image source={{uri: badge.icon}} style={styles1.imageStyle}/>
//                     <Text style={styles1.mainTitleStyle}>
//                         {badge.title}
//                     </Text>
//                 </View>
//             );
//         }
//         return allBadge;
//     }
// }
//
// const styles1 = StyleSheet.create({
//     container:{
//         marginTop: 64,
//         flexDirection: 'row',
//         flexWrap: 'wrap'
//     },
//     outViewStyle:{
//         backgroundColor: 'red',
//         alignItems: 'center',
//         width: boxWidth,
//         height: boxWidth,
//         marginLeft: vMargin,
//         marginTop: hMargin
//     },
//     imageStyle:{
//         width: 80,
//         height: 80,
//     },
//     mainTitleStyle:{
//
//     }
// });

//引入外部js文件

// var LoginView = require('./loginView');
// var LifeCycle = require('./lifeCycle');
// var ScrollViewTest = require('./scrollViewTest');
// var ListViewTest = require('./listViewTest');
// var JiugonggeTest = require('./jiugonggeTest');
// var SectionListView = require('./sectionListViewTest');
// var TabbarTest = require('./tabbarTest');
// var Main = require('./newsDemo/component/CLMain');
//var JSOCTest = require('./JSOCTest');
 var CLMain = require('./redseaBusinessDemo/Component/Main/XMGMain');
 var Vwork = require('./redseaBusinessDemo/Component/VWork/VworkMain/VworkMain');

 var AwesomeProject1 = React.createClass({
     render(){
         return (
             //生成组件
             //QQ登录界面
             // <LoginView />
             // {/*<LifeCycle/>*/}
             //<ScrollViewTest/>
             // <ListViewTest/>
             // <JiugonggeTest/>
             //<SectionListView/>
             // <TabbarTest/>
             // <Main/>
             //<JSOCTest/>
             this.getPageType()
         );
     },
     getDefaultProps(){
         return{
             type: ""
         }
     },

     getPageType(){
         if (this.props.type == 'vwork'){
             return <Vwork
                 type = "work"
             />
         }else {
             return <CLMain/>;
         }
     }
 })

// const styles1 = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f5fcff',
//         marginTop: 64
//     },
//     inputStyle: {
//         width: 300,
//         height: 30,
//         // backgroundColor: 'red'
//         borderWidth: 1,
//         borderColor: '#e8e8e8'
//     }
// });

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject1);
