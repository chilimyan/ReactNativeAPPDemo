/**
 * Created by apple on 2017/3/17.
 * scrollView练习
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
    ScrollView
} from 'react-native';

//引入计时器
var TimerMixin = require('react-timer-mixin');
var ImageData = require('./scrollViewImageData.json');

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


var scrollViewTest = React.createClass({
    //注册计时器
    mixins: [TimerMixin],

    getDefaultProps(){
      return {
          duration: 1000
      };
    },

    getInitialState(){
       return {
         //当前页码
           currentPage: 0
       };
    },

    render() {
        return (
            <View style={styles.container}>
                <ScrollView ref="scrollView"
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            pagingEnabled={true}
                            onMomentumScrollEnd={this.onAnimationEnd}
                            onScrollBeginDrag={this.onScrollBeginDrag}
                            onScrollEndDrag={this.onScrollEndDrag}
                >
                    {this.renderAllImage()}
                </ScrollView>
                <View style={styles.pageViewStyle}>
                    {this.renderPageCircle()}
                </View>

            </View>
        );
    },

    //实现一些复杂操作
    componentDidMount(){
       //开启定时器
        this.startTimer();
    },

    startTimer(){

        var scrollView = this.refs.scrollView;
        //定时器
        this.timer = this.setInterval(function () {
            // 设置原点
            var activePage;
            var imagsCount = ImageData.data.length;
            if ((this.state.currentPage + 1) >= imagsCount){
                activePage = 0;
            }else {
                activePage = this.state.currentPage + 1;
            }
            this.setState({
                currentPage: activePage
            });

            var offsetx = activePage * width;
            scrollView.scrollResponderScrollTo({x: offsetx, y: 0, animated: true});


        }, this.props.duration);

    },

    onScrollBeginDrag(){
        //停止定时器
        this.clearInterval(this.timer);
    },
    onScrollEndDrag(){
        this.startTimer();
    },

    renderAllImage(){

        var allImage = [];
        for (var i=0; i< ImageData.data.length; i ++){
            alert(ImageData.data[i].img);
            allImage.push(
                <Image key={i} source={{uri: ImageData.data[i].img}} style={{width: width, height: 130, marginTop: 0}} />
            );

        }
        return allImage;
    },
    renderPageCircle(){
        var indicatorArr = [];
        var style;
        var imagsArr = ImageData.data;
        for (var i = 0; i < imagsArr.length; i++){
            style = (i == this.state.currentPage) ? {color: 'orange'} : {color: 'white'};
            indicatorArr.push(
               <Text key={i} style={[{fontSize: 25}, style]}>&bull;</Text>
            );
        }
        return indicatorArr;
    },
    //当一针滚动结束后调用
    onAnimationEnd(e){
        // //1.求出水平方向的偏移量
        // alert(e);
        var offSetX = e.nativeEvent.contentOffset.x;
        var currentPage = Math.floor(offSetX / width);
        this.setState({
            currentPage: currentPage
        });
    }

});

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 64,
        backgroundColor: '#dddddd'
    },
    pageViewStyle: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        width: width,
        height: 30,
        //定位
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    // scroViewStyle: {
    //     height: 130,
    //     width: width,
    //     backgroundColor: 'red'
    // }
});

module.exports = scrollViewTest;