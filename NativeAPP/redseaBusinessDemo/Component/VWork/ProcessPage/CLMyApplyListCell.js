/**
 * Created by apple on 2017/5/8.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

var CLMyApplyListCell = React.createClass({
    getDefaultProps(){
        return {
            applyTitle: '',
            applyTime: '',
            applyState: '',
            applyTip: '',
        }
    },
    render(){
        return (
            <TouchableOpacity onPress={()=>this.cellClicked()}>
                <View style={styles.container}>
                    <View style={styles.leftViewStyle}>
                        <Text numberOfLines={2} style={{color: 'black', fontSize: 16,height: 36,flexWrap: 'nowrap'}}>{this.props.applyTitle}</Text>
                        <Text style={{color: 'gray', fontSize: 14,height: 14,position:'absolute', bottom: 12}}>{this.props.applyTip}</Text>
                    </View>
                    <View style={styles.middleViewStyle}>
                        <Text style={{color: 'gray', fontSize: 12,height: 12, flexWrap: 'nowrap'}}>{this.props.applyTime}</Text>
                        <Text style={{color: 'red', fontSize: 14,height: 14,position:'absolute', bottom: 12,right: 12}}>{this.props.applyState}</Text>
                    </View>
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>

        );
    },
    cellClicked(){

    },
    renderRightView(){
        return(
            <View style= {styles.rightViewStyle} >
                <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight: 8}}></Image>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        height: 84,
        backgroundColor: 'white',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.5,
        flexDirection: 'row'
    },
    leftViewStyle: {
        height:84,
        width: width - 121,
        paddingLeft: 16,
        paddingBottom: 12,
        paddingTop: 12,
        alignItems: 'flex-start',
        flexWrap: 'nowrap',
    },
    middleViewStyle:{
        height:84,
        width: 100,
        paddingLeft: 16,
        paddingBottom: 12,
        paddingTop: 12,
        alignItems: 'flex-end',
        flexWrap: 'nowrap',
        paddingRight: 12,
    },
    rightViewStyle:{
        width: 21,
        alignItems: 'center',
        flexDirection: 'row'
    }
});

module.exports = CLMyApplyListCell;