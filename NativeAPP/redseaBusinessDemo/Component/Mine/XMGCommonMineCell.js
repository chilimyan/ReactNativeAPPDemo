
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

var XMGCOmmonMineCell = React.createClass({

    getDefaultProps(){
        return {
            leftIconNmae: '',
            leftTitle: '',
            rightIconName: '',
            rightTitle: ''
        };
    },

    render(){
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.rowClicked()}}>
                <View style={styles.container}>
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri: this.props.leftIconNmae}} style={styles.leftImageStyle}>
                        </Image>
                        <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                    </View>
                    <View style={styles.rightViewStyle}>
                        {this.rightSubView()}
                    </View>
                </View>
            </TouchableOpacity>
        );
    },
    rightSubView(){
        return(
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {this.renderRightCOntent()}
                <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight: 8, marginLeft:8}}></Image>
            </View>
        );
    },
    renderRightCOntent(){
        if (this.props.rightIconName.length == 0){
            return(
                <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
            );
        }else {
            return(
                <Image source={{uri: this.props.rightIconName}} style={{width: 24, height: 13}}></Image>
            );
        }
    },
    rowClicked(){

    }
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        alignItems: 'center',
        height: 44,
        borderBottomWidth: 0.5,
        borderBottomColor: "#e8e8e8"
    },
    leftViewStyle: {
        flexDirection:'row',
        alignItems:'center',
        marginLeft: 8
    },
    rightViewStyle: {
    },
    leftImageStyle: {
        width: 24,
        height: 24,
        marginRight:6,
        borderRadius: 12
    },
    leftTitleStyle: {
        fontSize: 16
    }
});

module.exports = XMGCOmmonMineCell;