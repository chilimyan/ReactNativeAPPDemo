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
    ScrollView,
    Switch
} from 'react-native';

var XMGCommonCell = React.createClass({
    getDefaultProps(){
        return {
            title: '',
            isSwitch: false,
            rightTitle: '',
        }
    },
    getInitialState(){
        return{
           isOn: false
        };
    },
    render(){
        return (
            <TouchableOpacity onPress={()=>this.cellClicked()}>
               <View style={styles.container}>
                    <Text style={{marginLeft: 8}}>{this.props.title}</Text>
                   {this.renderRightView()}
               </View>
            </TouchableOpacity>

        );
    },
    cellClicked(){

    },
    renderRightView(){
        if (this.props.isSwitch){
            return (
                <Switch value={this.state.isOn == true ? true : false} onValueChange={()=>{this.setState({
                    isOn: !this.state.isOn
                })}} style={{marginRight:8}}/>
            );
        }
        return(

            <View style={{flexDirection:'row'}}>
                {this.renderRightTitle()}
                <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight: 8}}></Image>
            </View>
        );
    },
    renderRightTitle(){
        if (this.props.rightTitle.length > 0){
            return (
                <Text style={{color: 'gray', marginRight: 3, alignItems:'center'}}>{this.props.rightTitle}</Text>
            );
        }
    }
});

const styles = StyleSheet.create({
    container: {
        height: 44,
        backgroundColor: 'white',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

module.exports = XMGCommonCell;