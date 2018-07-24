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
    WebView
} from 'react-native';
//http://c.3g.163.com/nc/article//full.html

var newsDetail = React.createClass({

    getDefaultProps(){
        return{
            // url_api: 'http://c.3g.163.com/nc/article//full.html'
            // rowData: []
        }
    },
    getInitialState(){
       return{
           detailData: ''
       }
    },

    render(){
        return(
            <WebView
                automaticallyAdjustContentInsets={true}
                style={styles.webView}
                source={{html: this.state.detailData, baseUrl: ''}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate="normal"
                startInLoadingState={true}
                scalesPageToFit={this.state.scalesPageToFit}
            />
        );
    },
    componentDidMount(){
        var url_api = 'http://c.3g.163.com/nc/article/' + this.props.data.docid + '/full.html';
        fetch(url_api)
            .then((response) => response.json())
            .then((responseData) => {
            var allData = responseData[this.props.data.docid];
            var bodyHtml = allData['body'];
            //图片数组
                if (allData['img'].length > 0){
                    for (var i =0; i<allData['img'].length; i++){
                        //取出图片
                        var img = allData['img'][i];
                        //取出src
                        var imgSrc = img['src'];
                        var imgHtml = '<img src = "'+imgSrc+'" width="100%">';
                        bodyHtml = bodyHtml.replace(img['ref'], imgHtml);
                    }
                }
            this.setState({
                detailData: bodyHtml
            })
            })
            .catch((error) => {
            alert('请求数据失败');
            })
    }
});

const styles = StyleSheet.create({

});


module.exports = newsDetail;