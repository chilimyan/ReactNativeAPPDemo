/**
 * Created by apple on 2017/3/21.
 * 头部轮播图,注意，有个问题，当在跳到详情页面时轮播图会继续滚动，导致偶发性闪退
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
} from 'react-native';

//引入计时器
var TimerMixin = require('react-timer-mixin');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var scrollImage = React.createClass({

    //注册计时器
    mixins: [TimerMixin],
    //数据传递
    getDefaultProps(){
       return{
           duration: 1000,
           imageDataArr:[]
       };
    },
    getInitialState(){
        return {
            //当前页码
            currentPage: 0,
            //标题
            title: this.props.imageDataArr[0].title
        };
    },


    render(){
        return(
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
                    {/*标题*/}
                    <Text style={{color: 'white', marginLeft: 5}}>{this.state.title}</Text>
                    {/*圆点*/}
                    <View style={{flexDirection:'row'}}>
                        {this.renderPageCircle()}
                    </View>

                </View>

            </View>
        );
    },
    componentWillMount(){
      alert(111);
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
            var imagsCount = this.props.imageDataArr.length;
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
        for (var i=0; i< this.props.imageDataArr.length; i ++){
            allImage.push(
                <Image key={i} source={{uri: this.props.imageDataArr[i].imgsrc}} style={{width: width, height: 130, marginTop: 0}} />
            );

        }
        return allImage;
    },
    renderPageCircle(){
        var indicatorArr = [];
        var style;
        var imagsArr = this.props.imageDataArr;
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
        // alert(this.props.imageDataArr[currentPage].title);
        this.setState({
            currentPage: currentPage,
            title: this.props.imageDataArr[currentPage].title
        });
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dddddd'
    },
    pageViewStyle: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: width,
        height: 30,
        //定位
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
});


module.exports = scrollImage;