/**
 * Created by apple on 2017/3/17.
 * 组件的生命周期
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
    AlertIOS
} from 'react-native';


var lifeCycle = React.createClass({
//实例化阶段
//     该函数用于初始化一些默认的属性，通常会将固定的内容放在这个函数 中进行初始化和赋值；
// 在组件中，可以利用this.props获取在这里初始化它的属性，由于组件初始化后，再次使用该组件不会调用getDefaultProps函数，所以组件自己不可以自己修改props（即：props可认为是只读的），只可由其他组件调用它时在外部修改。
//存放不可改变的值
    getDefaultProps(){
        return {
            age: 18
        }
    },
    // 该函数是用于对组件的一些状态进行初始化；
    getInitialState(){
        return {
            title: '不透明触摸',
            person: '张三'
        };
    },
    // 相当于OC中的ViewWillAppear方法，在组件将要被加载在视图上之前调用，功能相对较少。
    // componentWillMount(){
    //
    // }
    // render是一个组件中必须有的方法，本质上是一个函数，并返回JSX或其他组件来构成DOM，和Android的XML布局类似，注意：只能返回一个顶级元素 ;
    //此外，在render函数中，只可通过this.state和this.props来访问在之前函数中初始化的数据值 。
    render(){
        return (
            <View ref="topView" style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={()=>this.activeEvent('点击')}
                    onPressIn={()=>this.activeEvent('按下')}
                    onPressOut={()=>this.activeEvent('拾起')}
                    onLongPress={()=>this.activeEvent('长按')}
                >
                    <View style={styles.innerViewStyle}>
                        <Text>常用的事件</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text>{this.state.title}</Text>
                    <Text>{this.state.person}</Text>
                    <Text>{this.props.age}</Text>
                </View>
            </View>
        );
    },
//     在调用了render方法后，组件加载成功并被成功渲染出来以后，所要执行的后续操作，一般会在这个函数中处理网络请求等加载数据的操作；
// 因为UI已经成功被渲染出来， 所以放在这个函数里进行请求操作，不会出现UI上的错误。
//     componentDidMount(){
//
//     },

    // 注意：一旦调用了this.setState方法，组件一定会调用render方法，对组件进行再次的渲染，不过，如果React框架会自动根据DOM的状态来判断是否需要真正的渲染。
    //
    activeEvent(event){
        this.setState({
            title: event,
            person: '李四'
        });
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64,
        backgroundColor: '#dddddd'
    },
    innerViewStyle: {
        backgroundColor: 'red'
    }
});

module.exports = lifeCycle;
