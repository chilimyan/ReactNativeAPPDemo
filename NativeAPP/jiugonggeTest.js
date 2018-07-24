/**
 * Created by apple on 2017/3/20.
 * 九宫格ListView
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
    AlertIOS
} from 'react-native';

var jiugongge = require('./shareData.json');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

//3列
var cols = 3;
var cellwh = 100;
var vMargin = (width - cellwh* cols)/(cols + 1);
var hMargin = 25;

var jiugonggeTest = React.createClass({
    getDefaultProps(){
       return {

       }
    },

    getInitialState(){
       var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
       return{
           dataSource: ds.cloneWithRows(jiugongge.data)
       }
    },

    render() {
        return (
            <ListView dataSource = {this.state.dataSource}
                      renderRow={this.renderRow}
                      contentContainerStyle={styles.listViewStyle}
            >
            </ListView>
        );
    },
    renderRow(rowData,sectionID,rowID,highlightRow){
        return(
           <TouchableOpacity activeOpacity={0.5} onPress={()=>{AlertIOS.alert(rowID)}}>
               <View style={styles.innerViewStyle}>
                   <Image source={{uri: rowData.icon}} style={styles.iconStyle}>
                   </Image>
                   <Text>
                       {rowData.title}
                   </Text>
               </View>
           </TouchableOpacity>
        );
    },
})

const styles = StyleSheet.create({
    iconStyle:{
        width: 80,
        height: 80,
        marginBottom: 10
    },
    listViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    innerViewStyle: {
        width: cellwh,
        height: cellwh,
        marginLeft: vMargin,
        marginTop: hMargin,
        alignItems: 'center'
    }
});

module.exports = jiugonggeTest;