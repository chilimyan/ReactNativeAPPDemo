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
    TextInput,
    TouchableOpacity,
    ScrollView,
    ListView,
    AlertIOS,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';

var XMGBottomCommonCell = React.createClass({

    getDefaultProps(){
       return{
           leftIcon: '',
           leftTitle: '',
           rightTitle: ''
       }
    },

    render(){
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.clickedItem()}}>
                <View style={styles.container}>
                    {/*左边*/}
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri: this.props.leftIcon}} style={{width: 23, height: 23,marginRight:5}}/>
                        <Text>
                            {this.props.leftTitle}
                        </Text>
                    </View>
                    {/*右边*/}
                    <View style={styles.rightViewStyle}>
                        <Text style={{color:'gray'}}>
                            {this.props.rightTitle}
                        </Text>
                        <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight: 8,marginLeft:5}}>

                        </Image>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },
    clickedItem(){

    }
});

const styles = StyleSheet.create({
    container: {
        height:44,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',

        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5
    },
    rightViewStyle: {
        flexDirection:'row',
        alignItems: 'center'
    },
    leftViewStyle: {
        flexDirection:'row',
        alignItems: 'center',
        marginLeft: 8
    }
});

module.exports = XMGBottomCommonCell;
