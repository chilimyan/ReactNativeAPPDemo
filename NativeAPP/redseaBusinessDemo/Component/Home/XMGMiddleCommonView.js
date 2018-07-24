/**
 * Created by apple on 2017/3/24.
 */
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
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

var XMGCommonMiddleView = React.createClass({
    getDefaultProps(){
       return {
           title: '',
           subTitle: '',
           titleColor: '',
           rightIcon: '',
           tplurl: '',//下级界面url路径
           callBackClickCell: null
       }
    },
    render(){
        return (
            <TouchableOpacity onPress={()=>{this.itemClicked(this.props.tplurl)}}>
                <View style={styles.container}>
                    {/*左边*/}
                    <View>
                        <Text style={[{color: this.props.titleColor},styles.titleStyle]}>{this.props.title}</Text>
                        <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                    </View>
                    {/*右边*/}
                    <Image source={{uri: this.props.rightIcon}} style={{width : 64,height: 43, resizeMode: 'contain'}}>

                    </Image>
                </View>
            </TouchableOpacity>
        );
    },
    itemClicked(data){
        // if (this.props.tplurl == null) return;
        // this.props.callBackClickCell(data);
    }
});

const styles = StyleSheet.create({
    container: {
        width: width/2 - 1,
        backgroundColor: 'white',
        height: 59,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 1,
        marginRight: 1,
    },
    titleStyle: {
        fontSize: 16,
        marginBottom: 5
    },
    subTitleStyle: {
        color: 'gray',
        fontSize:13
    }
});

module.exports = XMGCommonMiddleView;
