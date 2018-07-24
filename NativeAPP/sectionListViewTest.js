/**
 * Created by apple on 2017/3/20.
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

var carData = require('./Car.json');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var sectionListView = React.createClass({
    getInitialState(){
        var getSectionData = (dataBlob, sectionID) => {
           return dataBlob[sectionID];
        }
        var getRowData = (dataBlob, sectionID, rowID) =>{
            return dataBlob[sectionID+':'+rowID];
        }

        return{
            dataSource: new ListView.DataSource(
                // {rowHasChanged:(r1,r2)=>r1 !== r2}
                {
                    getSectionData: getSectionData,
                    getRowData: getRowData,
                    //绘制策略
                    rowHasChanged:(r1,r2)=>r1 !== r2,
                    sectionHeaderHasChanged:(s1,s2)=> s1!==s2
                })
        }
    },

    render(){
        return (

            <View style={styles.outerViewStyle}>
                {/*头部*/}
                <View style={styles.headerViewStyle}>
                    <Text style={{color: 'white', fontSize:15}}>SeeMyGo品牌</Text>
                </View>
                <ListView dataSource={this.state.dataSource}
                          renderRow={this.renderRow}
                          renderSectionHeader={this.renderSectionHeader}
                >

                </ListView>
            </View>

        );
    },
    //复杂操作，数据请求或者异步操作，定时器
    componentDidMount(){
        this.loadDataFromJson();
    },
    //生成dataBlob类型的数据结构
    loadDataFromJson(){
        //拿到json数据
        var jsonData = carData.data;
        var dataBlob = {},
            sectionIDs = [],
            rowIDs = [];
        for (var i = 0; i < jsonData.length; i ++){
            sectionIDs.push(i);
            dataBlob[i] = jsonData[i].title;
            rowIDs[i] = [];
            var tempRowIds = [];
            for (var j = 0; j < jsonData[i].cars.length; j ++){
                rowIDs[i].push(j);
                dataBlob[i+':'+j] = jsonData[i].cars[j];
            }
        }
        //更新 状态
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs)
        });
    },
    renderRow(rowData){
        return(
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.rowStyle}>
                    <Image source={{uri: rowData.icon}} style={styles.rowImageStyle}>

                    </Image>
                    <Text>{rowData.name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    },
    renderSectionHeader(sectionData, sectionID){
        return(
            <View style={styles.sectionHeadViewStyle}>
                <Text style={{marginLeft: 10}}>{sectionData}</Text>
            </View>
        );
    }

});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    outerViewStyle: {
        flex: 1,
        marginTop: 64
    },
    rowStyle: {
        flexDirection: 'row',
        alignItems:'center',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#e8e8e8'
    },
    rowImageStyle: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    headerViewStyle: {
        height: 64,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionHeadViewStyle: {
        backgroundColor: '#e8e8e8',
        height: 25,
        justifyContent: 'center'
    }
});


module.exports = sectionListView;