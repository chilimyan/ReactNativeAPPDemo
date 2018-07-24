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
} from 'react-native';

var newsLocalData = require('../newsDemoLocalData.json');
var Dimensions = require('Dimensions');
var ScrollImage = require('../component/CLScrollImage');
var NewsDetail = require('../component/CLNewsDetail');


var {width,height} = Dimensions.get('window');

var newsHome = React.createClass({

    getDefaultProps(){
        return{
           url_api: "http://c1.m.163.com/nc/article/headline/T1348647853363/0-20.html?from=toutiao&fn=2&passport=&devId=nTM86EPlcxZu09VdpTEh6aR3%2B%2FQX6x8vHBD3ne3k5bbgOrg%2FIP5DcguSDmtYyWbs&size=20&version=8.1&spever=false&net=wifi&lat=5OtqEKiivwW4K%2BGMt6DBdA%3D%3D&lon=jKlRVyYkSNti2wwsjGQHrw%3D%3D&ts=1463384311&sign=TtD7IZllDljVzBs2E4sa9fQyKTKF021w2EUC6qx1gEN48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore",
           key_word: "T1348647853363"
        }
    },
    //初始化方法设置数据源
    getInitialState(){
       return{
           //ListView 头部数据源
           headerDataArr: [],
           dataSource: new ListView.DataSource({
               rowHasChanged: (r1, r2) => r1 !== r2
           }),
       }
    },
    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderHeader={this.renderHeader}
            >

            </ListView>
        );
    },
    //请求网络数据
    componentDidMount(){
        this.loadDataFromNet();
    },
    loadDataFromNet(){
        fetch(this.props.url_api)
            .then((response) => response.json())
            .then((responseData) => {
                 //请求成功,token失效这里使用本地数据
            })
            .catch((error) => {
            if (error){
                this.dealWithData(newsLocalData);
            }
            });
    },
    dealWithData(tempData){
        var jsonData = tempData[this.props.key_word];
        var headerArr = [], listDataArr = [];
        for (var i = 0; i < jsonData.length; i ++){
            var data = jsonData[i];
            if (data.hasAD == 1){
                headerArr = data.ads;
            }else {
                listDataArr.push(data);
            }
        }
        this.setState({
            headerDataArr: headerArr,
            dataSource: this.state.dataSource.cloneWithRows(listDataArr)
        });
    },
    renderRow(rowData){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.pushTonewsDetail(rowData)}}>
                <View style={styles.cellViewStyle}>
                    <Image style={styles.imageStyle} source={{uri: rowData.imgsrc}}>

                    </Image>
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.titleStyle}>{rowData.title}</Text>
                        <Text style={styles.subTitleStyle}>{rowData.digest}</Text>
                        <Text style={styles.followTitleStyle}>{rowData.replyCount}跟帖</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },
    renderHeader(){
        if (this.state.headerDataArr.length == 0){
            return
        }
        return (
            <ScrollImage
                imageDataArr = {this.state.headerDataArr}
            />
        );
    },
    //跳转到新闻详情页
    pushTonewsDetail(data){
        this.props.navigator.push({
            component: NewsDetail,
            title: data.title,
            passProps:{data}
        });
     }
});

const styles = StyleSheet.create({

    cellViewStyle: {
        flexDirection: 'row',
        // alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e8e8e8',
        padding: 10
    },
    imageStyle: {
        width: 90,
        height: 90,
        marginRight: 8
    },
    titleStyle: {
        fontSize: 16,
        marginBottom: 5
    },
    subTitleStyle: {
        color: 'gray'
    },
    followTitleStyle: {

        position: 'absolute',
        right: 8,
        bottom: 0,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 3,
        color: 'gray'
    },
    rightViewStyle: {
        width: width*0.7
    }

});


module.exports = newsHome;